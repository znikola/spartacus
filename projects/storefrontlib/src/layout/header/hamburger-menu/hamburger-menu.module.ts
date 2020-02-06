import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CmsConfig, ConfigModule } from '@spartacus/core';
import { SelectorModule } from '../../../selector/selector.module';
import { HamburgerMenuComponent } from './hamburger-menu.component';
@NgModule({
  imports: [
    CommonModule,
    ConfigModule.withConfig(<CmsConfig>{
      cmsComponents: {
        HamburgerMenuComponent: {
          component: HamburgerMenuComponent,
        },
      },
    }),
    SelectorModule,
  ],
  declarations: [HamburgerMenuComponent],
  exports: [HamburgerMenuComponent],
  entryComponents: [HamburgerMenuComponent],
})
export class HamburgerMenuModule {}

