import { isDevMode, ModuleWithProviders, NgModule, Type } from '@angular/core';
import { CxEventSource, provideEventSources } from '../event-sources';
import { ActionToEvent, ACTION_TO_EVENT } from './action-to-event';
import { StateEvent } from './state-event.model';
import { StateEventService } from './state-event.service';

// private
export function validateMapping(
  actionType: string,
  eventType: Type<StateEvent<any>>
) {
  if (isDevMode()) {
    if (
      typeof actionType !== 'string' ||
      !(eventType.prototype instanceof StateEvent)
    ) {
      console.warn(
        'ACTION_TO_EVENT mapping invalid. Action type:',
        actionType,
        '. Event type: ',
        eventType
      );
    }
  }
}

// private
/**
 * Creates the event sources based on mappings from actions to events.
 */
export function eventSourcesFactory(
  stateEventService: StateEventService,
  mappingChunks: ActionToEvent<any>[][]
): CxEventSource<any>[] {
  const result: CxEventSource<any>[] = [];
  mappingChunks.forEach(mappingChunk =>
    mappingChunk.forEach(mapping => {
      result.push({
        type: mapping.event,
        source$: stateEventService.getFromAction(mapping),
      });
    })
  );
  return result;
}

@NgModule()
export class StateEventModule {
  static forRoot(): ModuleWithProviders<StateEventModule> {
    return {
      ngModule: StateEventModule,
      providers: [
        provideEventSources(eventSourcesFactory, [
          StateEventService,
          ACTION_TO_EVENT,
        ]),
      ],
    };
  }

  static fromActions(
    mappings: ActionToEvent<any>[]
  ): ModuleWithProviders<StateEventModule> {
    return {
      ngModule: StateEventModule,
      providers: [
        {
          provide: ACTION_TO_EVENT,
          multi: true,
          useValue: mappings,
        },
      ],
    };
  }
}
