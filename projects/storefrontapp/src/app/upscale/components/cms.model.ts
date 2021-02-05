import { CmsComponent } from '@spartacus/core';

export interface UpscaleCmsComponent extends CmsComponent {
  headline?: string;
  subHeadline?: string;

  showComponentHeadline?: boolean;
  showComponentSubHeadline?: boolean;
}

export interface ContentComponentModel extends UpscaleCmsComponent {
  contentIds: string[];
}

// tslint:disable-next-line: no-empty-interface
export interface ImageComponentModel extends ContentComponentModel {
  url?: string;
  imageUrl?: string;
}
// tslint:disable-next-line: no-empty-interface
export interface CarouselComponentModel extends ContentComponentModel {}

// tslint:disable-next-line: no-empty-interface
export interface NextSellComponentModel extends ContentComponentModel {}

export interface DisplayBlock {
  name: string;
  show: boolean;
}
export interface BrowseComponentModel extends UpscaleCmsComponent {
  displayBlocks?: DisplayBlock[];
}

// tslint:disable-next-line: no-empty-interface

export interface SellingTreeComponentModel extends ContentComponentModel {
  link?: {
    value?: {
      sellingTreeId: string;
      categoryPath: string[];
    }[];
  };
}

export interface ProductContentComponentModel extends UpscaleCmsComponent {
  link?: {
    value?: string;
  };
}

export interface ArticleContentComponentModel extends UpscaleCmsComponent {
  link?: {
    value?: string;
  };
}
