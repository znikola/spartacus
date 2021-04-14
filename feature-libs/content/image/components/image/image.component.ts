import { ChangeDetectionStrategy, Component } from '@angular/core';
import { LayoutStylingFacade } from '@spartacus/layout/root';
import { CmsComponentData } from '@spartacus/storefront';
import { Observable } from 'rxjs';
import { ImageComponentModel } from '../../core/model';

@Component({
  selector: 'cx-image',
  templateUrl: './image.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ImageComponent {
  constructor(
    protected component: CmsComponentData<ImageComponentModel>,
    // We currently inject this service to generate the global image styles
    // that are given by the backend. We like to move to an event based approach
    // to move this logic out of the component implementation.
    protected layoutStylingService: LayoutStylingFacade
  ) {
    this.layoutStylingService.load('IMAGE').subscribe();
  }

  image$: Observable<ImageComponentModel> = this.component.data$;

  getRouteCommands(imageData: ImageComponentModel): unknown {
    if (!imageData.link) {
      return;
    }
    return {
      cxRoute: imageData.link.type,
      params: { value: imageData.link.value },
    };
  }
}
