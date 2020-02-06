import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CmsConfig, ConfigModule } from '@spartacus/core';
import { SelectorModule } from '../../../selector/selector.module';
import { ParagraphComponent } from './paragraph.component';

@NgModule({
  imports: [
    CommonModule,
    ConfigModule.withConfig(<CmsConfig>{
      cmsComponents: {
        CMSParagraphComponent: {
          component: ParagraphComponent,
        },
        CMSTabParagraphComponent: {
          component: ParagraphComponent,
        },
      },
    }),SelectorModule
  ],
  declarations: [ParagraphComponent],
  exports: [ParagraphComponent],
  entryComponents: [ParagraphComponent],
})
export class CmsParagraphModule {}

