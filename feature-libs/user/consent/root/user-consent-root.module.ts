import { NgModule } from '@angular/core';
import { USER_CONSENT_FEATURE } from './feature-name';

export function defaultUserConsentComponentsConfig() {
  const config = {
    featureModules: {
      [USER_CONSENT_FEATURE]: {},
    },
  };
  return config;
}

@NgModule({})
export class UserConsentModule {}
