import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CmsConfig, provideDefaultConfig } from '@spartacus/core';
import { PageComponentModule } from '@spartacus/storefront';
import { AspectRatioImageModule } from '../../shared/aspect-ration-image/aspect-ratio-image.module';
import { ProductContentComponent } from './product-content.component';

@NgModule({
  imports: [CommonModule, PageComponentModule, AspectRatioImageModule],
  providers: [
    provideDefaultConfig(<CmsConfig>{
      cmsComponents: {
        PRODUCT_CONTENT: {
          component: ProductContentComponent,
        },
      },
    }),
  ],
  declarations: [ProductContentComponent],
})
export class ProductContentModule {}
