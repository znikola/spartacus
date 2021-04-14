import { NgModule } from '@angular/core';
import { provideConfig } from '@spartacus/core';
import { LayoutRootModule, LAYOUT_FEATURE } from '@spartacus/layout/root';

@NgModule({
  declarations: [],
  imports: [LayoutRootModule],
  providers: [
    provideConfig({
      featureModules: {
        [LAYOUT_FEATURE]: {
          module: () => import('@spartacus/layout').then((m) => m.LayoutModule),
        },
      },
    }),
  ],
})
export class LayoutFeatureModule {}
