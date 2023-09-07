import { ProvenanceNode } from '@trrack/core';
import { ReactElement } from 'react';

type ReactChild = ReactElement | string | number;

export interface Config<T, S extends string> {
    glyph: (node?: ProvenanceNode<T, S>) => ReactChild;
    currentGlyph: (node?: ProvenanceNode<T, S>) => ReactChild;
    backboneGlyph: (node?: ProvenanceNode<T, S>) => ReactChild;
    bundleGlyph: (node?: ProvenanceNode<T, S>) => ReactChild;
    hoverGlyph: (node?: ProvenanceNode<T, S>) => ReactChild;
}

export type IconConfig<T, S extends string> = {
    [key: string]: Partial<Config<T, S>>;
};

export function defaultIcon<T, S extends string>(color: string): Config<T, S> {
    return {
        glyph: () => (
            <circle r={5} fill="white" stroke={color} strokeWidth={2} />
        ),
        currentGlyph: () => (
            <circle r={5} fill={color} stroke={color} strokeWidth={2} />
        ),
        backboneGlyph: () => (
            <circle r={5} fill="white" stroke={color} strokeWidth={2} />
        ),
        bundleGlyph: () => (
            <circle r={5} fill="white" stroke={color} strokeWidth={2} />
        ),
        hoverGlyph: () => (
            <circle r={6} fill="white" stroke={color} strokeWidth={2} />
        ),
    };
}
