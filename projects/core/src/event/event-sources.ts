import { FactoryProvider, InjectionToken, Type } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseEvent } from './event-type';

// spike todo consider different name. But EventSource is a global one :/
export type CxEventSource<T extends BaseEvent> = {
  type: Type<T>;
  source$: Observable<T>;
};

export const EVENT_SOURCES = new InjectionToken<CxEventSource<any>>(
  'EVENT_SOURCES'
);

export function provideEventSources<T>(
  useFactory: (..._args: any[]) => CxEventSource<T>[],
  deps?: any[]
): FactoryProvider {
  return {
    provide: EVENT_SOURCES,
    multi: true,
    useFactory,
    deps,
  };
}
