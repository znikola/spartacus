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

  fromAction<T>(
    eventType: Type<StateEvent<T>>,
    actionType: string
  ): Observable<StateEvent<T>> {
    const result = this.actionsSubject
      .pipe(ofType(actionType))
      .pipe(
        map((action: { type: string; payload: T }) =>
          this.createEvent(eventType, action)
        )
      );

    //spike todo remove:
    result['spike'] = actionType;
    return result;
  }

  protected createEvent<T>(
    eventType: Type<StateEvent<T>>,
    action: { type: string; payload: T }
  ): StateEvent<T> {
    const result = new eventType();
    result.state = action.payload;
    return result;
  }
}
