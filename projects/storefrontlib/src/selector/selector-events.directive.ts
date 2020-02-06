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
  OnDestroy,
  Renderer2,
  Type,
} from '@angular/core';
import { SelectorComponentDirective } from './selector-component.directive';

type EventCallback = (event: any) => boolean | void;

export interface EventsMap {
  [key: string]: EventCallback;
}

interface EventActions {
  set: EventsMap;
  remove: string[];
}

@Directive({
  selector: '[cxSelector]',
})
export class SelectorEventsDirective implements DoCheck, OnDestroy {
  @Input()
  events: EventsMap;

  private _eventsDiffer = this.differs.find({}).create<string, EventCallback>();
  private _lastCompType: Type<any>;
  private _lastEventActions: EventActions;

  private disposers: { [key: string]: () => void } = {};

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
    const changes = this._eventsDiffer.diff(this.events);

    if (changes) {
      this._lastEventActions = this._changesToEventActions(changes);
    }

    if (changes || (isCompChanged && this._lastEventActions)) {
      this._updateEvents(this._lastEventActions);
    }
  }

  // spike todo check if needed
  ngOnDestroy() {
    Object.values(this.disposers)
      .filter(x => !!x)
      .forEach(disposer => disposer());
  }

  setEvent(name: string, callback: EventCallback) {
    if (this._nativeElement) {
      this.removeEvent(name);
      this.disposers[name] = this.renderer.listen(
        this._nativeElement,
        name,
        callback
      );
    }
  }

  removeEvent(name: string) {
    if (this.disposers[name]) {
      this.disposers[name]();
      this.disposers[name] = undefined;
    }
  }

  private _updateEvents(actions: EventActions) {
    // ? Early exit if no dynamic component
    if (!this._compType) {
      return;
    }

    Object.keys(actions.set).forEach(key =>
      this.setEvent(key, actions.set[key])
    );

    actions.remove.forEach(key => this.removeEvent(key));
  }

  private _changesToEventActions(
    changes: KeyValueChanges<string, EventCallback>
  ): EventActions {
    const attrActions: EventActions = {
      set: {},
      remove: [],
    };

    changes.forEachAddedItem(r => (attrActions.set[r.key] = r.currentValue));
    changes.forEachChangedItem(r => (attrActions.set[r.key] = r.currentValue));
    changes.forEachRemovedItem(r => attrActions.remove.push(r.key));

    return attrActions;
  }
}
