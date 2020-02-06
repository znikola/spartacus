import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CmsConfig, ConfigModule, I18nModule } from '@spartacus/core';
import { IconModule } from '../../../cms-components/misc/icon/icon.module';
import { SelectorModule } from '../../../selector/selector.module';
import { CardComponent } from './card.component';

@NgModule({
  imports: [
    CommonModule,
    I18nModule,
    IconModule,
    ConfigModule.withConfig(<CmsConfig>{
      cmsComponents: {
        'cx-card': {
          component: CardComponent,
        },
      },
    }),
    SelectorModule,
  ],
  declarations: [CardComponent],
  exports: [CardComponent],
  entryComponents: [CardComponent],
})
export class CardModule {}
