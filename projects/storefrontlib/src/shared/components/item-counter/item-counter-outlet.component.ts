import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ComponentOutlet } from '../../../selector/component-outlet';

@Component({
  selector: 'cx-item-counter-outlet',
  templateUrl: '../../../selector/component-outlet.html',
})
export class ItemCounterOutletComponent extends ComponentOutlet {
  @Input()
  value: number;
  @Input()
  step: number;
  @Input()
  min: number;
  @Input()
  max: number;
  @Input()
  async: boolean;
  @Input()
  cartIsLoading: boolean;
  @Input()
  isValueChangeable: boolean;

  //spike todo remove:
  @Input()
  spike: boolean;

  @Output()
  update = new EventEmitter<number>();
}
