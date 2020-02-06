import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CmsConfig, ConfigModule } from '@spartacus/core';
import { SelectorModule } from '../../../selector/selector.module';
import { GenericLinkComponent } from './generic-link.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ConfigModule.withConfig(<CmsConfig>{
      cmsComponents: {
        'cx-generic-link': {
          component: GenericLinkComponent,
        },
      },
    }),
    SelectorModule,
  ],
  declarations: [GenericLinkComponent],
  exports: [GenericLinkComponent],
  entryComponents: [GenericLinkComponent],
})
export class GenericLinkModule {}
