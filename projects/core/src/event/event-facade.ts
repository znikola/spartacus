import { Type } from '@angular/core';
import { Observable } from 'rxjs';

export type EventGetter<T> = (events: Type<T> | Type<T>[]) => Observable<T>;

export interface EventFacade<T> {
  getEvent: EventGetter<T>;
}
