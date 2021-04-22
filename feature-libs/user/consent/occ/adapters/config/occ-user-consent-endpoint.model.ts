import { OccEndpoint } from '@spartacus/core';

declare module '@spartacus/core' {
  interface OccEndpoints {
    /**
     * Endpoint for consent templates
     */
    consentTemplates?: string | OccEndpoint;
    /**
     * Endpoint for a user's consents
     */
    consents?: string | OccEndpoint;
    /**
     * Endpoint for a user's specific previously given consent.
     */
    consentDetail?: string | OccEndpoint;
  }
}
