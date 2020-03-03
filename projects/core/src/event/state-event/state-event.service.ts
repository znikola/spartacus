import { Injectable } from '@angular/core';
import { ofType } from '@ngrx/effects';
import { ActionsSubject } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ActionToEvent } from './action-to-event';
import { StateEvent } from './state-event.model';

@Injectable({
  providedIn: 'root',
})
export class StateEventService {
  constructor(protected actionsSubject: ActionsSubject) {}

  getFromAction<T>(mapping: ActionToEvent<T>): Observable<StateEvent<T>> {
    const result = this.actionsSubject
      .pipe(ofType(mapping.action))
      .pipe(
        map((action: { type: string; payload: T }) =>
          this.createEvent(action, mapping)
        )
      );
    return result;
  }

  /**
   * Creates an event instance from an action instance.
   * By default maps the action's property `payload` to the event's `state`.
   * But this can be customized with the optional mapping
   *
   * @param action instance of Action
   * @param mapping Action to Event mapping object
   */
  protected createEvent<T>(
    action: { type: string; payload: any },
    mapping: ActionToEvent<T>
  ): StateEvent<T> {
    if (mapping.factory) {
      return mapping.factory(action);
    }

    return new mapping.event(action.payload);
  }
}
