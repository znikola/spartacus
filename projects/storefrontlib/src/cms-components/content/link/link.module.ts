import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CmsConfig, ConfigModule } from '@spartacus/core';
import { GenericLinkModule } from '../../../shared/components/generic-link/generic-link.module';
import { MediaModule } from '../../../shared/components/media/media.module';
import { LinkComponent } from './link.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MediaModule,
    GenericLinkModule,
    ConfigModule.withConfig(<CmsConfig>{
      cmsComponents: {
        CMSLinkComponent: { component: LinkComponent },
      },
    }),
  ],
  declarations: [LinkComponent],
  exports: [LinkComponent],
  entryComponents: [LinkComponent],
})
export class LinkModule {}
