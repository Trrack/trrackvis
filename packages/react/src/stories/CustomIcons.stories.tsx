import { Meta } from '@storybook/react';
import React from 'react';

import { createTrrack, Graph } from './setup';

export const LinearExample: React.FC = () => {
    const { trrack: t, actions } = createTrrack();

    t.apply('Add task', actions.addTask({ id: '1', complete: false }));
    t.apply('Add task', actions.addTask({ id: '2', complete: false }));
    t.apply('Add task', actions.addTask({ id: '3', complete: false }));
    t.apply('Add task', actions.addTask({ id: '4', complete: false }));
    t.apply('Add task', actions.addTask({ id: '5', complete: false }));
    t.apply('Add task', actions.addTask({ id: '6', complete: false }));
    t.apply('Add task', actions.addTask({ id: '7', complete: false }));

    return t ? <Graph actions={actions} trrack={t} customIcons /> : <div></div>;
};

export const OneBranch: React.FC = () => {
    const { trrack: t, actions } = createTrrack();

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

    return t ? <Graph actions={actions} trrack={t} customIcons /> : <div></div>;
};

export const Complex: React.FC = () => {
    const { trrack: t, actions } = createTrrack();

    t.apply('Add task', actions.addTask({ id: '1', complete: false }));
    t.apply('Add task', actions.addTask({ id: '2', complete: false }));
    t.apply('Add task', actions.addTask({ id: '3' , complete: false}));
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

    return t ? <Graph actions={actions} trrack={t} customIcons /> : <div></div>;
};

export default {
    component: LinearExample,
    title: 'Components/CustomIcons',
} as Meta;
