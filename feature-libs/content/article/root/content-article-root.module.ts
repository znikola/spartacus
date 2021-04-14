import { NgModule } from '@angular/core';
import { provideDefaultConfigFactory } from '@spartacus/core';
import { ARTICLE_FEATURE } from './feature-name';

// TODO: Inline this factory when we start releasing Ivy compiled libraries
export function defaultContentComponentsConfig() {
  const config = {
    featureModules: {
      [ARTICLE_FEATURE]: {
        cmsComponents: ['ARTICLE_DETAILS'],
      },
    },
  };
  return config;
}

@NgModule({
  // imports: [PageLayoutModule],
  providers: [provideDefaultConfigFactory(defaultContentComponentsConfig)],
})
export class ContentArticleRootModule {}
