/**
 * @license
 * The MIT License
 * Copyright (c) 2020 https://github.com/gund/
 *
 * See:
 * - https://github.com/gund/ng-dynamic-component/blob/56d3d9f49da88df944d87e9154ef5c0e283c10e5/projects/ng-dynamic-component/src/lib/io.service.ts
 */

import {
  ChangeDetectorRef,
  ComponentFactory,
  ComponentFactoryResolver,
  ComponentRef,
  Injectable,
  KeyValueChanges,
  KeyValueDiffers,
  OnDestroy,
  SimpleChanges,
} from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { changesFromRecord, createNewChange, noop } from './util';

export type InputsType = { [k: string]: any };
export type OutputsType = { [k: string]: Function };
export type IOMapInfo = { propName: string; templateName: string };
export type IOMappingList = IOMapInfo[];
export type KeyValueChangesAny = KeyValueChanges<any, any>;

export interface IoInitOptions {
  trackOutputChanges?: boolean;
}

const recordToChanges = changesFromRecord({ isFirstChanges: true });
const recordToNewChanges = changesFromRecord({ onlyNewChanges: true });

@Injectable()
export class IoService implements OnDestroy {
  private get _componentInst() {
    return this._compRef ? this._compRef.instance : null;
  }

  private get _componentInstChanged(): boolean {
    if (this._lastComponentInst !== this._componentInst) {
      this._lastComponentInst = this._componentInst;
      return true;
    } else {
      return false;
    }
  }

  private get _compCdr(): ChangeDetectorRef {
    return this._compRef ? this._compRef.injector.get(ChangeDetectorRef) : null;
  }

  constructor(
    private _differs: KeyValueDiffers,
    private _cfr: ComponentFactoryResolver
  ) {}

  private get _compRef(): ComponentRef<any> {
    return this.spikeCompWrapperObj.cmpRef;
  }
  private checkInit = this.failInit;

  private _lastComponentInst: any = null;
  private _lastInputChanges: SimpleChanges;
  private _inputsDiffer = this._differs.find({}).create();
  private _compFactory: ComponentFactory<any> | null = null;
  private _outputsShouldDisconnect$ = new Subject<void>();

  private _inputs: InputsType;
  private _outputs: OutputsType;

  private spikeCompWrapperObj: { cmpRef?: ComponentRef<any> };
  private _outputsChanged: (outputs: OutputsType) => boolean = () => false;

  ngOnDestroy(): void {
    this._disconnectOutputs();
  }

  init(
    spikeCompWrapperObj: { cmpRef?: ComponentRef<any> },
    options: IoInitOptions = {}
  ) {
    // spike todo check when checkInit may fail
    // spike todo make it better - don't pass reference
    this.checkInit = spikeCompWrapperObj ? noop : this.failInit;
    this.spikeCompWrapperObj = spikeCompWrapperObj;

    if (options.trackOutputChanges) {
      const outputsDiffer = this._differs.find({}).create();
      this._outputsChanged = outputs => !!outputsDiffer.diff(outputs);
    }
  }

  update(
    inputs: InputsType,
    outputs: OutputsType,
    inputsChanged: boolean,
    outputsChanged: boolean
  ) {
    this.checkInit();
    this.updateIO(inputs, outputs);

    const compChanged = this._componentInstChanged;

    if (compChanged || inputsChanged) {
      const inputsChanges = this._getInputsChanges(this._inputs); //spike todo check if this returns null when no changes
      if (inputsChanges) {
        this._updateInputChanges(inputsChanges);
      }
      this.updateInputs(compChanged || !this._lastInputChanges);
    }

    if (compChanged || outputsChanged) {
      this.bindOutputs();
    }
  }

  maybeUpdate() {
    this.checkInit();

    if (this._componentInstChanged) {
      this.updateInputs(true);
      this.bindOutputs();
      return;
    }

    if (this._outputsChanged(this._outputs)) {
      this.bindOutputs();
    }

    if (!this._inputs) {
      return;
    }

    const inputsChanges = this._getInputsChanges(this._inputs);

    if (inputsChanges) {
      const isNotFirstChange = !!this._lastInputChanges;
      this._updateInputChanges(inputsChanges);

      if (isNotFirstChange) {
        this.updateInputs();
      }
    }
  }

  private updateIO(inputs: InputsType, outputs: OutputsType) {
    this._inputs = inputs;
    this._outputs = outputs;
  }

