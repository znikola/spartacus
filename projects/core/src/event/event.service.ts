import { Injectable, isDevMode, Type } from '@angular/core';
import { BehaviorSubject, merge, Observable, Subject } from 'rxjs';
import { share, switchMap } from 'rxjs/operators';
import { BaseEvent } from './event-type';

/**
 * The object holds an array of sources.
 * There are no more properties in this object for now
 * but that could change over time.
 */
export interface EventMeta<T> {
  /**
   * Input subject used for dispatching occasional event (without registering a source)
   */
  inputSubject$: Subject<T>;

  /**
   * Observable with array of sources of the event
   */
  sources$: BehaviorSubject<Observable<T>[]>;

  /**
   * Output observable with merged all event sources
   */
  output$: Observable<T>;
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
   * The various events meta are collected in a map, stored by the event type class
   */
  protected eventsMeta = new Map<Type<any>, EventMeta<any>>();

  /**
   * Attach an event source for the given event type
   *
   * @param eventType the event type
   * @param source$ an observable that represents the source
   */
  register<T>(eventType: Type<T>, source$: Observable<T>): () => void {
    this.validateEventType(eventType);
    const event = this.getEventMeta(eventType);
    const sources: Observable<T>[] = event.sources$.value;
    event.sources$.next([...sources, source$]);

    return () => this.unregister(eventType, source$);
  }

  /**
   * Unregisters an event source for the given event type
   *
   * @param eventType the event type
   * @param source$ an observable that represents the source
   */
  protected unregister<T>(eventType: Type<T>, source$: Observable<T>): void {
    const event = this.getEventMeta(eventType);
    const newSources: Observable<T>[] = event.sources$.value.filter(
      s$ => s$ !== source$
    );
    event.sources$.next(newSources);
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
    if (Array.isArray(eventTypes)) {
      return merge(
        ...eventTypes.map(eventType => this.getEventMeta(eventType).output$)
      );
    }
    return this.getEventMeta(eventTypes).output$;
  }

  /**
   * Dispatches an event
   */
  dispatch(event: BaseEvent): void {
    const eventType = event.constructor as Type<any>; // SPIKE TODO CHECK IF IT WORKS
    return this.getEventMeta(eventType).inputSubject$.next(event);
  }

  /**
   * Returns the event meta object for the given event type
   */
  protected getEventMeta<T>(eventType: Type<T>): EventMeta<T> {
    if (!this.eventsMeta.get(eventType)) {
      this.createEventMeta(eventType);
    }
    return this.eventsMeta.get(eventType);
  }

  /**
   * Creates the event meta object for the given event type
   */
  protected createEventMeta<T>(eventType: Type<T>): void {
    const inputSubject$ = new Subject<T>();
    const sources$ = new BehaviorSubject<Observable<T>[]>([inputSubject$]);
    const output$ = this.createOutput(sources$);

    this.eventsMeta.set(eventType, {
      inputSubject$,
      sources$,
      output$,
    });
  }

  /**
   * Takes a reactive array of event sources and returns all sources merged as one observable.
   */
  protected createOutput<T>(sources$: EventMeta<T>['sources$']) : Observable<T> {
    return sources$.pipe(
      // We cannot use mergeMap, since it maintains the inner observables (which are potentially never closed)
      // which could cause memory leaks.
      switchMap((sources: Observable<T>[]) => merge(...sources)),
      share() // share the result observable to avoid executing the above logic for each subscriber
    );
  }

  /**
   * Checks if the event type is a valid type (is a class with constructor). Runs only in dev mode.
   */
  protected validateEventType<T>(eventType: Type<T>): void{
    if(isDevMode() && !eventType?.constructor) {
      throw new Error(`${eventType} is not a valid event type. Please provide an object constructor.`)
    }
  }
}
