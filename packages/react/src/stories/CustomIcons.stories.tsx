import { Meta, Story } from '@storybook/react';
import { useEffect } from 'react';

import { ProvVisStoryProps } from '../../.storybook/preview';
import { Graph, useTrrack } from './useTrrack';

export const LinearExample: Story<ProvVisStoryProps> = (props) => {
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
        <Graph config={props} actions={actions} trrack={t} customIcons />
    ) : (
        <div></div>
    );
};

export const OneBranch: Story<ProvVisStoryProps> = (props) => {
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
        <Graph config={props} actions={actions} trrack={t} customIcons />
    ) : (
        <div></div>
    );
};

export const Complex: Story<ProvVisStoryProps> = (props) => {
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
        <Graph config={props} actions={actions} trrack={t} customIcons />
    ) : (
        <div></div>
    );
};

export default {
    component: LinearExample,
    title: 'Components/CustomIcons',
} as Meta;
