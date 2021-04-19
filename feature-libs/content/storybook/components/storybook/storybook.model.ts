// StoryBook[]
//  Story[] (aka chapter?)

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
