import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CmsConfig, provideDefaultConfig } from '@spartacus/core';
import { CarouselModule as SpartacusCarouselModule } from '@spartacus/storefront';
import { AspectRatioImageModule } from '../../shared/aspect-ration-image/aspect-ratio-image.module';
import { CarouselComponent } from './carousel.component';

@NgModule({
  imports: [CommonModule, SpartacusCarouselModule, AspectRatioImageModule],
  providers: [
    provideDefaultConfig(<CmsConfig>{
      cmsComponents: {
        CAROUSEL: {
          component: CarouselComponent,
        },
      },
    }),
  ],
  declarations: [CarouselComponent],
})
export class CarouselModule {}
