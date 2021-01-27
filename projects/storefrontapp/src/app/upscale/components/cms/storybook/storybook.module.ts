import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CmsConfig, provideDefaultConfig } from '@spartacus/core';
import {
  CarouselModule as SpartacusCarouselModule,
  PageComponentModule,
} from '@spartacus/storefront';
import { StorybookComponent } from './storybook.component';
@NgModule({
  imports: [CommonModule, PageComponentModule, SpartacusCarouselModule],
  providers: [
    provideDefaultConfig(<CmsConfig>{
      cmsComponents: {
        STORYBOOK: {
          component: StorybookComponent,
        },
      },
    }),
  ],
  declarations: [StorybookComponent],
})
export class StorybookModule {}
