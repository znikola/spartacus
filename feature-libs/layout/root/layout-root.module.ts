import { NgModule } from '@angular/core';
import { provideDefaultConfigFactory } from '@spartacus/core';
import { Observable } from 'rxjs';
import { LayoutStylingFacade } from './facade/layout-styling.facade';
import { LAYOUT_FEATURE, LAYOUT_STYLING_CORE_FEATURE } from './feature-name';

export abstract class LayoutStylingFacadeTransitionalToken {
  abstract load(): Observable<unknown>;
}

// TODO: Inline this factory when we start releasing Ivy compiled libraries
export function defaultContentComponentsConfig() {
  const config = {
    featureModules: {
      [LAYOUT_FEATURE]: {
        cmsComponents: ['TEMPLATE_SLOT'],
      },
      // by default core is bundled together with components
      [LAYOUT_STYLING_CORE_FEATURE]: LAYOUT_FEATURE,
    },
  };
  return config;
}

@NgModule({
  providers: [
    provideDefaultConfigFactory(defaultContentComponentsConfig),
    {
      provide: LayoutStylingFacadeTransitionalToken,
      useExisting: LayoutStylingFacade,
    },
  ],
})
export class LayoutRootModule {}
