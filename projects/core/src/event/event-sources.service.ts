import { Inject, Injectable } from '@angular/core';
import { CxEventSource, EVENT_SOURCES } from './event-sources';
import { EventService } from './event.service';

/**
 * Service responsible for registering all multi-provided event sources
 */
@Injectable({
  providedIn: 'root',
})
export class EventSourcesService {
  constructor(
    @Inject(EVENT_SOURCES) sourcesChunks: CxEventSource<any>[][],
    protected eventService: EventService
  ) {
    this.registerInjectedSources(sourcesChunks);
  }

  /**
   * Attaches all provided event sources
   * @param sourcesChunks chunks of event source tuples
   */
  protected registerInjectedSources(sourcesChunks: CxEventSource<any>[][]) {
    sourcesChunks.forEach(sources => {
      sources.forEach(({ type, source$ }) => {
        this.eventService.register(type, source$);
      });
    });
  }
}
