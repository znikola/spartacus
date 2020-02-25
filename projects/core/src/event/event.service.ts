import { Inject, Injectable, Type } from '@angular/core';
import { BehaviorSubject, merge, Observable } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import { EventSource, EVENT_SOURCES } from './event-sources';

/**
 * The object holds an array of sources.
 * There are no more properties in this object for now
 * but that could change over time.
 */
export interface EventMeta<T> {
  sources: BehaviorSubject<Observable<T>[]>;
}

/**
 * A service to attach and observe event sources. Events are driven by EventTypes, which are class signatures
 * for the given event.
 *
 * It is possible to attach multiple sources to a single event, even without
 * knowing as multiple decoupled features can attach sources to the same
 * event type.
 */
@Injectable({
  providedIn: 'root',
})
export class EventService {
  /**
   * The various events' meta are collected in a map, stored by
   * the event type class.
   */
  private events = new Map<Type<any>, EventMeta<any>>();

  constructor(@Inject(EVENT_SOURCES) sourcesChunks: EventSource<any>[][]) {
    this.attachInjectedSources(sourcesChunks);
  }

  /**
   * Attaches all provided event sources
   * @param sourcesChunks chunks of event source tuples
   */
  protected attachInjectedSources(sourcesChunks: EventSource<any>[][]) {
    sourcesChunks.forEach(sources => {
      sources.forEach(source => {
        const eventType: Type<any> = source[0];
        const source$: Observable<any> = source[1];
        this.attach(eventType, source$);
      });
    });
  }

  /**
   * Attach an event source for the given Event Type.
   *
   * @param eventType the event type
   * @param source an observable that represents the source
   */
  attach<T>(eventType: Type<T>, source: Observable<T>): void {
    const event = this.getEventMeta(eventType);
    const sources: Observable<T>[] = event.sources.value;
    sources.push(source);
    event.sources.next(sources);
  }

  /**
   * Returns an observable with merged all sources of the given event type.
   * When an array of event types is passed, then all their sources are merged into the result observable.
   * @param eventTypes
   */

  get<T1, T2>(eventTypes: [Type<T1>, Type<T2>]): Observable<T1 | T2>;
  get<T1, T2, T3>(
    eventTypes: [Type<T1>, Type<T2>, Type<T3>]
  ): Observable<T1 | T2 | T3>;
  get<T1, T2, T3, T4>(
    eventTypes: [Type<T1>, Type<T2>, Type<T3>, Type<T4>]
  ): Observable<T1 | T2 | T3 | T4>;
  get<T1, T2, T3, T4, T5>(
    eventTypes: [Type<T1>, Type<T2>, Type<T3>, Type<T4>, Type<T5>]
  ): Observable<T1 | T2 | T3 | T4 | T5>;
  get<T1, T2, T3, T4, T5, T6>(
    eventTypes: [Type<T1>, Type<T2>, Type<T3>, Type<T4>, Type<T5>, Type<T6>]
  ): Observable<T1 | T2 | T3 | T4 | T5 | T6>;
  get<T>(eventTypes: Type<T> | Type<any>[]): Observable<T>;

  get<T>(eventTypes: Type<T> | Type<any>[]): Observable<T> {
    eventTypes = [].concat(eventTypes);
    return merge(
      ...eventTypes.map(eventType => this.getMergedSources(eventType))
    );
  }

  /**
   * Returns an observable which is a merge of all sources of the given event type
   * @param eventType
   */
  private getMergedSources<T>(eventType: Type<T>): Observable<T> {
    return this.getEventMeta(eventType).sources.pipe(
      mergeMap((sources: Observable<T>[]) => merge(...sources))
    );
  }

  /**
   * Helper method to get the `EventSource` for the given event type.
   *
   * @param eventType the event type
   */
  private getEventMeta<T>(eventType: Type<T>): EventMeta<T> {
    if (!this.events.get(eventType)) {
      this.events.set(eventType, {
        sources: new BehaviorSubject([]),
      });
    }
    return this.events.get(eventType);
  }
}
