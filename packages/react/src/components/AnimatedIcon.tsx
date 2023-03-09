import { Stack, Text, Tooltip } from '@mantine/core';
import { BaseArtifactType, NodeId, ProvenanceNode } from '@trrack/core';
import { useMemo } from 'react';
import { animated, easings, useTransition } from 'react-spring';
import { defaultIcon } from '../utils/IconConfig';
import { ProvVisConfig } from './ProvVis';
import { StratifiedMap } from './useComputeNodePosition';

export function AnimatedIcon<
    T,
    S extends string,
    A extends BaseArtifactType<any>
>({
    width,
    depth,
    yOffset,
    onClick,
    config,
    node,
    currentNode,
    nodes,
    isHover,
    setHover,
    colorMap,
    xOffset,
}: {
    width: number;
    depth: number;
    yOffset: number;
    onClick: () => void;
    config: ProvVisConfig<T, S, A>;
    node: ProvenanceNode<T, S, A>;
    nodes: StratifiedMap<T, S, A>;
    currentNode: NodeId;
    isHover: boolean;
    setHover: (node: NodeId | null) => void;
    colorMap: Record<S | 'Root', string>;
    xOffset: number;
}) {
    const transitions = useTransition([node], {
        config: {
            duration: config.animationDuration,

            easing: easings.easeInOutSine,
        },
        keys: [node.id],
        from: {
            opacity: 0,
            transform: `translate(${-width * config.gutter + xOffset} , ${
                (depth - 1) * config.verticalSpace + yOffset
            })`,
        },
        enter: {
            delay:
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                nodes[node.id].parent?.children.length > 1
                    ? config.animationDuration / 3
                    : 0,
            opacity: 1,
            transform: `translate(${-width * config.gutter + xOffset} , ${
                depth * config.verticalSpace + yOffset
            })`,
        },
        update: {
            opacity: 1,
            transform: `translate(${-width * config.gutter + xOffset} , ${
                depth * config.verticalSpace + yOffset
            })`,
        },
    });

    const icon = useMemo(() => {
        const currentIconConfig = config.iconConfig?.[node.meta.eventType];
        const currDefaultIcon = defaultIcon(colorMap[node.meta.eventType]);

        if (currentIconConfig && currentIconConfig.glyph) {
            if (node.id === currentNode && currentIconConfig.currentGlyph) {
                return currentIconConfig.currentGlyph(node);
            }
            if (isHover && currentIconConfig.hoverGlyph) {
                return currentIconConfig.hoverGlyph(node);
            }
            if (width === 0 && currentIconConfig.backboneGlyph) {
                return currentIconConfig.backboneGlyph(node);
            }

            return currentIconConfig.glyph(node);
        }
        if (node.id === currentNode) {
            return currDefaultIcon.currentGlyph(node);
        }
        if (isHover) {
            return currDefaultIcon.hoverGlyph(node);
        }
        if (width === 0) {
            return currDefaultIcon.backboneGlyph(node);
        }

        return currDefaultIcon.glyph(node);
    }, [config.iconConfig, currentNode, isHover, width, colorMap, node]);

    return transitions((style) => {
        return (
            <animated.g
                {...style}
                cursor="pointer"
                onClick={onClick}
                className="provenance-node"
                data-node-id={node.id}
                onMouseOver={() => {
                    if (!style.transform.isAnimating) {
                        setHover(node.id);
                    }
                }}
                onMouseOut={() => setHover(null)}
            >
                <Tooltip
                    position="top-start"
                    openDelay={200}
                    withinPortal={true}
                    withArrow
                    color="gray"
                    multiline
                    sx={{ maxWidth: '200px' }}
                    label={
                        <Stack spacing={0}>
                            <Text weight={600}>{node.label}</Text>
                            {config.getAnnotation(node.id).length > 0 ? (
                                <Text size="xs">
                                    {config.getAnnotation(node.id)}
                                </Text>
                            ) : null}
                        </Stack>
                    }
                >
                    {icon}
                </Tooltip>
            </animated.g>
        );
    });
}
