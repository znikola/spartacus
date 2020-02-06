import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CmsConfig, ConfigModule } from '@spartacus/core';
import { SkipLinkModule } from '../../../layout/a11y/skip-link/skip-link.module';
import { SelectorModule } from '../../../selector/selector.module';
import { OutletModule } from '../../outlet/outlet.module';
import { PageComponentModule } from '../component/page-component.module';
import { PageSlotComponent } from './page-slot.component';

@NgModule({
  imports: [
    CommonModule,
    OutletModule,
    PageComponentModule,
    SkipLinkModule,
    ConfigModule.withConfig(<CmsConfig>{
      cmsComponents: {
        'cx-page-slot': {
          component: PageSlotComponent,
        },
      },
    }),
    SelectorModule,
  ],
  providers: [],
  declarations: [PageSlotComponent],
  exports: [PageSlotComponent],
  entryComponents: [PageSlotComponent],
})
export class PageSlotModule {}
