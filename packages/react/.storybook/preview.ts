import { ProvVisConfig } from '../src/components/ProvVis';

export type ProvVisStoryProps = Omit<
    ProvVisConfig<any, any, any>,
    | 'iconConfig'
    | 'changeCurrent'
    | 'bookmarkNode'
    | 'annotateNode'
    | 'getAnnotation'
    | 'isBookmarked'
>;

export const args = {
    gutter: 25,
    nodeWidthShown: 3,
    verticalSpace: 30,
    marginTop: 50,
    marginRight: 40,
    marginLeft: 50,
    animationDuration: 500,
    annotationHeight: 150,
    nodeAndLabelGap: 20,
    labelWidth: 150,
};
