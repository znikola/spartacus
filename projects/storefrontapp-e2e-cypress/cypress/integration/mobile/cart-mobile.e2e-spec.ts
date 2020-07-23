import * as cart from '../../helpers/cart';
import { visitHomePage } from '../../helpers/checkout-flow';
import { SEARCH_ICON_SELECTOR } from '../../helpers/constants/index';
import { formats } from '../../sample-data/viewports';

function clickSearchIcon() {
  cy.get(SEARCH_ICON_SELECTOR).click();
}

function clickHamburger() {
  cy.get('cx-hamburger-menu [aria-label="Menu"]').click();
}

describe(
  `${formats.mobile.width + 1}p resolution - Cart`,
  {
    viewportHeight: formats.mobile.width,
    viewportWidth: formats.mobile.height,
  },
  () => {
    before(() => {
      cy.window().then((win) => win.sessionStorage.clear());
      visitHomePage();
    });

    it('should add products to cart via search autocomplete', () => {
      cart.addProductToCartViaAutoComplete(true);
    });

    it('should add products to cart through search result page', () => {
      cy.server();
      cart.addProductToCartViaSearchPage(true);
    });

    it('should display empty cart if no items added and when items are removed', () => {
      cart.removeAllItemsFromCart();
    });

    it('should add product to cart as anonymous and merge when logged in', () => {
      cart.registerCreateCartRoute();
      cart.registerSaveCartRoute();
      cart.loginRegisteredUser();

      cart.addProductWhenLoggedIn(true);

      clickHamburger();
      cart.logOutAndNavigateToEmptyCart();

      clickSearchIcon();
      cart.addProductAsAnonymous();

      clickHamburger();
      cart.verifyMergedCartWhenLoggedIn();

      clickHamburger();
      cart.logOutAndEmptyCart();
    });

    it('should add product to cart and manipulate quantity', () => {
      clickSearchIcon();
      cart.manipulateCartQuantity();
    });

    it('should be unable to add out of stock products to cart', () => {
      clickSearchIcon();
      cart.outOfStock();
    });
  }
);
