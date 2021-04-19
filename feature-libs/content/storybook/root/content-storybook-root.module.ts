import { NgModule } from '@angular/core';
import { provideDefaultConfigFactory } from '@spartacus/core';
import { STORYBOOK_FEATURE } from './feature-name';

// TODO: Inline this factory when we start releasing Ivy compiled libraries
export function defaultContentComponentsConfig() {
  const config = {
    featureModules: {
      [STORYBOOK_FEATURE]: {
        cmsComponents: ['STORYBOOK'],
      },
    },
  };
  return config;
}

@NgModule({
  providers: [provideDefaultConfigFactory(defaultContentComponentsConfig)],
})
export class ContentStorybookRootModule {}
