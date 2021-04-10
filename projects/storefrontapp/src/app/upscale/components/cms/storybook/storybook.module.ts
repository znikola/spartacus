import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CmsConfig, provideDefaultConfig } from '@spartacus/core';
import {
  CarouselModule as SpartacusCarouselModule,
  PageComponentModule,
} from '@spartacus/storefront';
import { AspectRatioImageModule } from '../../shared/aspect-ration-image/aspect-ratio-image.module';
import { HeadlineModule } from '../shared/headline/headline.module';
import { StorybookContentComponent } from './storybook-content/storybook-content.component';
import { StorybookComponent } from './storybook.component';
@NgModule({
  imports: [
    CommonModule,
    PageComponentModule,
    SpartacusCarouselModule,
    AspectRatioImageModule,

    HeadlineModule,
  ],
  providers: [
    provideDefaultConfig(<CmsConfig>{
      cmsComponents: {
        STORYBOOK: {
          component: StorybookComponent,
        },
      },
    }),
  ],
  declarations: [StorybookComponent, StorybookContentComponent],
})
export class StorybookModule {}
