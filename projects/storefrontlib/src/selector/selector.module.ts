import { NgModule } from '@angular/core';
import { ArgsPipe } from './args.pipe';
import { SelectorAttributesDirective } from './selector-attributes.directive';
import { SelectorComponentDirective } from './selector-component.directive';
import { SelectorEventsDirective } from './selector-events.directive';
import { SelectorIODirective } from './selector-io.directive';

const items = [
  SelectorComponentDirective,
  SelectorIODirective,
  SelectorAttributesDirective,
  SelectorEventsDirective,
  ArgsPipe,
];

@NgModule({
  declarations: [...items],
  exports: [...items],
})
export class SelectorModule {}
