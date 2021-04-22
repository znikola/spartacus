import { NgModule } from '@angular/core';
import { UserConsentConnector } from './connectors/user-consent.connector';

@NgModule({
  providers: [UserConsentConnector],
})
export class UserConsentCoreModule {}
