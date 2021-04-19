import { NgModule } from '@angular/core';
import { LayoutStylingService } from './layout-styling.service';

@NgModule({
  providers: [LayoutStylingService],
})
export class LayoutStylingModule {
  constructor(_styling: LayoutStylingService) {}
}
