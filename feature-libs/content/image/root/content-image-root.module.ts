import { NgModule } from '@angular/core';
import { provideDefaultConfigFactory } from '@spartacus/core';
import { IMAGE_FEATURE } from './feature-name';

// TODO: Inline this factory when we start releasing Ivy compiled libraries
export function defaultContentComponentsConfig() {
  const config = {
    featureModules: {
      [IMAGE_FEATURE]: {
        cmsComponents: ['IMAGE'],
      },
    },
  };
  return config;
}

@NgModule({
  providers: [provideDefaultConfigFactory(defaultContentComponentsConfig)],
})
export class ContentImageRootModule {}
