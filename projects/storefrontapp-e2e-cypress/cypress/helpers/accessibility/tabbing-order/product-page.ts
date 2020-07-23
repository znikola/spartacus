import { BREADCRUMB_SELECTOR } from '../../constants/index';
import { testProductUrl, verifyTabbingOrder } from '../tabbing-order';
import { TabElement } from '../tabbing-order.model';

const containerSelector = '.ProductDetailsPageTemplate .Summary';

export function productPageTabbingOrder(config: TabElement[]) {
  cy.server();
  cy.visit(testProductUrl);

  cy.route(
    `${Cypress.env('OCC_PREFIX')}/${Cypress.env(
      'BASE_SITE'
    )}/products/779841/reviews*`
  ).as('reviews');

  cy.get(BREADCRUMB_SELECTOR).should('contain', 'Home');
  cy.get(BREADCRUMB_SELECTOR).should('contain', 'Film cameras');
  cy.get(BREADCRUMB_SELECTOR).should('contain', 'Kodak');

  // add product and force "minus" button to be active
  cy.get('cx-item-counter button').contains('+').click();

  cy.wait('@reviews');

  verifyTabbingOrder(containerSelector, config);
}
