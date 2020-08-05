import {
  addMutipleProductWithoutVariantToCart,
  addVariantOfSameProductToCart,
  configureProductWithVariants,
  visitProductWithoutVariantPage,
} from '../../../helpers/apparel/apparel-checkout-flow';
import * as checkout from '../../../helpers/checkout-flow';
import { variantUser } from '../../../sample-data/apparel-checkout-flow';

context('Apparel - checkout flow', () => {
  before(() => {
    cy.fixture('b2b/apparel-checkout.json').then((data) => {
      this.data = data;

      cy.window().then((win) => win.sessionStorage.clear());
      Cypress.env('BASE_SITE', this.data.siteContext.baseSite);
    });
  });

  beforeEach(() => {
    configureProductWithVariants();
    cy.restoreLocalStorage();
  });

  afterEach(() => {
    cy.saveLocalStorage();
  });

  describe('when adding a single variant product to cart and completing checkout.', () => {
    it('should register successfully', () => {
      checkout.visitHomePage();
      checkout.registerUser(false, variantUser);
    });

    it('should go to product page add the variant style of the product from category page', () => {
      checkout.goToCheapProductDetailsPage(this.data.products[0]);
      addVariantOfSameProductToCart();
    });

    it('should visit the product without variant page', () => {
      visitProductWithoutVariantPage();
      addMutipleProductWithoutVariantToCart();
    });

    it('should go to product page, and add product to cart from category page and proceed to checkout', () => {
      checkout.goToCheapProductDetailsPage(this.data.products[0]);
      checkout.addCheapProductToCartAndLogin(
        variantUser,
        this.data.products[0]
      );
    });

    it('should fill in address form', () => {
      checkout.fillAddressFormWithCheapProduct(
        variantUser,
        this.data.cart.total
      );
    });

    it('should choose delivery', () => {
      checkout.verifyDeliveryMethod(this.data.deliveryMode.standard);
    });

    it('should fill in payment form', () => {
      checkout.fillPaymentFormWithCheapProduct(
        variantUser,
        this.data.cart.total
      );
    });

    it('should review and place order', () => {
      checkout.placeOrderWithCheapProduct(
        variantUser,
        this.data.cart.total,
        this.data.siteContext.currency
      );
    });

    it('should display summary page', () => {
      checkout.verifyOrderConfirmationPageWithCheapProduct(
        variantUser,
        this.data.products[0],
        this.data.cart.total,
        true
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
    });

    after(() => {
      checkout.signOut();
    });
  });
});
