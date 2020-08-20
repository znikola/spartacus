import {
  cartWithB2bProduct,
  POWERTOOLS_BASESITE,
  POWERTOOLS_DEFAULT_DELIVERY_MODE,
  products,
} from '../../../helpers/b2b/b2b';
import * as b2bCheckout from '../../../helpers/b2b/b2b-checkout';
import * as checkoutAsPersistantUser from '../../../helpers/checkout-as-persistent-user';
import * as checkout from '../../../helpers/checkout-flow';
import { b2bUser } from '../../../sample-data/b2b-user';
import { user } from '../../../sample-data/checkout-flow';
import { login, setSessionData } from '../../../support/utils/login';

context('B2B - Checkout flow', () => {
  before(() => {
    cy.window().then((win) => win.sessionStorage.clear());
    Cypress.env('BASE_SITE', POWERTOOLS_BASESITE);
  });

  beforeEach(() => {
    cy.restoreLocalStorage();
  });

  afterEach(() => {
    cy.saveLocalStorage();
  });

  it('should login to b2b user', () => {
    // TODO cleanup
    login(
      b2bUser.registrationData.email,
      b2bUser.registrationData.password
    ).then((res) => {
      if (res.status === 200) {
        // User is already registered - only set session in localStorage
        setSessionData({ ...res.body, userId: b2bUser.registrationData.email });
      }
    });
    cy.visit('/');
    cy.get('.cx-login-greet').should('contain', 'Mark Rivers');
  });

  it('should add a product to cart', () => {
    b2bCheckout.addB2bProductToCartAndCheckout();
  });

  it('should select Credit Card payment type', () => {
    b2bCheckout.enterPONumber();
    b2bCheckout.selectCreditCardPayment();
  });

  it('should enter shipping address', () => {
    checkout.fillAddressFormWithCheapProduct(user, cartWithB2bProduct);
  });

  it('should select delivery mode', () => {
    checkout.verifyDeliveryMethod(POWERTOOLS_DEFAULT_DELIVERY_MODE);
  });

  it('should enter payment method', () => {
    checkout.fillPaymentFormWithCheapProduct(
      user,
      undefined,
      cartWithB2bProduct
    );
  });

  it('should review and place order', () => {
    checkout.placeOrderWithCheapProduct(user, cartWithB2bProduct);
  });

  it('should display summary page', () => {
    checkout.verifyOrderConfirmationPageWithCheapProduct(
      user,
      products[0],
      cartWithB2bProduct,
      false
    );
  });

  it('should delete shipping address', () => {
    checkoutAsPersistantUser.deleteShippingAddress();
  });

  it('should delete payment card', () => {
    checkoutAsPersistantUser.deletePaymentCard();
  });
});
