import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VariantGenericSelectorComponent } from './variant-generic-selector.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [VariantGenericSelectorComponent],
  entryComponents: [VariantGenericSelectorComponent],
  exports: [VariantGenericSelectorComponent],
})
export class VariantGenericSelectorModule { }
