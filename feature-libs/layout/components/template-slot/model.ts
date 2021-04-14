import { CmsComponent } from '@spartacus/core';

export interface TemplateSlot extends CmsComponent {
  id: string;
  type: string;
  containerType: string;

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
