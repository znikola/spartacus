import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CmsConfig, ConfigModule } from '@spartacus/core';
import { SelectorModule } from '../../../selector/selector.module';
import { OnlyNumberDirectiveModule } from '../../directives/only-number/only-number.directive.module';
import { ItemCounterOutletComponent } from './item-counter-outlet.component';
import { ItemCounterComponent } from './item-counter.component';

const components = [ItemCounterOutletComponent, ItemCounterComponent];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    OnlyNumberDirectiveModule,
    ConfigModule.withConfig(<CmsConfig>{
      cmsComponents: {
        // spike todo use different config
        'cx-item-counter': {
          component: ItemCounterComponent,
        },
      },
    }),
    SelectorModule,
  ],
  declarations: [...components],
  entryComponents: [...components],
  exports: [...components],
})
export class ItemCounterModule {}
