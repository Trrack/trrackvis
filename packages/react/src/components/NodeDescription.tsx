import {
    BaseArtifactType,
    isStateNode,
    NodeId,
    ProvenanceNode,
} from '@trrack/core';
import React, { useState } from 'react';
import { useSpring, animated, easings } from 'react-spring';
import { AnnotationButton } from './AnnotationButton';
import { BookmarkButton } from './BookmarkButton';
import { ProvVisConfig } from './ProvVis';
import { Stack, Tooltip, Text } from '@mantine/core';

export function NodeDescription<
    T,
    S extends string,
    A extends BaseArtifactType<any>
>({
    depth,
    yOffset,
    node,
    config,
    currentNode,
    onClick,
    isHover,
    setHover,
    colorMap,
}: {
    depth: number;
    yOffset: number;
    node: ProvenanceNode<T, S, A>;
    config: ProvVisConfig<T, S, A>;
    currentNode: NodeId;
    onClick: () => void;
    isHover: boolean;
    setHover: (node: NodeId | null) => void;
    colorMap: Record<S | 'Root', string>;
}) {
    const style = useSpring({
        config: {
            duration: config.animationDuration,
            easing: easings.easeInOutSine,
        },
        from: {
            opacity: 0,
            top:
                depth * config.verticalSpace +
                config.marginTop +
                yOffset -
                config.verticalSpace / 2,
        },
        to: {
            opacity: 1,
            top:
                depth * config.verticalSpace +
                config.marginTop +
                yOffset -
                config.verticalSpace / 2,
        },
    });

    const [isAnnotationOpen, setIsAnnotationOpen] = useState<boolean>(false);

    return (
        <animated.div
            style={{
                ...style,
                cursor: 'pointer',
                position: 'absolute',
                display: 'flex',
                flexDirection: 'row',
                height: config.verticalSpace,
                alignContent: 'center',
                flexWrap: 'wrap',
                width: `100%`,
            }}
            onClick={onClick}
            onMouseEnter={() => setHover(node.id)}
            onMouseLeave={() => setHover(null)}
        >
            <div
                style={{
                    width: `calc(100% - ${config.marginRight}px)`,
                    display: 'flex',
                    flexDirection: 'row',
                }}
            >
                <div
                    style={{
                        alignItems: 'start',
                        justifyContent: 'center',
                        display: 'flex',
                        flexDirection: 'column',
                        marginRight: 'auto',
                        width: '100%',
                    }}
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
                        <p
                            style={{
                                maxWidth: `100%`,
                                margin: 0,
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',
                                whiteSpace: 'nowrap',
                            }}
                        >
                            {node.label}
                        </p>
                    </Tooltip>
                    {isStateNode(node) ? (
                        <p
                            style={{
                                maxWidth: `${config.labelWidth}px`,
                                margin: 0,
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',
                                whiteSpace: 'nowrap',
                                color: 'gray',
                                fontSize: 10,
                            }}
                        >
                            {config.getAnnotation(node.id)}
                        </p>
                    ) : null}
                </div>
            </div>
            {config.bookmarkNode !== null &&
            (isHover || isAnnotationOpen || config.isBookmarked(node.id)) ? (
                <BookmarkButton
                    color={colorMap[node.meta.eventType]}
                    isBookmarked={config.isBookmarked(node.id)}
                    onClick={() => config.bookmarkNode?.(node.id)}
                />
            ) : null}
            {config.annotateNode !== null && (isHover || isAnnotationOpen) ? (
                <AnnotationButton
                    color="cornflowerblue"
                    annotationOpen={isAnnotationOpen}
                    setAnnotationOpen={(b: boolean) => setIsAnnotationOpen(b)}
                    setAnnotation={(s) => config.annotateNode?.(node.id, s)}
                    annotation={config.getAnnotation(node.id)}
                />
            ) : null}
        </animated.div>
    );
}
