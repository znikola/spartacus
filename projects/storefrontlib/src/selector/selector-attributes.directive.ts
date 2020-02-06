/**
 * @license
 * The MIT License
 * Copyright (c) https://github.com/gund/
 *
 * See:
 * - https://github.com/gund/ng-dynamic-component/blob/56d3d9f49da88df944d87e9154ef5c0e283c10e5/projects/ng-dynamic-component/src/lib/dynamic-attributes.directive.ts
 */

import {
  Directive,
  DoCheck,
  Injector,
  Input,
  KeyValueChanges,
  KeyValueDiffers,
  Renderer2,
  Type,
} from '@angular/core';
import { SelectorComponentDirective } from './selector-component.directive';

export interface AttributesMap {
  [key: string]: string;
}

interface AttributeActions {
  set: AttributesMap;
  remove: string[];
}

@Directive({
  selector: '[cxSelector]',
})
export class SelectorAttributesDirective implements DoCheck {
  @Input()
  attributes: AttributesMap;

  private _attrsDiffer = this.differs.find({}).create<string, string>();
  private _lastCompType: Type<any>;
  private _lastAttrActions: AttributeActions;

  private get _nativeElement() {
    return (
      this.selectorComponentDirective.componentRef &&
      this.selectorComponentDirective.componentRef.location.nativeElement
    );
  }

  private get _compType() {
    return (
      this.selectorComponentDirective.componentRef &&
      this.selectorComponentDirective.componentRef.componentType
    );
  }

  private get _isCompChanged() {
    if (this._lastCompType !== this._compType) {
      this._lastCompType = this._compType;
      return true;
    }
    return false;
  }

  constructor(
    protected renderer: Renderer2,
    protected differs: KeyValueDiffers,
    protected injector: Injector,
    protected selectorComponentDirective: SelectorComponentDirective
  ) {}

  ngDoCheck(): void {
    const isCompChanged = this._isCompChanged;
    const changes = this._attrsDiffer.diff(this.attributes);

    if (changes) {
      this._lastAttrActions = this._changesToAttrActions(changes);
    }

    if (changes || (isCompChanged && this._lastAttrActions)) {
      this._updateAttributes(this._lastAttrActions);
    }
  }

  setAttribute(name: string, value: string, namespace?: string) {
    if (this._nativeElement) {
      this.renderer.setAttribute(this._nativeElement, name, value, namespace);
    }
  }

  removeAttribute(name: string, namespace?: string) {
    if (this._nativeElement) {
      this.renderer.removeAttribute(this._nativeElement, name, namespace);
    }
  }

  private _updateAttributes(actions: AttributeActions) {
    // ? Early exit if no dynamic component
    if (!this._compType) {
      return;
    }

    Object.keys(actions.set).forEach(key =>
      this.setAttribute(key, actions.set[key])
    );

    actions.remove.forEach(key => this.removeAttribute(key));
  }

  private _changesToAttrActions(
    changes: KeyValueChanges<string, string>
  ): AttributeActions {
    const attrActions: AttributeActions = {
      set: {},
      remove: [],
    };

    changes.forEachAddedItem(r => (attrActions.set[r.key] = r.currentValue));
    changes.forEachChangedItem(r => (attrActions.set[r.key] = r.currentValue));
    changes.forEachRemovedItem(r => attrActions.remove.push(r.key));

    return attrActions;
  }
}
