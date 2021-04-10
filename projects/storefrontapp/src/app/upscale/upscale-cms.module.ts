import { NgModule } from '@angular/core';
import {
  CmsComponentAdapter,
  CmsPageAdapter,
  CMS_COMPONENT_NORMALIZER,
  CMS_PAGE_NORMALIZER,
  ProductAdapter,
  provideConfig,
} from '@spartacus/core';
import { UpscaleCmsPageNormalizer } from './adapters/converters/upscale-cms-page.normalizer';
import { UpscaleCmsComponentNormalizer } from './adapters/converters/upscale.cms-component.normalizer';
import { UpscaleCmsPageAdapter } from './adapters/upscale-cms-page.adapter';
import { UpscaleCmsComponentAdapter } from './adapters/upscale-component.adapter';
import { UpscaleProductAdapter } from './adapters/upscale-product.adapter';
import { ContainerModule } from './components/cms/container/container.module';
import { ImageModule } from './components/cms/image/image.module';
import { defaultUpscaleConfig } from './config/default-upscale.config';

@NgModule({
  imports: [
    ContainerModule,
    // BrowseModule,
    // StorybookModule,
    ImageModule,
    // CarouselModule,
    // SellingTreeModule,
    // ProductContentModule,
    // ArticleContentModule,
    // NextSellModule,
  ],
  providers: [
    provideConfig(defaultUpscaleConfig),
    {
      provide: CmsPageAdapter,
      useExisting: UpscaleCmsPageAdapter,
    },
    {
      provide: UpscaleCmsPageNormalizer,
      useClass: UpscaleCmsPageNormalizer,
    },
    {
      provide: CMS_PAGE_NORMALIZER,
      useExisting: UpscaleCmsPageNormalizer,
      multi: true,
    },

    {
      provide: CMS_COMPONENT_NORMALIZER,
      useExisting: UpscaleCmsComponentNormalizer,
      multi: true,
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
