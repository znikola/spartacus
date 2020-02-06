import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CmsConfig, ConfigModule } from '@spartacus/core';
import { SelectorModule } from '../../../selector/selector.module';
import { GenericLinkModule } from '../../../shared/components/generic-link/generic-link.module';
import { LinkComponent } from './link.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    GenericLinkModule,
    ConfigModule.withConfig(<CmsConfig>{
      cmsComponents: {
        CMSLinkComponent: { component: LinkComponent },
      },
    }),
    SelectorModule,
  ],
  declarations: [LinkComponent],
  exports: [LinkComponent],
  entryComponents: [LinkComponent],
})
export class LinkModule {}

