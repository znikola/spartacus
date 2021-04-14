import { NgModule } from '@angular/core';
import {
  ARTICLE_FEATURE,
  ContentArticleRootModule,
} from '@spartacus/content/article/root';
import {
  ContentImageRootModule,
  IMAGE_FEATURE,
} from '@spartacus/content/image/root';
import { provideConfig } from '@spartacus/core';

@NgModule({
  declarations: [],
  imports: [ContentArticleRootModule, ContentImageRootModule],
  providers: [
    provideConfig({
      featureModules: {
        [ARTICLE_FEATURE]: {
          module: () =>
            import('@spartacus/content/article').then(
              (m) => m.ContentArticleModule
            ),
        },
        [IMAGE_FEATURE]: {
          module: () =>
            import('@spartacus/content/image').then(
              (m) => m.ContentImageModule
            ),
        },
      },
    }),
  ],
})
export class ContentFeatureModule {}
