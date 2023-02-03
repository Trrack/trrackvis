import { initializeTrrack, NodeId } from '@trrack/core';
import { render } from 'react-dom';
import { ProvVis, ProvVisConfig } from './ProvVis';

export function ProvVisCreator<
    TrrackInstance extends ReturnType<typeof initializeTrrack> = ReturnType<
        typeof initializeTrrack
    >
>(
    node: Element,
    trrackInstance: TrrackInstance,
    config: Partial<ProvVisConfig<any, any, any>>
) {
    function renderTrrack() {
        render(
            <ProvVis
                root={trrackInstance.root.id}
                config={{
                    changeCurrent: (id: NodeId) => trrackInstance.to(id),
                    ...config,
                }}
                nodeMap={trrackInstance.graph.backend.nodes}
                currentNode={trrackInstance.current.id}
            />,
            node
        );
    }

    trrackInstance.currentChange(() => {
        renderTrrack();
    });

    renderTrrack();
}
