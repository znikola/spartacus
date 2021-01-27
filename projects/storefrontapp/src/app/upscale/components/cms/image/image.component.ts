import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { CmsComponentData } from '@spartacus/storefront';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ImageComponentModel } from '../../cms.model';
@Component({
  selector: 'upscale-image',
  templateUrl: './image.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ImageComponent implements OnInit {
  componentData$: Observable<ImageComponentModel> = this.component.data$.pipe(
    tap((imageData) => {
      if (!imageData.url || !imageData.imageUrl) {
        console.log();
      }
    })
  );

  @Input() contentId: string;

  constructor(protected component: CmsComponentData<ImageComponentModel>) {}

  ngOnInit() {
    // // console.log(this.contentId);
    // if (this.contentId) {
    //   // this.componentData$ = this.contentService
    //   //   .get(this.contentId)
    //   //   .pipe(tap((content) => console.log('input image', content)));
    // } else {
    //   this.componentData$ = this.component.data$;
    // }
  }

  // getContent(contentId: string): Observable<any> {
  //   return this.contentService.get(contentId);
  // }
}
