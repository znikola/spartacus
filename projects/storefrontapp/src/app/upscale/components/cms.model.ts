import { CmsComponent } from '@spartacus/core';

export interface UpscaleCmsComponent extends CmsComponent {
  id: string;
  headline?: string;
  subHeadline?: string;

  showComponentHeadline?: boolean;
  showComponentSubHeadline?: boolean;

  headlineAlignment?: Alignment;
  subHeadlineAlignment?: Alignment;
  componentHeadlineAlignment?: Alignment;
  componentSubHeadlineAlignment?: Alignment;

  aspectRatio: string;

  desktopFixedHeight: number;
  tabletFixedHeight: number;
  mobileFixedHeight: number;

  topMargin: number;
  rightMargin: number;
  bottomMargin: number;
  leftMargin: number;

  /**
   * Defines how the object fits the container, using cover vs contain.
   */
  imageSizing: string;
  /**
   * Indicates whether the image should take the full width or fit into the container.
   */
  imageHandling: string;

  heroImageTitleDisplayPosition: string;

  /**
   * Indicates whether there's max width for the image size.
   */
  maxWidth: string;
}

export enum Alignment {
  // TODO: make it start / end
  RIGHT = 'RIGHT',
  LEFT = 'LEFT',
  CENTER = 'CENTER',
}

// export interface ContentComponentModel extends UpscaleCmsComponent {
//   id: string;
//   type: string;
//   contentIds: string[];

//   containerType: string;

//   link?: {
//     type: string;
//     value: unknown;
//     behavior: LinkBehavior;
//   };
// }

// // tslint:disable-next-line: no-empty-interface
// export interface CarouselComponentModel extends ContentComponentModel {}

// // tslint:disable-next-line: no-empty-interface
// export interface NextSellComponentModel extends ContentComponentModel {}

export interface DisplayBlock {
  name: string;
  show: boolean;
}
export interface BrowseComponentModel extends UpscaleCmsComponent {
  displayBlocks?: DisplayBlock[];
}

// tslint:disable-next-line: no-empty-interface

// export interface SellingTreeComponentModel extends ContentComponentModel {
//   link: {
//     value: {
//       sellingTreeId: string;
//       categoryPath: string[];
//     }[];

//     type: string;
//     behavior: LinkBehavior;
//   };
// }

export interface ProductContentComponentModel extends UpscaleCmsComponent {
  link?: {
    value?: string;
  };
}
