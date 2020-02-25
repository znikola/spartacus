import { Component } from '@angular/core';
import { CartEvents, CmsEvents, EventService } from '@spartacus/core';
import { ClickEvent } from './ui';

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
  constructor(eventService: EventService) {
    // dispatch any of these events using a single API
    const spike$ = eventService.get([
      CmsEvents.PageLoadSuccess,
      CartEvents.CartAddEntrySuccess,
      CartEvents.CreateCartSuccess,
      ClickEvent,
    ]);
    spike$.subscribe(console.log);
    console.log('subscribed');
  }
}
