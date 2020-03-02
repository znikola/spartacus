import { Injectable, Type } from '@angular/core';
import { ofType } from '@ngrx/effects';
import { ActionsSubject } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { StateEvent } from './state-event.model';

@Injectable({
  providedIn: 'root',
})
export class StateEventService {
  constructor(protected actionsSubject: ActionsSubject) {}

  getFromAction<T>(
    eventType: Type<StateEvent<T>>,
    actionType: string
  ): Observable<StateEvent<T>> {
    const result = this.actionsSubject
      .pipe(ofType(actionType))
      .pipe(
        map(
          (action: { type: string; payload: T }) =>
            new eventType({ state: action.payload })
        )
      );

    return result;
  }
}
