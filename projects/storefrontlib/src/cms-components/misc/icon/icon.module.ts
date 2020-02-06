import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CmsConfig, Config, ConfigModule } from '@spartacus/core';
import { SelectorModule } from '../../../selector/selector.module';
import { fontawesomeIconConfig } from './fontawesome-icon.config';
import { IconOutletComponent } from './icon-outlet.component';
import { IconComponent } from './icon.component';
import { IconConfig } from './icon.model';

const components = [IconComponent, IconOutletComponent];

@NgModule({
  imports: [
    CommonModule,
    ConfigModule.withConfig(fontawesomeIconConfig),
    ConfigModule.withConfig(<CmsConfig>{
      cmsComponents: {
        'cx-icon': { component: IconComponent },
      },
    }),
    SelectorModule,
  ],
  providers: [{ provide: IconConfig, useExisting: Config }],
  declarations: [...components],
  exports: [...components],
  entryComponents: [...components],
})
export class IconModule {}
