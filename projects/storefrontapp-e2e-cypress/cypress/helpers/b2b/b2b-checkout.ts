import { addCheapProductToCart, waitForPage } from '../checkout-flow';
import { poNumber, POWERTOOLS_BASESITE, products } from './b2b';

export function addB2bProductToCartAndCheckout() {
  cy.visit(`${POWERTOOLS_BASESITE}/en/USD/product/${products[0].code}`);
  cy.get('cx-product-intro').within(() => {
    cy.get('.code').should('contain', products[0].code);
  });
  cy.get('cx-breadcrumb').within(() => {
    cy.get('h1').should('contain', products[0].name);
  });

  addCheapProductToCart(products[0]);

  const paymentTypePage = waitForPage(
    '/checkout/payment-type',
    'getPaymentType'
  );
  cy.getByText(/proceed to checkout/i).click();
  cy.wait(`@${paymentTypePage}`).its('status').should('eq', 200);
}

export function enterPONumber() {
  cy.get('cx-payment-type .cx-payment-type-container').should(
    'contain',
    'Payment method'
  );
  cy.get('cx-payment-type').within(() => {
    cy.get('.form-control').clear().type(poNumber);
  });
}

export function selectCreditCardPayment() {
  cy.get('cx-payment-type').within(() => {
    cy.getByText('Credit Card').click({ force: true });
  });

  const shippingPage = waitForPage(
    '/checkout/shipping-address',
    'getShippingPage'
  );
  cy.get('button.btn-primary').click({ force: true });
  cy.wait(`@${shippingPage}`).its('status').should('eq', 200);
}
