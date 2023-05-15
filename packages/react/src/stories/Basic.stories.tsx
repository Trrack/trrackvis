/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */

import { Meta, StoryObj } from '@storybook/react';
import { useEffect, useState } from 'react';

import { NodeId } from '@trrack/core';
import { ProvVisStoryProps } from '../../.storybook/preview';
import { Graph, useTrrack } from './useTrrack';

type Story = StoryObj<ProvVisStoryProps>;

export default {
    component: Graph,
} as Meta<typeof Graph>;

export const LinearExample: Story = {
    render: (props) => {
        const { trrack: t, actions } = useTrrack();

        useEffect(() => {
            t.apply('Add task', actions.addTask({ id: '1', complete: false }));
            t.apply('Add task', actions.addTask({ id: '2', complete: false }));
            t.apply('Add task', actions.addTask({ id: '3', complete: false }));
            t.apply('Add task', actions.addTask({ id: '4', complete: false }));
            t.apply('Add task', actions.addTask({ id: '5', complete: false }));
            t.apply('Add task', actions.addTask({ id: '6', complete: false }));
            t.apply('Add task', actions.addTask({ id: '7', complete: false }));
        }, []);

        return t ? (
            <Graph config={props} actions={actions} trrack={t} />
        ) : (
            <div></div>
        );
    },
};

export const OneBranch: Story = {
    render: (props) => {
        const { trrack: t, actions } = useTrrack();

        useEffect(() => {
            t.apply('Add task', actions.addTask({ id: '1', complete: false }));
            t.apply('Add task', actions.addTask({ id: '2', complete: false }));
            t.apply('Add task', actions.addTask({ id: '3', complete: false }));
            t.apply('Add task', actions.addTask({ id: '4', complete: false }));
            t.apply('Add task', actions.addTask({ id: '5', complete: false }));
            t.undo();
            t.undo();
            t.apply('Add task', actions.addTask({ id: '6', complete: false }));
            t.apply('Add task', actions.addTask({ id: '7', complete: false }));
            t.apply('Add task', actions.addTask({ id: '8', complete: false }));
            t.apply('Add task', actions.addTask({ id: '9', complete: false }));
        }, []);

        return t ? (
            <Graph config={props} actions={actions} trrack={t} />
        ) : (
            <div></div>
        );
    },
};

export const Complex: Story = {
    render: (props) => {
        const { trrack: t, actions } = useTrrack();

        useEffect(() => {
            t.apply('Add task', actions.addTask({ id: '1', complete: false }));
            t.apply('Add task', actions.addTask({ id: '2', complete: false }));
            t.apply('Add task', actions.addTask({ id: '3', complete: false }));
            t.apply('Add task', actions.addTask({ id: '4', complete: false }));
            t.apply('Add task', actions.addTask({ id: '5', complete: false }));
            t.undo();
            t.undo();
            t.apply('Add task', actions.addTask({ id: '6', complete: false }));
            t.apply('Add task', actions.addTask({ id: '7', complete: false }));
            t.apply('Add task', actions.addTask({ id: '8', complete: false }));
            t.apply('Add task', actions.addTask({ id: '9', complete: false }));
            t.undo();
            t.apply('Add task', actions.addTask({ id: '14', complete: false }));
            t.undo();
            t.undo();
            t.apply('Add task', actions.addTask({ id: '10', complete: false }));
            t.apply('Add task', actions.addTask({ id: '11', complete: false }));
            t.apply('Add task', actions.addTask({ id: '12', complete: false }));
            t.apply('Add task', actions.addTask({ id: '13', complete: false }));
        }, []);
        return t ? (
            <Graph config={props} actions={actions} trrack={t} />
        ) : (
            <div></div>
        );
    },
};

