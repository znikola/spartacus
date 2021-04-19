import { CmsComponent } from '@spartacus/core';

export interface TemplateSlot extends CmsComponent {
  id: string;
  type: string;
  containerType: string;

  headline?: string;
  subHeadline?: string;

  showComponentHeadline?: boolean;
  showComponentSubHeadline?: boolean;

  headlineAlignment?: Alignment;
  subHeadlineAlignment?: Alignment;
  componentHeadlineAlignment?: Alignment;
  componentSubHeadlineAlignment?: Alignment;

  contentIds: string[];
  imageSizing: string;
  maxWidth: number;
  imageHandling: string;
  heroImageTitleDisplayPosition: string;

  aspectRatio: string;
  mobileFixedHeight: number;
  tabletFixedHeight: number;
  desktopFixedHeight: number;

  topMargin: number;
  rightMargin: number;
  bottomMargin: number;
  leftMargin: number;
}

export enum Alignment {
  // TODO: make it start / end
  RIGHT = 'RIGHT',
  LEFT = 'LEFT',
  CENTER = 'CENTER',
}
