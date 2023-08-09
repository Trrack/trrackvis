import { NodeId, Nodes } from '@trrack/core';
import { useMemo } from 'react';
import { IconConfig } from '../utils/IconConfig';
import { Tree } from './Tree';
import { useComputeNodePosition } from './useComputeNodePosition';

interface ProvVisProps<T, S extends string> {
    root: NodeId;
    currentNode: NodeId;
    nodeMap: Nodes<T, S>;
    config?: Partial<ProvVisConfig<T, S>>;
}

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
    nodeExtra: Partial<Record<S | '*', React.ReactElement | null>>;
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
    nodeExtra: {},
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
