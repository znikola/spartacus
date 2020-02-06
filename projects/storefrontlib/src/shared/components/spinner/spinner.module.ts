import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CmsConfig, ConfigModule, I18nModule } from '@spartacus/core';
import { SelectorModule } from '../../../selector/selector.module';
import { SpinnerComponent } from './spinner.component';

@NgModule({
  imports: [
    CommonModule,
    I18nModule,
    ConfigModule.withConfig(<CmsConfig>{
      cmsComponents: {
        'cx-spinner': {
          component: SpinnerComponent,
        },
      },
    }),
    SelectorModule,
  ],
  declarations: [SpinnerComponent],
  exports: [SpinnerComponent],
  entryComponents: [SpinnerComponent],
})
export class SpinnerModule {}
