import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CmsConfig, ConfigModule } from '@spartacus/core';
import { PageSlotModule } from '../../../cms-structure/page/slot/page-slot.module';
import { SelectorModule } from '../../../selector/selector.module';
import { OutletModule } from '../../outlet/outlet.module';
import { PageLayoutComponent } from './page-layout.component';
import { PageLayoutService } from './page-layout.service';

@NgModule({
  imports: [
    CommonModule,
    OutletModule,
    PageSlotModule,
    ConfigModule.withConfig(<CmsConfig>{
      cmsComponents: {
        'cx-page-layout': {
          component: PageLayoutComponent,
        },
      },
    }),
    SelectorModule,
  ],
  declarations: [PageLayoutComponent],
  providers: [PageLayoutService],
  exports: [PageLayoutComponent],
})
export class PageLayoutModule {}
