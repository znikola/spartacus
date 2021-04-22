import { NgModule } from '@angular/core';
import { provideDefaultConfig } from '@spartacus/core';
import { UserConsentAdapter } from '@spartacus/user/consent/core';
import { defaultOccUserConsentConfig } from './adapters/config/default-user-consent-endpoint.model';
import { OccUserConsentAdapter } from './adapters/occ-user-consent.adapter';

@NgModule({
  providers: [
    provideDefaultConfig(defaultOccUserConsentConfig),
    { provide: UserConsentAdapter, useClass: OccUserConsentAdapter },
  ],
})
export class UserConsentOccModule {}
