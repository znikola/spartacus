import { NgModule } from '@angular/core';
import { LayoutStylingService } from './layout-styling.service';

/**
 * The LayoutStylingModule provides a mechanism to load styles from the backend.
 * This is done in Upscale commerce where layout can be configured in a low code fashion. The actual styling
 * is exposed as properties in the API response, and must be processed on the client side.
 */
@NgModule({
  providers: [LayoutStylingService],
})
export class LayoutStylingModule {
  constructor(_styling: LayoutStylingService) {}
}
