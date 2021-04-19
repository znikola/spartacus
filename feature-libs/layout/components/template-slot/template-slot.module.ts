import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CmsConfig, provideDefaultConfig } from '@spartacus/core';
import { PageComponentModule } from '@spartacus/storefront';
import { LayoutStylingModule } from '../styling/layout-styling.module';
import { HeadingModule } from './heading/headline.module';
import { TemplateSlotLayoutDirective } from './styles/template-slot-layout.directive';
import { TemplateSlotComponent } from './template-slot.component';

@NgModule({
  imports: [
    CommonModule,
    LayoutStylingModule,
    PageComponentModule,
    HeadingModule,
  ],
  declarations: [TemplateSlotComponent, TemplateSlotLayoutDirective],
  providers: [
    provideDefaultConfig(<CmsConfig>{
      cmsComponents: {
        TEMPLATE_SLOT: {
          component: TemplateSlotComponent,
        },
      },
    }),
  ],
})
export class TemplateSlotModule {}
