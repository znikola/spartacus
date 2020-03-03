import { Component, Injector } from '@angular/core';
import { ActiveCartService, CartEvents, CmsEvents, EventService, MultiCartService } from '@spartacus/core';
import { RoutingEvents } from 'projects/core/src/routing/event/routing-event.model';
import { BehaviorSubject, combineLatest, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { AddedToCartContextAware } from './added-to-cart-context-aware';
import { ClickEvent } from './ui/model';

let i = 0;

export class SpikeEvent {
  i: number;

  constructor(inputI: number) {
    this.i = inputI ?? ++i;
  }
}

window['SpikeEvent'] = SpikeEvent;

window['x$'] = new Subject();
window['y$'] = new Subject();
window['z$'] = new BehaviorSubject(new SpikeEvent(1000));
window['q$'] = new BehaviorSubject(new SpikeEvent(2000));

window['trigger$'] = new Subject();


/**
 * This demo component adds a click event to the cx-storefront,
 * as well as subscribing to a couple of events.
 */
@Component({
  selector: 'cx-event-demo',
  template: `
    <div cxUiEvent="click">DEMO</div>
  `,
})
export class EventDemoComponent {
  constructor(
    protected eventService: EventService,
    protected injector: Injector
  ) {

    window['eventService'] = eventService;
    this.demo2();
    this.demo1();
  }

  demo2() {
    const disposeX = this.eventService.register(SpikeEvent, window['x$']);
    const spike$ = this.eventService.get(SpikeEvent);
    spike$.subscribe(x => console.log('SpikeEvent i =', x.i));
    console.log('subscribed', disposeX);

    const click$ = this.eventService.get(ClickEvent);
    const combined$ = combineLatest([click$, spike$]);
    combined$.subscribe(x => console.warn('Combined', x[0], x[1]));

    const combined2$ = combineLatest([combined$, window['trigger$']]);
    combined2$.subscribe(x => console.error('Combined', x[0][0], x[0][1], x[1]));
  }

  demo1() {
    // dispatch any of these events using a single API
    const activeCartService = this.injector.get(ActiveCartService);
    const cartEvents$ = activeCartService.getEvent([
      CartEvents.AddEntrySuccess,
      CartEvents.CreateSuccess,
    ]);
    cartEvents$.subscribe(e => console.log('cart event', e));
    console.log('subscribed');


    const spike$ = this.eventService.get([
      CmsEvents.PageLoadSuccess,
      ClickEvent,
      RoutingEvents.NavigationSuccess,
      RoutingEvents.NavigationCancel,
      RoutingEvents.Navigation,
    ]);
    spike$.subscribe(console.log);
    console.log('subscribed');

    const custom$ = this.eventService.get(AddedToCartContextAware);
    custom$.subscribe(console.log);
    console.log('subscribed custom');

    // idea for associating UI event with add to cart action

    // later on associate the added to cart success with the add to cart action
    // therefore we can associate the UI event with the added to cart event

    // const cmsPageLoadSuccess$ = this.eventService.get(
    //   CmsEvents.PageLoadSuccess
    // );
    // cmsPageLoadSuccess$.subscribe(console.warn);
    // console.log('subscribed cms page load success');

    /////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////
    // COLLECTOR
    const multiCartService = this.injector.get(MultiCartService);
    custom$
      .pipe(
        // mergeMap(event =>
        //   multiCartService.getCart(event.added.cartId).pipe(
        //     take(1), // CAUTION!!!
        //     map(cart => ({ ...event, cart }))
        //   )
        // )
        map(event => {
          let cart;
          multiCartService
            .getCart(event.added.cartId)
            .subscribe(c => (cart = c))
            .unsubscribe(); // synchronously take current value;
          return { ...event, cart };
        })
      )
      .subscribe(console.warn);
  }
}
