import React, { useMemo, useState } from 'react';
import { ProvVis } from '../components/ProvVis';

import { initializeTrrack, NodeId, Registry } from '@trrack/core';
import { iconConfig } from './customIcons/iconConfig';
import { Tasks } from './Tasks';

export type Task = {
    id: string;
    complete: boolean;
};

const initialState = {
    tasks: [] as Task[],
};

export type State = typeof initialState;

export function createTrrack() {
    let taskCounter = 1;
    const { registry, actions } = useMemo(() => {
        const reg = Registry.create();

        const addTask = reg.register('add-task', (state, task: Task) => {
            state.tasks.push(task);
            taskCounter += 1;
        });

        const removeTask = reg.register('remove-task', (state, task: Task) => {
            state.tasks = state.tasks.filter((t: Task) => t.id !== task.id);
        });

        const markTaskComplete = reg.register(
            'complete-task',
            (state, task: Task) => {
                const idx = state.tasks.findIndex((d: any) => d.id === task.id);
                state.tasks[idx].complete = true;
            }
        );

        const markTaskIncomplete = reg.register(
            'incomplete-task',
            (state, task: Task) => {
                const idx = state.tasks.findIndex((d: any) => d.id === task.id);
                state.tasks[idx].complete = false;
            }
        );

        return {
            registry: reg,
            actions: {
                addTask,
                removeTask,
                markTaskComplete,
                markTaskIncomplete,
            },
        };
    }, []);

    const trrack = useMemo(() => {
        const t = initializeTrrack({ registry, initialState });

        return t;
    }, []);

    return { trrack, actions };
}

export const Graph = ({
    trrack,
    verticalSpace = 25,
    labelSize = 100,
    marginTop = 25,
    gutter = 25,
    actions,
    customIcons = false,
}: {
    trrack: ReturnType<typeof initializeTrrack<State>>;
    actions: ReturnType<typeof createTrrack>['actions'];
    labelSize?: number;
    verticalSpace?: number;
    marginTop?: number;
    gutter?: number;
    customIcons?: boolean;
}) => {
    const [currNode, setCurrNode] = useState<NodeId>();

    trrack.currentChange(() => {
        setCurrNode(trrack.current.id);
    });

    return (
        <div
            style={{
                height: '100vh',
                display: 'flex',
                justifyContent: 'center',
                alignContent: 'center',
                flexWrap: 'wrap',
            }}
        >
            <div
                style={{
                    width: '50%',
                    height: '80%',
                    display: 'flex',
                    border: '2px solid lightgray',
                    borderRadius: 10,
                    padding: 10,
                    margin: 5,
                }}
            >
                <div style={{ flex: 10 }}>
                    <Tasks
                        state={trrack.getState(trrack.current)}
                        deleteCallback={(task) => trrack.apply(`Delete task ${task.id}`, actions.removeTask(task))}
                        addCallback={() => {
                            const randomNum = Math.floor(100000 + Math.random() * 900000).toString()
                            trrack.apply(`Adding task ${randomNum}`, actions.addTask({id: randomNum, complete: false}))}
                        }
                        completeCallback={(task) =>
                            trrack.apply(
                                task.complete
                                    ? `Mark task ${task.id} incomplete`
                                    : `Mark task ${task.id} complete`,
                                task.complete
                                    ? actions.markTaskIncomplete(task)
                                    : actions.markTaskComplete(task)
                            )
                        }
                    ></Tasks>
                </div>
                <div style={{ flex: 1, borderLeft: '2px solid lightgray' }}>
                    <ProvVis
                        root={trrack.root.id}
                        config={{
                            changeCurrent: (node: NodeId) => trrack.to(node),
                            labelWidth: 100,
                            verticalSpace: verticalSpace,
                            marginTop: marginTop,
                            marginLeft: 15,
                            gutter: gutter,
                            iconConfig: customIcons ? iconConfig : null,
                        }}
                        nodeMap={trrack.graph.backend.nodes}
                        currentNode={currNode || trrack.root.id}
                    ></ProvVis>
                </div>
            </div>
        </div>
    );
};
