import { initializeTrrack, NodeId } from '@trrack/core';
import { version } from 'react-dom';
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
    config: Partial<ProvVisConfig<any, any, any>> = {}
) {
    let renderFn: ((el: JSX.Element) => void) | null = null;

    async function setup() {
        if (version.startsWith('16')) {
            const { render } = await import('react-dom');
            renderFn = (el: JSX.Element) => render(el, node);
        } else {
            const { createRoot } = await import('react-dom/client');
            const root = createRoot(node);
            renderFn = (el: JSX.Element) => root.render(el);
        }
    }

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

        if (renderFn) {
            renderFn(vis);
        } else {
            setup();
        }
    }

    trrackInstance.currentChange(() => {
        renderTrrack();
    });

    renderTrrack();
}
