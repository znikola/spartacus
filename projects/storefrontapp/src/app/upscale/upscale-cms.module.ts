import { NgModule } from '@angular/core';
import {
  CmsComponentAdapter,
  CmsPageAdapter,
  ProductAdapter,
} from '@spartacus/core';
import { UpscaleCmsPageAdapter } from './adapters/upscale-cms.adapter';
import { UpscaleCmsComponentAdapter } from './adapters/upscale-component.adapter';
import { UpscaleProductAdapter } from './adapters/upscale-product.adapter';
import { ArticleContentModule } from './components/cms/article-content/article-content.module';
import { CarouselModule } from './components/cms/carousel/carousel.module';
import { ImageModule } from './components/cms/image/image.module';
import { ProductContentModule } from './components/cms/product-content/product-content.module';
import { SellingTreeModule } from './components/cms/selling-tree/selling-tree.module';
import { StorybookModule } from './components/cms/storybook/storybook.module';

// https://prod-qa-checkout-pwa.cfapps.us10.hana.ondemand.com/

@NgModule({
  imports: [
    // BrowseModule,

    StorybookModule,
    ImageModule,
    CarouselModule,
    SellingTreeModule,
    ProductContentModule,
    ArticleContentModule,
  ],
  providers: [
    {
      provide: CmsPageAdapter,
      useExisting: UpscaleCmsPageAdapter,
    },
    {
      provide: CmsComponentAdapter,
      useExisting: UpscaleCmsComponentAdapter,
    },
    {
      provide: ProductAdapter,
      useExisting: UpscaleProductAdapter,
    },
  ],
})
export class UpscaleCmsModule {}
