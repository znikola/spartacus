import { Type } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseEvent } from './event-type';

export type EventGetter<T> = (events: Type<T> | Type<T>[]) => Observable<T>;

export interface EventFacade<T extends BaseEvent> {
  getEvent: EventGetter<T>;
}
