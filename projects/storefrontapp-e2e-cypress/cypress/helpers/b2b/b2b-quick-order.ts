import { tabbingOrderConfig as config } from '../accessibility/b2b/tabbing-order.config';
import * as sampleData from '../../sample-data/b2b-saved-cart';
import { SampleProduct } from '../../sample-data/checkout-flow';
import { verifyTabbingOrder as tabbingOrder } from '../accessibility/tabbing-order';
import { waitForPage } from '../checkout-flow';

export function verifyCartPageTabbingOrder() {
  addProductToCart(sampleData.products[0], 1);

  cy.get(
    'cx-cart-item-list cx-item-counter input[type=number]:not([disabled])'
  ); // wait until counter is accessible

  tabbingOrder('cx-page-layout.CartPageTemplate', config.cart);
}

export function verifyListingTabbingOrder() {
  // page rendering
  cy.wait(1000);
  tabbingOrder('cx-page-layout.AccountPageTemplate', config.quickOrderListing);
}

export function visitCartPage() {
  const alias = waitForPage('/cart', 'cartPage');

  cy.visit(`/cart`);
  cy.wait(`@${alias}`).its('status').should('eq', 200);
}

export function visitQuickOrderListingPage() {
  const quickOrderListingPageAlias = waitForPage(
    '/my-account/quick-order',
    'quickOrder'
  );

  cy.visit(`/my-account/quick-order`);
  cy.wait(`@${quickOrderListingPageAlias}`).its('status').should('eq', 200);
}

export function addProductToCart(product: SampleProduct, quantity: number) {
  const alis = waitForPage(`code=${product.code}`, 'getProductPage');

  cy.visit(`/product/${product.code}`);

  cy.wait(`@${alis}`).its('status').should('eq', 200);

  cy.get('cx-item-counter input').type(`{selectall}${quantity.toString()}`);
  cy.get('cx-add-to-cart')
    .findByText(/Add To Cart/i)
    .click();
  cy.get('cx-added-to-cart-dialog').within(() => {
    cy.get('.cx-name .cx-link').should('contain', product.name);
    cy.findByText(/view cart/i).click();
  });
}
