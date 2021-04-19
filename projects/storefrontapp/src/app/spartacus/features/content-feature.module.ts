import { NgModule } from '@angular/core';
import {
  ARTICLE_FEATURE,
  ContentArticleRootModule,
} from '@spartacus/content/article/root';
import {
  ContentImageRootModule,
  IMAGE_FEATURE,
} from '@spartacus/content/image/root';
import {
  ContentStorybookRootModule,
  STORYBOOK_FEATURE,
} from '@spartacus/content/storybook/root';
import { provideConfig } from '@spartacus/core';

@NgModule({
  declarations: [],
  imports: [
    ContentArticleRootModule,
    ContentImageRootModule,
    ContentStorybookRootModule,
  ],
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
        [STORYBOOK_FEATURE]: {
          module: () =>
            import('@spartacus/content/storybook').then(
              (m) => m.ContentStorybookModule
            ),
        },
      },
    }),
  ],
})
export class ContentFeatureModule {}
