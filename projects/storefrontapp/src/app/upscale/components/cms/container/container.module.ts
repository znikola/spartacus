import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CmsConfig, provideDefaultConfig } from '@spartacus/core';
import { PageComponentModule } from '@spartacus/storefront';
import { HeadlineModule } from '../shared/headline/headline.module';
import { ContainerComponent } from './container.component';
import { ContainerLayoutDirective } from './styles/container-style.directive';

@NgModule({
  imports: [CommonModule, HeadlineModule, PageComponentModule],
  declarations: [ContainerComponent, ContainerLayoutDirective],
  providers: [
    provideDefaultConfig(<CmsConfig>{
      cmsComponents: {
        CONTAINER: {
          component: ContainerComponent,
          // providers: [
          //   {
          //     provide: ContainerLayoutService,
          //     useClass: ContainerLayoutService,
          //     deps: [CmsComponentData, ElementRef],
          //   },
          // ],
        },
      },
    }),
  ],
})
export class ContainerModule {}
