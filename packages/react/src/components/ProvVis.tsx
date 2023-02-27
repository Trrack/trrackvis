import { BaseArtifactType, NodeId, Nodes } from '@trrack/core';
import React, { useMemo } from 'react';
import { IconConfig } from '../utils/IconConfig';
import { Tree } from './Tree';
import { useComputeNodePosition } from './useComputeNodePosition';

interface ProvVisProps<T, S extends string, A extends BaseArtifactType<any>> {
    root: NodeId;
    currentNode: NodeId;
    nodeMap: Nodes<T, S, A>;
    config?: Partial<ProvVisConfig<T, S, A>>;
}

export interface ProvVisConfig<
    T,
    S extends string,
    A extends BaseArtifactType<any>
> {
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
    iconConfig: IconConfig<T, S, A> | null;
    changeCurrent: (id: NodeId) => void;
    bookmarkNode: ((id: NodeId) => void) | null;
    annotateNode: ((id: NodeId, annotation: string) => void) | null;
    getAnnotation: (id: NodeId) => string;
    isBookmarked: (id: NodeId) => boolean;
}

const defaultConfig: ProvVisConfig<any, any, any> = {
    gutter: 25,
    nodeWidthShown: 3,
    verticalSpace: 50,
    marginTop: 50,
    marginRight: 40,
    marginLeft: 50,
    animationDuration: 500,
    annotationHeight: 150,
    nodeAndLabelGap: 20,
    labelWidth: 150,
    iconConfig: null,
    changeCurrent: () => null,
    bookmarkNode: null,
    annotateNode: null,
    getAnnotation: (id: NodeId) => '',
    isBookmarked: (id: NodeId) => false,
};

export function ProvVis<T, S extends string, A extends BaseArtifactType<any>>({
    nodeMap,
    root,
    currentNode,
    config,
}: ProvVisProps<T, S, A>) {
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
