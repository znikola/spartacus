/**
 * @license
 * The MIT License
 * Copyright (c) https://github.com/gund/
 *
 * See:
 * - https://github.com/gund/ng-dynamic-component/blob/56d3d9f49da88df944d87e9154ef5c0e283c10e5/projects/ng-dynamic-component/src/lib/dynamic.directive.ts
 */

import {
  Directive,
  DoCheck,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { InputsType, IoService, OutputsType } from './io.service';
import { SelectorComponentDirective } from './selector-component.directive';

@Directive({
  selector: '[cxSelector]',
  providers: [IoService],
})
export class SelectorIODirective implements OnChanges, DoCheck {
  @Input()
  inputs: InputsType;

  @Input()
  outputs: OutputsType;

  constructor(
    protected ioService: IoService,
    protected selectorComponentDirective: SelectorComponentDirective
  ) {
    this.ioService.init(selectorComponentDirective.spikeCompWrapperObj);
  }

  ngOnChanges(changes: SimpleChanges) {
    this.ioService.update(
      this.inputs,
      this.outputs,
      this._inputsChanged(changes),
      this._outputsChanged(changes)
    );
  }

  ngDoCheck() {
    this.ioService.maybeUpdate();
  }

  protected _inputsChanged(changes: SimpleChanges): boolean {
    return 'inputs' in changes;
  }

  protected _outputsChanged(changes: SimpleChanges): boolean {
    return 'outputs' in changes;
  }
}
