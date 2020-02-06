import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CmsConfig, ConfigModule, I18nModule } from '@spartacus/core';
import { IconModule } from '../../../cms-components/misc/icon/index';
import { SelectorModule } from '../../../selector/selector.module';
import { GlobalMessageComponent } from './global-message.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    IconModule,
    I18nModule,
    ConfigModule.withConfig(<CmsConfig>{
      cmsComponents: {
        'cx-global-message': { component: GlobalMessageComponent },
      },
    }),
    SelectorModule,
  ],
  declarations: [GlobalMessageComponent],
  exports: [GlobalMessageComponent],
  entryComponents: [GlobalMessageComponent],
})
export class GlobalMessageComponentModule {}
