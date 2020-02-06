import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CmsConfig, CmsPageTitleModule, ConfigModule } from '@spartacus/core';
import { SelectorModule } from '../../../selector/selector.module';
import { BreadcrumbComponent } from './breadcrumb.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ConfigModule.withConfig(<CmsConfig>{
      cmsComponents: {
        BreadcrumbComponent: {
          component: BreadcrumbComponent,
        },
      },
    }),
    CmsPageTitleModule,
    SelectorModule,
  ],
  declarations: [BreadcrumbComponent],
  exports: [BreadcrumbComponent],
  entryComponents: [BreadcrumbComponent],
})
export class BreadcrumbModule {}
