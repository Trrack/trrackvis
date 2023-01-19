import React from 'react';

import { BaseArtifactType, isStateNode, ProvenanceNode } from '@trrack/core';
import { ProvVisConfig } from './ProvVis';

export function AnnotationField<T, S extends string, A extends BaseArtifactType<any>>({
  config,
  node,
  setAnnotationDepth,
}: {
  config: ProvVisConfig<T, S, A>;
  node: ProvenanceNode<T, S, A>;
  setAnnotationDepth: (depth: number | null) => void;
}) {
  const [value, setValue] = React.useState(isStateNode(node) ? config.getAnnotation(node.id) : 'Test');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return <div></div>
    // <Card>
    //   <CardContent>
    //     <TextField
    //       fullWidth
    //       multiline
    //       label="Annotation"
    //       inputProps={{
    //         style: {
    //           fontSize: '12px',
    //         },
    //       }}
    //       value={value}
    //       onChange={handleChange}
    //     />
    //   </CardContent>
    //   <CardActions>
    //     <div style={{ display: 'flex' }}>
    //       <Button onClick={() => setAnnotationDepth(null)}>Close</Button>
    //       <Button
    //         onClick={() => {
    //           setAnnotationDepth(null);
    //           config.annotateNode(node.id, value);
    //         }}
    //       >
    //         Annotate
    //       </Button>
    //     </div>
    //   </CardActions>
    // </Card>
}
