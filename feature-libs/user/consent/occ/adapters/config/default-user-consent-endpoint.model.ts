import { OccConfig } from '@spartacus/core';

export const defaultOccUserConsentConfig: OccConfig = {
  backend: {
    occ: {
      endpoints: {
        consentTemplates: 'users/${userId}/consenttemplates',
        consents: 'users/${userId}/consents',
        consentDetail: 'users/${userId}/consents/${consentId}',
      },
    },
  },
};
