import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CmsComponentData } from '@spartacus/storefront';
import { Observable } from 'rxjs';
import { ImageComponentModel } from '../../cms.model';
@Component({
  selector: 'upscale-image',
  templateUrl: './image.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ImageComponent {
  constructor(protected component: CmsComponentData<ImageComponentModel>) {}

  /**
   * exposes the image data set whenever there's an image to be rendered.
   */
  image$: Observable<ImageComponentModel> = this.component.data$.pipe();
}
