import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CmsConfig, provideDefaultConfig } from '@spartacus/core';
import { AspectRatioImageModule } from '../../shared/aspect-ration-image/aspect-ratio-image.module';
import { ImageComponent } from './image.component';

@NgModule({
  imports: [CommonModule, AspectRatioImageModule],
  providers: [
    provideDefaultConfig(<CmsConfig>{
      cmsComponents: {
        IMAGE: {
          component: ImageComponent,
        },
      },
    }),
  ],
  declarations: [ImageComponent],
  exports: [ImageComponent],
})
export class ImageModule {}
