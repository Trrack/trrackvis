import { initializeTrrack, NodeId } from '@trrack/core';
import { render } from 'react-dom';
import { createRoot } from 'react-dom/client';
import { ProvVis, ProvVisConfig } from './ProvVis';

console.log(createRoot);

export function ProvVisCreator<
    TrrackInstance extends ReturnType<typeof initializeTrrack> = ReturnType<
        typeof initializeTrrack
    >
>(
    node: Element,
    trrackInstance: TrrackInstance,
    config: Partial<ProvVisConfig<any, any, any>> = {}
) {
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

    function renderTrrack() {
        if (createRoot) {
            const root = createRoot(node);
            root.render(vis);
        } else {
            render(vis, node);
        }
    }

    trrackInstance.currentChange(() => {
        renderTrrack();
    });

    renderTrrack();
}
