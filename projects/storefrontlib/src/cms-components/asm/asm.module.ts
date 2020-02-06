import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {
  AsmModule as AsmCoreModule,
  CmsConfig,
  ConfigModule,
  I18nModule,
} from '@spartacus/core';
import { SelectorModule } from '../../selector/selector.module';
import { AsmLoaderModule } from './asm-loader.module';
import { AsmMainUiComponent } from './asm-main-ui/asm-main-ui.component';
import { AsmSessionTimerComponent } from './asm-session-timer/asm-session-timer.component';
import { FormatTimerPipe } from './asm-session-timer/format-timer.pipe';
import { CSAgentLoginFormComponent } from './csagent-login-form/csagent-login-form.component';
import { CustomerEmulationComponent } from './customer-emulation/customer-emulation.component';
import { CustomerSelectionComponent } from './customer-selection/customer-selection.component';

const components = [
  AsmMainUiComponent,
  CSAgentLoginFormComponent,
  CustomerSelectionComponent,
  AsmSessionTimerComponent,
  CustomerEmulationComponent,
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    I18nModule,
    AsmCoreModule.forRoot(),
    AsmLoaderModule,
    ConfigModule.withConfig(<CmsConfig>{
      cmsComponents: {
        'cx-asm-main-ui': { component: AsmMainUiComponent },
        'cx-cs-agent-login-form': { component: CSAgentLoginFormComponent },
        'cx-customer-selection': { component: CustomerSelectionComponent },
        'cx-asm-session-timer': { component: AsmSessionTimerComponent },
        'cx-customer-emulation': { component: CustomerEmulationComponent },
      },
    }),
    SelectorModule,
  ],
  declarations: [...components, FormatTimerPipe],
  entryComponents: [...components],
})
export class AsmModule {}
