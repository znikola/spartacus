import { InjectionToken, Type } from '@angular/core';
import { StateEvent } from './state-event.model';

export type ActionToEvent = [string, Type<StateEvent<any>>];

export const ACTION_TO_EVENT = new InjectionToken<ActionToEvent>(
  'ACTION_TO_EVENT'
);
