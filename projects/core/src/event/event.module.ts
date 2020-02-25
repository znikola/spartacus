import { ModuleWithProviders, NgModule } from '@angular/core';
import { StateEventModule } from './state-event';

@NgModule({
  imports: [
    // import here core modules responsible for registering events sources of core features. i.e. routing events etc.
    StateEventModule.forRoot(), // events from ngrx actions
  ],
})
export class EventModule {
  static forRoot(): ModuleWithProviders<EventModule> {
    return {
      ngModule: EventModule,
    };
  }
}
