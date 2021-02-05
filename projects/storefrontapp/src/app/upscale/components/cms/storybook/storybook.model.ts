// StoryBook[]
//  Story[] (aka chapter?)

import { ContentComponentModel } from '../../cms.model';

//    StoryBookComponent []
export interface StoryBookData {
  id: string;
  stories?: StoryData[];
}
export interface StoryData {
  id: string;
  // components?: StorybookComponentData[];
}
export interface StorybookComponentData {
  id?: string;
}

export declare enum StoryBookLayoutBehaviorStyle {
  SLIDER = 'SLIDER',
  STACKED = 'STACKED',
}
export interface StorybookComponentModel extends ContentComponentModel {
  layoutType?: StoryBookLayoutType;
  layoutBehaviorStyle?: StoryBookLayoutBehaviorStyle;
  layoutOptionStyle?: StoryBookLayoutOptionStyle;
  showAsSliderOnMobile?: boolean;
}

export declare enum StoryBookLayoutType {
  ASYMMETRICAL = 'ASYMMETRICAL',
  GRID = 'GRID',
}

export declare enum StoryBookLayoutOptionStyle {
  ONE_HIGHLIGHT_SIX_DETAILS = 'ONE_HIGHLIGHT_SIX_DETAILS',
  TWO_HIGHLIGHTS_THREE_DETAILS = 'TWO_HIGHLIGHTS_THREE_DETAILS',
  ONE_HIGHLIGHT_TWO_DETAILS = 'ONE_HIGHLIGHT_TWO_DETAILS',
  ONE_HIGHLIGHT_FOUR_DETAILS = 'ONE_HIGHLIGHT_FOUR_DETAILS',
  ONE_HIGHLIGHT_TWO_BOTTOM_DETAILS = 'ONE_HIGHLIGHT_TWO_BOTTOM_DETAILS',
  ONE_HIGHLIGHT_TWO_RIGHT_DETAILS_SHORT = 'ONE_HIGHLIGHT_TWO_RIGHT_DETAILS_SHORT',
  ONE_HIGHLIGHT_ONE_DETAIL = 'ONE_HIGHLIGHT_ONE_DETAIL',
  ONE_HIGHLIGHT_FOUR_DETAILS_SQUARE = 'ONE_HIGHLIGHT_FOUR_DETAILS_SQUARE',
}

// export declare enum StoryBookLayoutStaggerType {
//   FLIP_HORIZONTALLY = 'FLIP_HORIZONTALLY',
//   FLIP_VERTICALLY = 'FLIP_VERTICALLY',
//   NO_CHANGE = 'NO_CHANGE',
// }
// export declare enum ContentPlacementType {
//   ABOVE = 'ABOVE',
//   OVERLAY = 'OVERLAY',
//   BELOW = 'BELOW',
// }
