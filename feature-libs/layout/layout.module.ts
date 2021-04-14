import { NgModule } from '@angular/core';
import { LayoutComponentModule } from './components/layout-component.module';
import { LayoutCoreModule } from './core/layout-core.module';

@NgModule({
  imports: [LayoutComponentModule, LayoutCoreModule],
})
export class LayoutModule {}