export const LargeGutter: Story = {
    render: (props) => {
        const { trrack: t, actions } = useTrrack();

        useEffect(() => {
            t.apply('Add task', actions.addTask({ id: '1', complete: false }));
            t.apply('Add task', actions.addTask({ id: '2', complete: false }));
            t.apply('Add task', actions.addTask({ id: '3', complete: false }));
            t.apply('Add task', actions.addTask({ id: '4', complete: false }));
            t.apply('Add task', actions.addTask({ id: '5', complete: false }));
            t.undo();
            t.undo();
            t.apply('Add task', actions.addTask({ id: '6', complete: false }));
            t.apply('Add task', actions.addTask({ id: '7', complete: false }));
            t.apply('Add task', actions.addTask({ id: '8', complete: false }));
            t.apply('Add task', actions.addTask({ id: '9', complete: false }));
            t.undo();
            t.apply('Add task', actions.addTask({ id: '14', complete: false }));
            t.undo();
            t.undo();
            t.apply('Add task', actions.addTask({ id: '10', complete: false }));
            t.apply('Add task', actions.addTask({ id: '11', complete: false }));
            t.apply('Add task', actions.addTask({ id: '12', complete: false }));
            t.apply('Add task', actions.addTask({ id: '13', complete: false }));
        }, []);

        return t ? (
            <Graph config={props} actions={actions} trrack={t} />
        ) : (
            <div></div>
        );
    },
};

LargeGutter.args = {
    gutter: 50,
};

export const LargeVertSpace: Story = {
    render: (props) => {
        const { trrack: t, actions } = useTrrack();

        useEffect(() => {
            t.apply('Add task', actions.addTask({ id: '1', complete: false }));
            t.apply('Add task', actions.addTask({ id: '2', complete: false }));
            t.apply('Add task', actions.addTask({ id: '3', complete: false }));
            t.apply('Add task', actions.addTask({ id: '4', complete: false }));
            t.apply('Add task', actions.addTask({ id: '5', complete: false }));
            t.undo();
            t.undo();
            t.apply('Add task', actions.addTask({ id: '6', complete: false }));
            t.apply('Add task', actions.addTask({ id: '7', complete: false }));
            t.apply('Add task', actions.addTask({ id: '8', complete: false }));
            t.apply('Add task', actions.addTask({ id: '9', complete: false }));
            t.undo();
            t.apply('Add task', actions.addTask({ id: '14', complete: false }));
            t.undo();
            t.undo();
            t.apply('Add task', actions.addTask({ id: '10', complete: false }));
            t.apply('Add task', actions.addTask({ id: '11', complete: false }));
            t.apply('Add task', actions.addTask({ id: '12', complete: false }));
            t.apply('Add task', actions.addTask({ id: '13', complete: false }));
        }, []);
        return t ? (
            <Graph config={props} actions={actions} trrack={t} />
        ) : (
            <div></div>
        );
    },
};
LargeVertSpace.args = {
    verticalSpace: 50,
};

export const VertScrolling: Story = {
    render: (props) => {
        const { trrack: t, actions } = useTrrack();

        useEffect(() => {
            t.apply('Add task', actions.addTask({ id: '1', complete: false }));
            t.apply('Add task', actions.addTask({ id: '2', complete: false }));
            t.apply('Add task', actions.addTask({ id: '3', complete: false }));
            t.apply('Add task', actions.addTask({ id: '4', complete: false }));
            t.apply('Add task', actions.addTask({ id: '5', complete: false }));
            t.undo();
            t.undo();
            t.apply('Add task', actions.addTask({ id: '6', complete: false }));
            t.apply('Add task', actions.addTask({ id: '7', complete: false }));
            t.apply('Add task', actions.addTask({ id: '8', complete: false }));
            t.apply('Add task', actions.addTask({ id: '9', complete: false }));
            t.undo();
            t.apply('Add task', actions.addTask({ id: '14', complete: false }));
            t.undo();
            t.undo();
            t.apply('Add task', actions.addTask({ id: '10', complete: false }));
            t.apply('Add task', actions.addTask({ id: '11', complete: false }));
            t.apply('Add task', actions.addTask({ id: '12', complete: false }));
            t.apply('Add task', actions.addTask({ id: '13', complete: false }));
        }, []);
        return t ? (
            <Graph config={props} actions={actions} trrack={t} />
        ) : (
            <div></div>
        );
    },
};

