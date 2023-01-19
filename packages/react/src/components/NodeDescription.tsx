import { BaseArtifactType, isStateNode, NodeId, ProvenanceNode } from '@trrack/core';
import React from 'react';
import { useSpring, animated, easings } from 'react-spring';
import { AnnotationButton } from './AnnotationButton';
import { BookmarkButton } from './BookmarkButton';
import { ProvVisConfig } from './ProvVis';
import { AnnotationField } from './AnnotationField';

export function NodeDescription<T, S extends string, A extends BaseArtifactType<any>>({
  depth,
  yOffset,
  node,
  config,
  currentNode,
  onClick,
  isHover,
  setHover,
  colorMap,
  annotationDepth,
  setAnnotationDepth,
}: {
  depth: number;
  yOffset: number;
  node: ProvenanceNode<T, S, A>;
  config: ProvVisConfig<T, S, A>;
  currentNode: NodeId;
  onClick: () => void;
  isHover: boolean;
  setHover: (node: NodeId | null) => void;
  colorMap: Record<S | 'Root', string>;
  annotationDepth: number | null;
  setAnnotationDepth: (depth: number | null) => void;
}) {
  const style = useSpring({
    config: {
      duration: config.animationDuration,
      easing: easings.easeInOutSine,
    },
    from: {
      opacity: 0,
      top: depth * config.verticalSpace + config.marginTop + yOffset - config.verticalSpace / 2,
    },
    to: {
      opacity: 1,
      top: depth * config.verticalSpace + config.marginTop + yOffset - config.verticalSpace / 2,
    }
  });

  return (
    <>
      <animated.div
        style={{
          ...style,
          cursor: 'pointer',
          position: 'absolute',
          display: 'flex',
          flexDirection: 'row',
          height: config.verticalSpace,
          alignContent: 'center',
          flexWrap: 'wrap',
          width: `100%`,
        }}
        onClick={onClick}
        onMouseEnter={() => setHover(node.id)}
        onMouseLeave={() => setHover(null)}
      >
        <div
          style={{
            width: `calc(100% - ${config.marginRight}px)`,
            display: 'flex',
            flexDirection: 'row',
          }}
        >

          <div
            style={{
              alignItems: 'start',
              justifyContent: 'center',
              display: 'flex',
              flexDirection: 'column',
              marginRight: 'auto',
              width: '100%',
            }}
          >
            <p
              style={{
                maxWidth: `100%`,
                margin: 0,
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
              }}
            >
              {node.label}
            </p>
            {isStateNode(node) ? (
              <p
                style={{
                  maxWidth: `${config.labelWidth}px`,
                  margin: 0,
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap',
                  color: 'gray',
                }}
              >
                {config.getAnnotation(node.id)}
              </p>
            ) : null}
          </div>
        </div>
        {isHover || annotationDepth === depth ? (
            <AnnotationButton color="cornflowerblue" isAnnotating={annotationDepth === depth} onClick={() => setAnnotationDepth(depth)} />
          ) : null}
          {isHover || config.isBookmarked(node.id) ? (
            <BookmarkButton color={colorMap[node.meta.eventType]} isBookmarked={config.isBookmarked(node.id)} onClick={() => config.bookmarkNode(node.id)} />
          ) : null}
      </animated.div>
      {annotationDepth === depth ? (
        <animated.div
          style={{
            cursor: 'pointer',
            position: 'absolute',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'start',
            fontSize: '12px !important',
            width: `250px`,
            zIndex: 10,
            top: style.top.to((num) => num + config.verticalSpace),
          }}
        >
          <AnnotationField config={config} node={node} setAnnotationDepth={setAnnotationDepth} />
        </animated.div>
      ) : null}
    </>
  );
}
