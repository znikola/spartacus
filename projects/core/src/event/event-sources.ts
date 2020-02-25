import { InjectionToken, Type } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseEvent } from './event-type';

export type EventSource<T extends BaseEvent> = [Type<T>, Observable<T>];

export const EVENT_SOURCES = new InjectionToken<EventSource<any>>(
  'EVENT_SOURCES'
);
