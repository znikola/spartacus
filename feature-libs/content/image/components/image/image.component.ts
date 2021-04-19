import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CmsComponentData } from '@spartacus/storefront';
import { Observable } from 'rxjs';
import { ImageComponentModel } from '../../core/model';

@Component({
  selector: 'cx-image',
  templateUrl: './image.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ImageComponent {
  constructor(protected component: CmsComponentData<ImageComponentModel>) {}

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
