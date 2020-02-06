import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SelectorModule } from '@spartacus/storefront';
import { SelectorTestingModule } from './selector-testing-component/selector-testing.module';
import { TestParentComponent } from './test-parent.component';
import { TestParent2Component } from './test-parent2.component';
import { TestRootComponent } from './test-root.component';

const components = [
  TestParentComponent,
  TestParent2Component,
  TestRootComponent,
];

@NgModule({
  imports: [
    CommonModule,
    SelectorTestingModule,
    RouterModule.forChild([
      {
        path: 'test/native',
        component: TestParentComponent,
      },
      {
        path: 'test/sproutlets',
        component: TestParent2Component,
      },
    ]),
    SelectorModule,
  ],
  declarations: [...components],
  exports: [...components],
})
export class TestModule {}
