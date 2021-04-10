import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CmsComponent } from '@spartacus/core';
import { CmsComponentData } from '@spartacus/storefront';
import { filter, map, tap } from 'rxjs/operators';
import { ContentComponentModel } from '../../cms.model';
import { ContainerLayoutService } from './container-component.service';

@Component({
  selector: 'upscale-container',
  templateUrl: './container.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: ContainerLayoutService,
      useClass: ContainerLayoutService,
    },
  ],
})
export class ContainerComponent {
  constructor(
    protected component: CmsComponentData<ContentComponentModel>,
    protected layout: ContainerLayoutService // protected elementRef: ElementRef
  ) {}

  data$ = this.component.data$.pipe(
    filter((data) => data.contentIds?.length > 0)
  );

  components$ = this.data$.pipe(
    tap((data) => this.layout.doLayout(data)),
    map((container) =>
      container.contentIds.map((uid) => ({
        uid,
        type: container.containerType,
        flexType: container.containerType,
      }))
    )
  );

  getComponents(data: ContentComponentModel): CmsComponent[] {
    return data.contentIds.map((uid) => ({
      uid,
      type: data.containerType,
      flexType: data.containerType,
    }));
  }
}
