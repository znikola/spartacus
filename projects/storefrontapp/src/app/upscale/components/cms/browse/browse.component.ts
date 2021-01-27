import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CmsComponentData } from '@spartacus/storefront';
import { BrowseComponentModel } from './browse.model';
@Component({
  selector: 'upscale-browse',
  templateUrl: './browse.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BrowseComponent {
  constructor(public component: CmsComponentData<BrowseComponentModel>) {}
}
