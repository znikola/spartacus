import { Inject, Injectable } from '@angular/core';
import {
  EventSourceMapping,
  EVENT_SOURCE_MAPPINGS,
} from './event-source-mapping';
import { EventService } from './event.service';

/**
 * Service responsible for registering all multi-provided event sources
 */
@Injectable({
  providedIn: 'root',
})
export class EventSourceMappingService {
  constructor(
    @Inject(EVENT_SOURCE_MAPPINGS) sourcesChunks: EventSourceMapping<any>[][],
    protected eventService: EventService
  ) {
    this.registerInjectedSources(sourcesChunks);
  }

  /**
   * Attaches all provided event sources
   * @param sourcesChunks chunks of event source tuples
   */
  protected registerInjectedSources(
    sourcesChunks: EventSourceMapping<any>[][]
  ) {
    sourcesChunks.forEach(sources => {
      sources.forEach(({ type, source$ }) => {
        this.eventService.register(type, source$);
      });
    });
  }
}
