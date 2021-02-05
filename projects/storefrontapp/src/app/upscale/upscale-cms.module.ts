import { NgModule } from '@angular/core';
import {
  CmsComponentAdapter,
  CmsPageAdapter,
  ProductAdapter,
  provideConfig,
} from '@spartacus/core';
import { CarouselModule } from '@spartacus/storefront';
import { UpscaleCmsPageAdapter } from './adapters/upscale-cms-page.adapter';
import { UpscaleCmsComponentAdapter } from './adapters/upscale-component.adapter';
import { UpscaleProductAdapter } from './adapters/upscale-product.adapter';
import { ArticleContentModule } from './components/cms/article-content/article-content.module';
import { BrowseModule } from './components/cms/browse/browse.module';
import { ImageModule } from './components/cms/image/image.module';
import { NextSellModule } from './components/cms/next-sell/next-sell.module';
import { ProductContentModule } from './components/cms/product-content/product-content.module';
import { SellingTreeModule } from './components/cms/selling-tree/selling-tree.module';
import { StorybookModule } from './components/cms/storybook/storybook.module';
import { defaultUpscaleConfig } from './config/default-upscale.config';

@NgModule({
  imports: [
    BrowseModule,
    StorybookModule,
    ImageModule,
    CarouselModule,
    SellingTreeModule,
    ProductContentModule,
    ArticleContentModule,
    NextSellModule,
  ],
  providers: [
    provideConfig(defaultUpscaleConfig),
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
