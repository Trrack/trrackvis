import { BaseArtifactType, NodeId, ProvenanceNode } from '@trrack/core';
import React, { useEffect, useMemo, useState } from 'react';
import * as d3 from 'd3';
import { AnimatedIcon } from './AnimatedIcon';
import { AnimatedLine } from './AnimatedLine';
import { ProvVisConfig } from './ProvVis';
import { NodeDescription } from './NodeDescription';
import { StratifiedMap } from './useComputeNodePosition';
import { IconLegend } from './IconLegend';
import { useSpring, animated, easings } from 'react-spring';

// TODOs:
// Bookmarking doing something
// Annotations doing something
// Storybooks for each part of config
// Maybe fill nodes behind your current to signify that they have happened

export function Tree<T, S extends string, A extends BaseArtifactType<any>>({
    nodes,
    links,
    currentNode,
    config,
}: {
    nodes: StratifiedMap<T, S, A>;
    links: d3.HierarchyLink<ProvenanceNode<T, S, A>>[];
    config: ProvVisConfig<T, S, A>;
    currentNode: NodeId;
}) {
    const [hoverNode, setHoverNode] = useState<NodeId | null>(null);
    const [annotationDepth, setAnnotationDepth] = useState<number | null>(null);
    const [xPan, setXPan] = useState<number>(0);

    useEffect(() => {
      setXPan(0)
    }, [currentNode])

    const maxWidth = useMemo(() => {
        return Math.max(
            ...Object.values(nodes).map((node) => (node.width ? node.width : 0))
            // config.nodeWidthShown
        );
    }, [nodes]);

    const maxHeight = useMemo(() => {
        return Math.max(
            ...Object.values(nodes).map((node) =>
                node.height ? node.height : 0
            )
        );
    }, [nodes]);

    const descriptionDivAnimation = useSpring({
        config: {
            duration: config.animationDuration,

            easing: easings.easeInOutSine,
        },
        width: `${
            config.labelWidth +
            config.marginRight +
            (config.nodeWidthShown - maxWidth > 0
                ? (config.nodeWidthShown - maxWidth) * config.gutter
                : 0)
        }px`,
    });

    const svgDivAnimation = useSpring({
        config: {
            duration: config.animationDuration,

            easing: easings.easeInOutSine,
        },
        width: `${
            (maxWidth > config.nodeWidthShown
                ? config.nodeWidthShown
                : maxWidth) *
                config.gutter +
            config.marginLeft +
            config.nodeAndLabelGap
        }px`,
    });

    const svgPanAnimation = useSpring({
        config: {
            duration: config.animationDuration,
            easing: easings.easeInOutSine,
        },
        immediate: xPan !== 0,
        transform: `translate(${config.marginLeft + xPan}, ${
            config.marginTop
        })`,
    });

    // give each event type a color to use for the default icons
    // colors are the default tableau 10 colors
    const colorMap = useMemo(() => {
        const tableauColors = [
            '#1F77B4',
            '#FF7F0E',
            '#2CA02C',
            '#D62728',
            '#9467BD',
            '#8C564B',
            '#CFECF9',
            '#7F7F7F',
            '#BCBD22',
            '#17BECF',
        ];

        let currColorNumber = 0;

        const innerColorMap: Record<S | 'Root', string> = {} as Record<
            S | 'Root',
            string
        >;

        innerColorMap.Root = 'black';

        Object.values(nodes).forEach((node) => {
            if (!innerColorMap[node.data.meta.eventType]) {
                innerColorMap[node.data.meta.eventType] =
                    tableauColors[currColorNumber % 10];
                currColorNumber += 1;
            }
        });

        return innerColorMap;
    }, [nodes]);

    // render the descriptions for the backbone nodes
    const descriptions = useMemo(() => {
        return Object.values(nodes)
            .filter((node) => node.width === 0)
            .map((node) => {
                return (
                    <NodeDescription
                        key={node.id}
                        config={config}
                        depth={node.depth}
                        node={node.data}
                        currentNode={currentNode}
                        onClick={() => config.changeCurrent(node.id)}
                        isHover={node.id === hoverNode}
                        setHover={(currNode: NodeId | null) =>
                            setHoverNode(currNode)
                        }
                        colorMap={colorMap}
                        setAnnotationDepth={(depth: number | null) => {
                            if (annotationDepth !== depth) {
                                setAnnotationDepth(depth);
                            } else {
                                setAnnotationDepth(null);
                            }
                        }}
                        annotationDepth={annotationDepth}
                        yOffset={0}
                    />
                );
            });
    }, [nodes, currentNode, hoverNode, annotationDepth, colorMap, config]);

    // render edges for every node
    const edges = useMemo(() => {
        return links.map((link) => {
            // TODO:: idk how to fix this typing
            const sourceWidth = (
                link.source as d3.HierarchyNode<ProvenanceNode<T, S, A>> & {
                    width: number;
                }
            ).width;

            const targetWidth = (
                link.target as d3.HierarchyNode<ProvenanceNode<T, S, A>> & {
                    width: number;
                }
            ).width;

            return (
                <AnimatedLine
                    key={link.source.id + link.target.id}
                    uniqueKey={link.source.id + link.target.id}
                    parentNode={link.source}
                    nodes={nodes}
                    x1Width={sourceWidth}
                    x2Width={targetWidth}
                    y1Depth={link.source.depth}
                    y2Depth={link.target.depth}
                    config={config}
                    xOffset={
                        (maxWidth > config.nodeWidthShown
                            ? config.nodeWidthShown
                            : maxWidth) * config.gutter
                    }
                    y1Offset={0}
                    y2Offset={0}
                />
            );
        });
    }, [links, config]);

    // render icons for every node
    const nodeIcons = useMemo(() => {
        return Object.values(nodes).map((node) => {
            return (
                <AnimatedIcon
                    key={node.id}
                    width={node.width}
                    depth={node.depth}
                    onClick={() => {
                        // this if is just to avoid some annoying hovers that would flash quickly when you switched nodes
                        if (node.width !== 0) {
                            setHoverNode(null);
                        }
                        config.changeCurrent(node.id);
                    }}
                    nodes={nodes}
                    config={config}
                    node={node.data}
                    currentNode={currentNode}
                    isHover={node.id === hoverNode}
                    setHover={(currNode: NodeId | null) =>
                        setHoverNode(currNode)
                    }
                    colorMap={colorMap}
                    xOffset={
                        (maxWidth > config.nodeWidthShown
                            ? config.nodeWidthShown
                            : maxWidth) * config.gutter
                    }
                    yOffset={0}
                />
            );
        });
    }, [nodes, currentNode, config, hoverNode, colorMap]);

    d3.ZoomTransform
    // // apply zoom/panning
    useEffect(() => {
        const zoom = d3
            .zoom()
            .scaleExtent([1, 1])
            .translateExtent([
                [(config.nodeWidthShown - maxWidth) * config.gutter, 0],
                [
                    (maxWidth > config.nodeWidthShown
                        ? config.nodeWidthShown
                        : maxWidth) *
                        config.gutter +
                        config.marginLeft +
                        config.nodeAndLabelGap,
                    0,
                ],
            ]);

        zoom.on('zoom', (event: d3.D3ZoomEvent<any, any>) => {
            const { transform } = event;
            setXPan(transform.x);
        });


        const svg = d3.select<SVGGElement, any>(`#panLayer`)

        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        zoom.transform(svg, d3.zoomIdentity);

        d3.select<SVGGElement, any>(`#panLayer`).call(zoom as any);
    }, [maxWidth, config, currentNode]);

    return (
        <div
            style={{
                display: 'flex',
                height: '100%',
                gap: `0px`,
                overflowY: 'auto',
                overflowX: 'hidden',
            }}
        >
            <animated.div
                style={{
                    height: '100%',
                    ...svgDivAnimation,
                }}
            >
                <svg
                    id="panLayer"
                    style={{
                        overflow: 'hidden',
                        height: `${
                            (maxHeight + 1) * config.verticalSpace +
                            config.marginTop
                        }`,
                        width: `${
                            config.nodeWidthShown * config.gutter +
                            config.marginLeft +
                            config.nodeAndLabelGap
                        }px`,
                    }}
                >
                    <animated.g
                        {...svgPanAnimation}
                    >
                        {edges}
                        {nodeIcons}
                    </animated.g>
                </svg>
            </animated.div>
            <animated.div
                style={{
                    position: 'relative',
                    ...descriptionDivAnimation,
                }}
            >
                {descriptions}
            </animated.div>

            {/* <IconLegend colorMap={colorMap} nodes={nodes} config={config} /> */}
        </div>
    );
}
