import { useMemo, useState } from 'react';
import { ProvVis, ProvVisConfig } from '../components/ProvVis';

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

export function useTrrack() {
    const { registry, actions } = useMemo(() => {
        const reg = Registry.create();

        const addTask = reg.register('add-task', (state, task: Task) => {
            state.tasks.push(task);
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
    }, [registry]);

    return { trrack, actions };
}

type GraphProps<T, S extends string> = {
    trrack: ReturnType<typeof initializeTrrack<State>>;
    actions: ReturnType<typeof useTrrack>['actions'];
    customIcons?: boolean;
    config: Partial<ProvVisConfig<T, S>>;
};

export const Graph = <T, S extends string>({
    trrack,
    actions,
    customIcons = false,
    config,
}: GraphProps<T, S>) => {
    const {
        verticalSpace = 30,
        labelWidth = 100,
        marginTop = 25,
        gutter = 25,
        bookmarkNode = null,
        annotateNode = null,
        getAnnotation = () => '',
        isBookmarked = () => false,
    } = config;

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
                        deleteCallback={(task) =>
                            trrack.apply(
                                `Delete task ${task.id}`,
                                actions.removeTask(task)
                            )
                        }
                        addCallback={() => {
                            const randomNum = Math.floor(
                                100000 + Math.random() * 900000
                            ).toString();
                            trrack.apply(
                                `Adding task ${randomNum}`,
                                actions.addTask({
                                    id: randomNum,
                                    complete: false,
                                })
                            );
                        }}
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
                            ...config,
                            isBookmarked: isBookmarked,
                            annotateNode: annotateNode,
                            getAnnotation: getAnnotation,
                            bookmarkNode: bookmarkNode,
                            changeCurrent: (node: NodeId) => trrack.to(node),
                            labelWidth,
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
