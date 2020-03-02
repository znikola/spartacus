import { InjectionToken, Type } from '@angular/core';
import { StateEvent } from './state-event.model';

export interface ActionToEvent<T> {
  /**
   * Action type string
   */
  action: string;

  /**
   * Event class type (constructor)
   */
  event: Type<StateEvent<T>> | null;

  /**
   * Function mapping the instance of
   */
  factory?: (action: any) => StateEvent<T>;
}

export const ACTION_TO_EVENT = new InjectionToken<ActionToEvent<any>>(
  'ACTION_TO_EVENT'
);
