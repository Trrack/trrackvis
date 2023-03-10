import { BaseArtifactType, ProvenanceNode } from '@trrack/core';
import React, { ReactChild } from 'react';

export interface Config<T, S extends string, A extends BaseArtifactType<any>> {
  glyph: (node?: ProvenanceNode<T, S, A>) => ReactChild;
  currentGlyph: (node?: ProvenanceNode<T, S, A>) => ReactChild;
  backboneGlyph: (node?: ProvenanceNode<T, S, A>) => ReactChild;
  bundleGlyph: (node?: ProvenanceNode<T, S, A>) => ReactChild;
  hoverGlyph: (node?: ProvenanceNode<T, S, A>) => ReactChild;
}

export type IconConfig<T, S extends string, A extends BaseArtifactType<any>> = {
  [key: string]: Partial<Config<T, S, A>>;
};

export function defaultIcon<T, S extends string, A extends BaseArtifactType<any>>(color: string): Config<T, S, A> {
  return {
    glyph: () => <circle r={5} fill="white" stroke={color} strokeWidth={2} />,
    currentGlyph: () => <circle r={5} fill={color} stroke={color} strokeWidth={2} />,
    backboneGlyph: () => <circle r={5} fill="white" stroke={color} strokeWidth={2} />,
    bundleGlyph: () => <circle r={5} fill="white" stroke={color} strokeWidth={2} />,
    hoverGlyph: () => <circle r={6} fill="white" stroke={color} strokeWidth={2} />,
  };
}
