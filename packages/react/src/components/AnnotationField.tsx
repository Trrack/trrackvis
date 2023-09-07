import { ProvenanceNode } from '@trrack/core';
import { ProvVisConfig } from './ProvVis';

export function AnnotationField<T, S extends string>(_props: {
    config: ProvVisConfig<T, S>;
    node: ProvenanceNode<T, S>;
    setAnnotationDepth: (depth: number | null) => void;
}) {
    return <div></div>;
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
