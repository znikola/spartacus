import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CmsComponentData } from '@spartacus/storefront';
import { tap } from 'rxjs/operators';
import { BrowseComponentModel } from './browse.model';
@Component({
  selector: 'upscale-browse',
  templateUrl: './browse.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BrowseComponent {
  data$ = this.component.data$.pipe(tap(console.log));

  constructor(public component: CmsComponentData<BrowseComponentModel>) {}
}
