import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CmsConfig, provideDefaultConfig } from '@spartacus/core';
import { PageComponentModule } from '@spartacus/storefront';
import { AspectRatioImageModule } from '../../shared/aspect-ration-image/aspect-ratio-image.module';
import { SellingTreeComponent } from './selling-tree.component';

@NgModule({
  imports: [CommonModule, PageComponentModule, AspectRatioImageModule],
  providers: [
    provideDefaultConfig(<CmsConfig>{
      cmsComponents: {
        SELLING_TREE_CATEGORY_PATH: {
          component: SellingTreeComponent,
        },
      },
    }),
  ],
  declarations: [SellingTreeComponent],
})
export class SellingTreeModule {}
