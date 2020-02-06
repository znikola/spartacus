import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SelectorModule } from '@spartacus/storefront';
import { SelectorTestingComponent } from './selector-testing.component';
import { SelectorTesting2Component } from './selector-testing2.component';

const components = [SelectorTestingComponent, SelectorTesting2Component];

@NgModule({
  imports: [CommonModule, SelectorModule],
  declarations: [...components],
  exports: [...components],
  entryComponents: [...components],
})
export class SelectorTestingModule {}
