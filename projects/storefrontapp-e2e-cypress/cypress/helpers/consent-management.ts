import * as alerts from './commons/global-message';
import { BREADCRUMB_SELECTOR } from './constants/index';

export const CONSENT_MANAGEMENT_PAGE = '/my-account/consents';

export function accessPageAsAnonymous() {
  cy.visit(CONSENT_MANAGEMENT_PAGE);
  cy.location('pathname').should('contain', '/login');
}

export function verifyConsentManagementPage() {
  cy.get(BREADCRUMB_SELECTOR).within(() => {
    cy.get('h1').should('contain', 'Consent Management');
  });
}

export function giveConsent() {
  cy.get('input[type="checkbox"]').first().should('not.be.checked');
  cy.get('input[type="checkbox"]').first().check();
  cy.get('input[type="checkbox"]').first().should('be.checked');

  alerts.getSuccessAlert().should('contain', 'Consent successfully given');
}

export function withdrawConsent() {
  cy.get('input[type="checkbox"]').first().should('be.checked');
  cy.get('input[type="checkbox"]').first().uncheck();
  cy.get('input[type="checkbox"]').first().should('not.be.checked');

  alerts.getSuccessAlert().should('contain', 'Consent successfully withdrawn');
}

export function verifyAsAnonymous() {
  it('should redirect to login page for anonymous user', () => {
    accessPageAsAnonymous();
  });
}

export function consentManagementTest() {
  it('should be able to go to Consent Management Page', () => {
    verifyConsentManagementPage();
  });

  it('should successfully give a consent', () => {
    giveConsent();
  });

  it('should successfully withdraw a consent', () => {
    withdrawConsent();
  });
}