  private updateInputs(isFirstChange = false) {
    if (isFirstChange) {
      this._updateCompFactory();
    }

    const compInst = this._componentInst;
    let inputs = this._inputs;

    if (!inputs || !compInst) {
      return;
    }

    inputs = this._resolveInputs(inputs);

    Object.keys(inputs).forEach(p => (compInst[p] = inputs[p]));

    // spike todo: check if it won't trigger avalanche of change detection
    // it should stop on components with OnPush strategy which don't have changed inputs

    // Mark component for check to re-render with new inputs
    if (this._compCdr) {
      this._compCdr.markForCheck();
    }

    this.notifyOnInputChanges(this._lastInputChanges, isFirstChange);
  }

  // spike todo: verify we don't do it too often due to fresh objects in [outputs]
  private bindOutputs() {
    this._disconnectOutputs();

    const compInst = this._componentInst;
    let outputs = this._outputs;

    if (!outputs || !compInst) {
      return;
    }

    outputs = this._resolveOutputs(outputs);

    Object.keys(outputs)
      .filter(p => compInst[p])
      .forEach(p =>
        compInst[p]
          .pipe(takeUntil(this._outputsShouldDisconnect$))
          .subscribe(event => {
            //spike todo FIXED
            // Mark component for check to re-render with new inputs
            if (this._compCdr) {
              this._compCdr.markForCheck();
            }
            //spike todo FIXED end

            outputs[p](event);
          })
      );
  }

  private notifyOnInputChanges(
    changes: SimpleChanges = {},
    forceFirstChanges: boolean
  ) {
    // Exit early if component not interested to receive changes
    if (!this._componentInst.ngOnChanges) {
      return;
    }

    if (forceFirstChanges) {
      changes = this._collectFirstChanges();
    }

    // spike todo: check if we should run ngOnChanges also when there are no changes in the inputs

    this._componentInst.ngOnChanges(changes);
  }

  private _disconnectOutputs() {
    this._outputsShouldDisconnect$.next();
  }

  private _getInputsChanges(inputs: any): KeyValueChangesAny {
    return this._inputsDiffer.diff(inputs);
  }

  private _updateInputChanges(differ: KeyValueChangesAny) {
    this._lastInputChanges = this._collectChangesFromDiffer(differ);
  }

  private _collectFirstChanges(): SimpleChanges {
    const changes = {} as SimpleChanges;
    const inputs = this._inputs;

    Object.keys(inputs).forEach(
      prop => (changes[prop] = createNewChange(inputs[prop]))
    );

    return this._resolveChanges(changes);
  }

  private _collectChangesFromDiffer(differ: KeyValueChangesAny): SimpleChanges {
    const changes = {} as SimpleChanges;

    differ.forEachAddedItem(recordToChanges(changes));
    differ.forEachItem(recordToNewChanges(changes));

    return this._resolveChanges(changes);
  }

  private _resolveCompFactory(): ComponentFactory<any> | null {
    try {
      try {
        return this._cfr.resolveComponentFactory(this._compRef.componentType);
      } catch (e) {
        // Fallback if componentType does not exist (happens on NgComponentOutlet)
        return this._cfr.resolveComponentFactory(
          this._compRef.instance.constructor
        );
      }
    } catch (e) {
      // Factory not available - bailout
      return null;
    }
  }

  private _updateCompFactory() {
    this._compFactory = this._resolveCompFactory();
  }

  private _resolveInputs(inputs: any): any {
    if (!this._compFactory) {
      return inputs;
    }

    return this._remapIO(inputs, this._compFactory.inputs);
  }

  private _resolveOutputs(outputs: any): any {
    if (!this._compFactory) {
      return outputs;
    }

    return this._remapIO(outputs, this._compFactory.outputs);
  }

  private _resolveChanges(changes: SimpleChanges): SimpleChanges {
    if (!this._compFactory) {
      return changes;
    }

    return this._remapIO(changes, this._compFactory.inputs);
  }

  private _remapIO(io: any, mapping: IOMappingList): any {
    const newIO = {};

    Object.keys(io).forEach(key => {
      const newKey = this._findPropByTplInMapping(key, mapping) || key;
      newIO[newKey] = io[key];
    });

    return newIO;
  }

  private _findPropByTplInMapping(
    tplName: string,
    mapping: IOMappingList
  ): string | null {
    for (const map of mapping) {
      if (map.templateName === tplName) {
        return map.propName;
      }
    }
    return null;
  }

  private failInit() {
    throw Error(
      'IoService: ComponentInjector was not set! Please call init() method!'
    );
  }
}
