import * as checkout from '../../../helpers/checkout-flow';
import { user } from '../../../sample-data/checkout-flow';

context('Checkout flow', () => {
  before(() => {
    cy.fixture('b2c/checkout.json').then((data) => {
      this.data = data;

      cy.window().then((win) => win.sessionStorage.clear());
      checkout.visitHomePage();
    });
  });

  it('should register successfully', () => {
    checkout.registerUser();
  });

  it('should go to product page from category page', () => {
    checkout.goToCheapProductDetailsPage(this.data.products[0]);
  });

  it('should add product to cart and go to checkout', () => {
    checkout.addCheapProductToCartAndLogin(user, this.data.products[0]);
  });

  it('should fill in address form', () => {
    checkout.fillAddressFormWithCheapProduct(user, this.data.cart.total);
  });

  it('should choose delivery', () => {
    checkout.verifyDeliveryMethod(this.data.deliveryMode.standard);
  });

  it('should fill in payment form', () => {
    checkout.fillPaymentFormWithCheapProduct(user, this.data.cart.total);
  });

  it('should review and place order', () => {
    checkout.placeOrderWithCheapProduct(
      user,
      this.data.cart.total,
      this.data.siteContext.currency
    );
  });

  it('should display summary page', () => {
    checkout.verifyOrderConfirmationPageWithCheapProduct(
      user,
      this.data.products[0],
      this.data.cart.total,
      false
    );
  });

  it('should be able to check order in order history', () => {
    // hack: visit other page to trigger store -> local storage sync
    cy.selectUserMenuOption({
      option: 'Personal Details',
    });
    cy.waitForOrderToBePlacedRequest(
      this.data.siteContext.baseSite,
      this.data.siteContext.currency
    );
    checkout.viewOrderHistoryWithCheapProduct(this.data.cart.total);
    checkout.signOut();
  });
});
