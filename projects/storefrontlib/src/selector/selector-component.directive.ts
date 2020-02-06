/**
 * @license
 * The MIT License
 * Copyright (c) https://github.com/gund/
 *
 * See:
 * - https://github.com/gund/ng-dynamic-component/blob/56d3d9f49da88df944d87e9154ef5c0e283c10e5/projects/ng-dynamic-component/src/lib/dynamic.component.ts
 */

import {
  ComponentFactoryResolver,
  ComponentRef,
  Directive,
  InjectionToken,
  Injector,
  Input,
  OnChanges,
  SimpleChanges,
  Type,
  ViewContainerRef,
} from '@angular/core';
import { CmsConfig } from '@spartacus/core';

/// spike todo remove:
export const TEST_CONFIG = new InjectionToken('TEST_CONFIG');

@Directive({
  selector: '[cxSelector]',
})
export class SelectorComponentDirective implements OnChanges {
  @Input()
  cxSelector: string;

  protected get component(): Type<any> {
    const selectorConfig =
      this.config &&
      this.config.cmsComponents &&
      this.config.cmsComponents[this.cxSelector];
    return selectorConfig && selectorConfig.component;
  }

  get componentRef(): ComponentRef<any> | null {
    return this.spikeCompWrapperObj.cmpRef;
  }
  set componentRef(cmpRef) {
    this.spikeCompWrapperObj.cmpRef = cmpRef;
  }

  spikeCompWrapperObj: { cmpRef?: ComponentRef<any> } = {};

  constructor(
    protected _vcr: ViewContainerRef,
    protected _cfr: ComponentFactoryResolver,
    protected config: CmsConfig
  ) {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes['cxSelector']) {
      this.createDynamicComponent();
    }
  }

  protected createDynamicComponent() {
    this._vcr.clear();
    this.componentRef = null;

    if (this.component) {
      this.componentRef = this._vcr.createComponent(
        this._cfr.resolveComponentFactory(this.component),
        0,
        this._resolveInjector()
        // spike todo - consider here place for content projection
      );
    }
  }

  protected _resolveInjector(): Injector {
    return this._vcr.injector;
  }
}
