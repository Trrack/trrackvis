import { NodeId, Nodes, ProvenanceNode } from '@trrack/core';
import { useMemo, MouseEvent } from 'react';
import { IconConfig } from '../utils/IconConfig';
import { Tree } from './Tree';
import { useComputeNodePosition } from './useComputeNodePosition';

interface ProvVisProps<T, S extends string> {
    root: NodeId;
    currentNode: NodeId;
    nodeMap: Nodes<T, S>;
    config?: Partial<ProvVisConfig<T, S>>;
}

/**
 * Callback to fire when a node is hoveredl
 */
export type HoverCallback<T, S extends string> = (
    node: ProvenanceNode<T, S> | null,
    event: MouseEvent | null
) => void;

export interface ProvVisConfig<T, S extends string> {
    gutter: number;
    verticalSpace: number;
    nodeWidthShown: number;
    marginRight: number;
    marginTop: number;
    marginLeft: number;
    animationDuration: number;
    annotationHeight: number;
    nodeAndLabelGap: number;
    labelWidth: number;
    iconConfig: IconConfig<T, S> | null;
    changeCurrent: (id: NodeId) => void;
    bookmarkNode: ((id: NodeId) => void) | null;
    annotateNode: ((id: NodeId, annotation: string) => void) | null;
    getAnnotation: (id: NodeId) => string;
    isBookmarked: (id: NodeId) => boolean;
    isDarkMode: boolean;
    nodeExtra: Partial<Record<S | '*', React.ReactElement | null>>;
    /**
     * Callbacks to fire when a node is hovered
     * @param node The node that is hovered
     * @param event The onMouseOver event that triggered the hover
     */
    nodeHoverCallbacks: HoverCallback<T, S>[];
}

const defaultConfig: ProvVisConfig<any, any> = {
    gutter: 25,
    nodeWidthShown: 3,
    verticalSpace: 30,
    marginTop: 50,
    marginRight: 40,
    marginLeft: 50,
    animationDuration: 500,
    annotationHeight: 150,
    nodeAndLabelGap: 20,
    labelWidth: 150,
    iconConfig: null,
    changeCurrent: () => null,
    bookmarkNode: () => null,
    annotateNode: null,
    getAnnotation: () => '',
    isBookmarked: () => false,
    isDarkMode: false,
    nodeExtra: {},
    nodeHoverCallbacks: [],
};

export function ProvVis<T, S extends string>({
    nodeMap,
    root,
    currentNode,
    config,
}: ProvVisProps<T, S>) {
    const { stratifiedMap: nodePositions, links } = useComputeNodePosition(
        nodeMap,
        currentNode,
        root
    );

    const mergedConfig = useMemo(() => {
        return { ...defaultConfig, ...config };
    }, [config]);

    return (
        <Tree
            nodes={nodePositions}
            links={links}
            config={mergedConfig}
            currentNode={currentNode}
        />
    );
}
