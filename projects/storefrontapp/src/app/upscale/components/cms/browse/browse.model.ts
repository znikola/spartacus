import { CmsComponent } from '@spartacus/core';

export interface DisplayBlock {
  name: string;
  show: boolean;
}
export interface BrowseComponentModel extends CmsComponent {
  displayBlocks?: DisplayBlock[];
}
