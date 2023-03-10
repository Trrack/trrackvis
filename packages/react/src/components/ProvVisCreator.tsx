import { initializeTrrack, NodeId } from '@trrack/core';
import RDOM16 from 'react-dom';
import RDOM from 'react-dom/client';
import { ProvVis, ProvVisConfig } from './ProvVis';

export async function ProvVisCreator<
    S,
    E extends string,
    TrrackInstance extends ReturnType<
        typeof initializeTrrack<S, E>
    > = ReturnType<typeof initializeTrrack<S, E>>
>(
    node: Element,
    trrackInstance: TrrackInstance,
    config: Partial<ProvVisConfig<any, any, any>> = {},
    REACT_16 = false
) {
    let root: RDOM.Root | null;

    function renderTrrack() {
        const vis = (
            <ProvVis
                root={trrackInstance.root.id}
                config={{
                    changeCurrent: (id: NodeId) => trrackInstance.to(id),
                    ...config,
                }}
                nodeMap={trrackInstance.graph.backend.nodes}
                currentNode={trrackInstance.current.id}
            />
        );

        if (REACT_16) {
            RDOM16.render(vis, node);
        } else {
            if (!root) {
                root = RDOM.createRoot(node);
            }

            root.render(vis);
        }
    }

    trrackInstance.currentChange(() => {
        renderTrrack();
    });

    renderTrrack();
}
