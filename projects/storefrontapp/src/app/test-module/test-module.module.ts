import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AComponent } from './a/a.component';
import { BComponent } from './b/b.component';
import { CmsConfig, provideConfig } from '@spartacus/core';
import { ContainerComponent } from './container/container.component';
import { PageComponentModule } from '@spartacus/storefront';

@NgModule({
  declarations: [AComponent, BComponent, ContainerComponent],
  imports: [CommonModule, PageComponentModule],
  providers: [
    provideConfig({
      cmsComponents: {
        a: {
          component: AComponent,
        },
        b: {
          component: BComponent,
        },
        SimpleResponsiveBannerComponent: {
          component: ContainerComponent,
          data: {
            composition: {
              inner: ['a', 'b', 'a'],
            },
          },
        },
      },
    } as CmsConfig),
  ],
})
export class TestModuleModule {}