VertScrolling.args = {
    verticalSpace: 120,
};

export const Bookmarks: Story = {
    render: (props) => {
        const { trrack: t, actions } = useTrrack();

        const [bookmarkNodes, setBookmarkNodes] = useState<NodeId[]>([]);

        useEffect(() => {
            t.apply('Add task', actions.addTask({ id: '1', complete: false }));
            t.apply('Add task', actions.addTask({ id: '2', complete: false }));
            t.apply('Add task', actions.addTask({ id: '3', complete: false }));
            t.apply('Add task', actions.addTask({ id: '4', complete: false }));
            t.apply('Add task', actions.addTask({ id: '5', complete: false }));
            t.undo();
            t.undo();
            t.apply('Add task', actions.addTask({ id: '6', complete: false }));
            t.apply('Add task', actions.addTask({ id: '7', complete: false }));
            t.apply('Add task', actions.addTask({ id: '8', complete: false }));
            t.apply('Add task', actions.addTask({ id: '9', complete: false }));
            t.undo();
            t.apply('Add task', actions.addTask({ id: '14', complete: false }));
            t.undo();
            t.undo();
            t.apply('Add task', actions.addTask({ id: '10', complete: false }));
            t.apply('Add task', actions.addTask({ id: '11', complete: false }));
            t.apply('Add task', actions.addTask({ id: '12', complete: false }));
            t.apply('Add task', actions.addTask({ id: '13', complete: false }));
        }, []);

        return t ? (
            <Graph
                actions={actions}
                trrack={t}
                config={{
                    ...props,
                    isBookmarked: (n: NodeId) => bookmarkNodes.includes(n),
                    bookmarkNode: (n: NodeId) =>
                        bookmarkNodes.includes(n)
                            ? setBookmarkNodes(
                                  bookmarkNodes.filter((node) => node !== n)
                              )
                            : setBookmarkNodes([...bookmarkNodes, n]),
                }}
            />
        ) : (
            <div></div>
        );
    },
};

export const Annotations: Story = {
    render: (props) => {
        const { trrack: t, actions } = useTrrack();

        const [annotations, setAnnotations] = useState<Record<NodeId, string>>(
            {}
        );

        useEffect(() => {
            t.apply('Add task', actions.addTask({ id: '1', complete: false }));
            t.apply('Add task', actions.addTask({ id: '2', complete: false }));
            t.apply('Add task', actions.addTask({ id: '3', complete: false }));
            t.apply('Add task', actions.addTask({ id: '4', complete: false }));
            t.apply('Add task', actions.addTask({ id: '5', complete: false }));
            t.undo();
            t.undo();
            t.apply('Add task', actions.addTask({ id: '6', complete: false }));
            t.apply('Add task', actions.addTask({ id: '7', complete: false }));
            t.apply('Add task', actions.addTask({ id: '8', complete: false }));
            t.apply('Add task', actions.addTask({ id: '9', complete: false }));
            t.undo();
            t.apply('Add task', actions.addTask({ id: '14', complete: false }));
            t.undo();
            t.undo();
            t.apply('Add task', actions.addTask({ id: '10', complete: false }));
            t.apply('Add task', actions.addTask({ id: '11', complete: false }));
            t.apply('Add task', actions.addTask({ id: '12', complete: false }));
            t.apply('Add task', actions.addTask({ id: '13', complete: false }));
        }, []);

        return t ? (
            <Graph
                actions={actions}
                config={{
                    ...props,
                    getAnnotation: (n: NodeId) => annotations[n] || '',
                    annotateNode: (n: NodeId, s: string) =>
                        setAnnotations({ ...annotations, [n]: s }),
                }}
                trrack={t}
            />
        ) : (
            <div></div>
        );
    },
};

