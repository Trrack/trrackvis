import { Meta } from '@storybook/react';
import React, { useEffect, useState } from 'react';

import { Graph, useTrrack } from './useTrrack';
import { NodeId } from '@trrack/core';

export const LinearExample: React.FC = () => {
    const { trrack: t, actions } = useTrrack();

    t.apply('Add task', actions.addTask({ id: '1', complete: false }));
    t.apply('Add task', actions.addTask({ id: '2', complete: false }));
    t.apply('Add task', actions.addTask({ id: '3', complete: false }));
    t.apply('Add task', actions.addTask({ id: '4', complete: false }));
    t.apply('Add task', actions.addTask({ id: '5', complete: false }));
    t.apply('Add task', actions.addTask({ id: '6', complete: false }));
    t.apply('Add task', actions.addTask({ id: '7', complete: false }));

    return t ? <Graph actions={actions} trrack={t} /> : <div></div>;
};

export const OneBranch: React.FC = () => {
    const { trrack: t, actions } = useTrrack();

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

    return t ? <Graph actions={actions} trrack={t} /> : <div></div>;
};

export const Complex: React.FC = () => {
    const { trrack: t, actions } = useTrrack();

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

    return t ? <Graph actions={actions} trrack={t} /> : <div></div>;
};

export const LargeGutter: React.FC = () => {
    const { trrack: t, actions } = useTrrack();

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

    return t ? <Graph actions={actions} gutter={50} trrack={t} /> : <div></div>;
};

export const LargeVertSpace: React.FC = () => {
    const { trrack: t, actions } = useTrrack();

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

    return t ? (
        <Graph actions={actions} verticalSpace={50} trrack={t} />
    ) : (
        <div></div>
    );
};

export const VertScrolling: React.FC = () => {
    const { trrack: t, actions } = useTrrack();

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

    return t ? (
        <Graph actions={actions} verticalSpace={120} trrack={t} />
    ) : (
        <div></div>
    );
};

export const Bookmarks: React.FC = () => {
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
            isBookmarked={(n: NodeId) => bookmarkNodes.includes(n)}
            bookmarkNode={(n: NodeId) =>
                bookmarkNodes.includes(n)
                    ? setBookmarkNodes(
                          bookmarkNodes.filter((node) => node !== n)
                      )
                    : setBookmarkNodes([...bookmarkNodes, n])
            }
            trrack={t}
        />
    ) : (
        <div></div>
    );
};

export const Annotations: React.FC = () => {
    const { trrack: t, actions } = useTrrack();

    const [annotations, setAnnotations] = useState<Record<NodeId, string>>({});

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
            getAnnotation={(n: NodeId) => annotations[n] || ''}
            annotateNode={(n: NodeId, s: string) =>
                setAnnotations({ ...annotations, [n]: s })
            }
            trrack={t}
        />
    ) : (
        <div></div>
    );
};

export const BookmarksAndAnnotations: React.FC = () => {
    const { trrack: t, actions } = useTrrack();

    const [annotations, setAnnotations] = useState<Record<NodeId, string>>({});
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
            isBookmarked={(n: NodeId) => bookmarkNodes.includes(n)}
            bookmarkNode={(n: NodeId) =>
                bookmarkNodes.includes(n)
                    ? setBookmarkNodes(
                          bookmarkNodes.filter((node) => node !== n)
                      )
                    : setBookmarkNodes([...bookmarkNodes, n])
            }
            getAnnotation={(n: NodeId) => annotations[n] || ''}
            annotateNode={(n: NodeId, s: string) =>
                setAnnotations({ ...annotations, [n]: s })
            }
            trrack={t}
        />
    ) : (
        <div></div>
    );
};

export const LargeMarginTop: React.FC = () => {
    const { trrack: t, actions } = useTrrack();

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

    return t ? (
        <Graph actions={actions} marginTop={50} trrack={t} />
    ) : (
        <div></div>
    );
};

export default {
    component: LinearExample,
    title: 'Components/Basic',
    parameters: {
        layout: 'fullscreen',
    },
} as Meta;
