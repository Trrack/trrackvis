import { initializeTrrack, NodeId } from '@trrack/core';
import { version } from 'react-dom';
import { ProvVis, ProvVisConfig } from './ProvVis';

export function ProvVisCreator<
    TrrackInstance extends ReturnType<typeof initializeTrrack> = ReturnType<
        typeof initializeTrrack
    >
>(
    node: Element,
    trrackInstance: TrrackInstance,
    config: Partial<ProvVisConfig<any, any, any>> = {}
) {
    let renderFn: ((el: JSX.Element) => void) | null = null;

    if (version.startsWith('16')) {
        import('react-dom').then(({ render }) => {
            renderFn = (el: JSX.Element) => render(el, node);
        });
    } else {
        import('react-dom/client').then(({ createRoot }) => {
            const root = createRoot(node);
            renderFn = (el: JSX.Element) => root.render(el);
        });
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
        }
    }

    trrackInstance.currentChange(() => {
        renderTrrack();
    });

    renderTrrack();
}