export const BookmarksAndAnnotations: Story = {
    render: (props) => {
        const { trrack: t, actions } = useTrrack();

        const [annotations, setAnnotations] = useState<Record<NodeId, string>>(
            {}
        );
        const [bookmarkNodes, setBookmarkNodes] = useState<NodeId[]>([]);

        useEffect(() => {
            t.apply('Add task', actions.addTask({ id: '1', complete: false }));
            t.apply('Add task', actions.addTask({ id: '2', complete: false }));
            t.apply('Add task', actions.addTask({ id: '3', complete: false }));
            t.apply('Add task', actions.addTask({ id: '4', complete: false }));
            t.apply('Add task', actions.addTask({ id: '5', complete: false }));
            t.undo();
            t.undo();
            t.apply('Add task', actions.addTask({ id: '6', complete: false }));
            t.apply('Add task', actions.addTask({ id: '7', complete: false }));
            t.apply('Add task', actions.addTask({ id: '8', complete: false }));
            t.apply('Add task', actions.addTask({ id: '9', complete: false }));
            t.undo();
            t.apply('Add task', actions.addTask({ id: '14', complete: false }));
            t.undo();
            t.undo();
            t.apply('Add task', actions.addTask({ id: '10', complete: false }));
            t.apply('Add task', actions.addTask({ id: '11', complete: false }));
            t.apply('Add task', actions.addTask({ id: '12', complete: false }));
            t.apply('Add task', actions.addTask({ id: '13', complete: false }));
        }, []);

        return t ? (
            <Graph
                actions={actions}
                trrack={t}
                config={{
                    ...props,
                    isBookmarked: (n: NodeId) => bookmarkNodes.includes(n),
                    bookmarkNode: (n: NodeId) =>
                        bookmarkNodes.includes(n)
                            ? setBookmarkNodes(
                                  bookmarkNodes.filter((node) => node !== n)
                              )
                            : setBookmarkNodes([...bookmarkNodes, n]),
                    getAnnotation: (n: NodeId) => annotations[n] || '',
                    annotateNode: (n: NodeId, s: string) =>
                        setAnnotations({ ...annotations, [n]: s }),
                }}
            />
        ) : (
            <div></div>
        );
    },
};

export const LargeMarginTop: Story = {
    render: (props) => {
        const { trrack: t, actions } = useTrrack();

        useEffect(() => {
            t.apply('Add task', actions.addTask({ id: '1', complete: false }));
            t.apply('Add task', actions.addTask({ id: '2', complete: false }));
            t.apply('Add task', actions.addTask({ id: '3', complete: false }));
            t.apply('Add task', actions.addTask({ id: '4', complete: false }));
            t.apply('Add task', actions.addTask({ id: '5', complete: false }));
            t.undo();
            t.undo();
            t.apply('Add task', actions.addTask({ id: '6', complete: false }));
            t.apply('Add task', actions.addTask({ id: '7', complete: false }));
            t.apply('Add task', actions.addTask({ id: '8', complete: false }));
            t.apply('Add task', actions.addTask({ id: '9', complete: false }));
            t.undo();
            t.apply('Add task', actions.addTask({ id: '14', complete: false }));
            t.undo();
            t.undo();
            t.apply('Add task', actions.addTask({ id: '10', complete: false }));
            t.apply('Add task', actions.addTask({ id: '11', complete: false }));
            t.apply('Add task', actions.addTask({ id: '12', complete: false }));
            t.apply('Add task', actions.addTask({ id: '13', complete: false }));
        }, []);

        return t ? (
            <Graph config={props} actions={actions} trrack={t} />
        ) : (
            <div></div>
        );
    },
};

LargeMarginTop.args = {
    marginTop: 80,
};
