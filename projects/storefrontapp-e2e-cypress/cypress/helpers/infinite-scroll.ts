import { clickFacet } from './commons/product-search/product-search';
import {
  PAGE_LINK_SELECTOR,
  PRODUCT_LISTING,
  ROUTE_SEARCH_URL_PREFIX,
  SORTING_OPTION_SELECTOR,
} from './constants/index';

const scrollDuration = 100;
const defaultNumberOfProducts = 10;
let defaultProductLimit = 10;

const defaultQueryName = `query_relevance`;
const defaultQueryAlias = `@${defaultQueryName}`;

const productScrollButtons = 'cx-product-scroll .btn-action';

const doubleButton = 'double';
const singleButton = 'single';

export function configScroll(
  active: boolean,
  productLimit: number,
  showMoreButton: boolean
) {
  cy.cxConfig({
    view: {
      infiniteScroll: {
        active,
        productLimit,
        showMoreButton,
      },
    },
  });
}

export function createDefaultQuery() {
  cy.route(
    'GET',
    `${ROUTE_SEARCH_URL_PREFIX}?fields=*&query=:relevance:allCategories:816*`
  ).as(defaultQueryName);
}

export function assertDefaultNumberOfProducts(view) {
  cy.get(`cx-product-${view}-item`).should(
    'have.length',
    defaultNumberOfProducts
  );
}

export function isPaginationNotVisible() {
  cy.get(PAGE_LINK_SELECTOR).should('not.exist');
}

export function isPaginationVisible() {
  cy.get(PAGE_LINK_SELECTOR).should('exist');
}

export function backToTopIsVisible(isShowMoreButton?: boolean) {
  if (isShowMoreButton) {
    cy.get(`.cx-${doubleButton}-btn-container`).should('be.visible');
  } else {
    cy.get(`.cx-${singleButton}-btn-container`).should('be.visible');
  }
}

export function verifyNumberOfProducts(numberOfProducts) {
  cy.get('cx-product-list-item').should('have.length', numberOfProducts);
}

export function backtoTopIsNotVisible() {
  cy.get(`.cx-${singleButton}-btn-container`).should('not.be.visible');
}

export function scrollToFooter(
  totalResults: number,
  isShowMoreButton?: boolean,
  productLimit?: number
) {
  if (productLimit) {
    defaultProductLimit = productLimit;
  }

  const iterations = Math.floor(totalResults / defaultProductLimit);

  let numberOfProducts = defaultNumberOfProducts;

  for (let i = 1; i < iterations; i++) {
    if (isShowMoreButton) {
      cy.get('div')
        .contains('SHOW MORE')
        .click({ force: true })
        .wait(defaultQueryAlias)
        .then(() => {
          numberOfProducts += defaultNumberOfProducts;
          verifyNumberOfProducts(numberOfProducts);

          cy.get(productScrollButtons).should('exist');
        });
    } else {
      cy.scrollTo('bottom', { easing: 'linear', duration: scrollDuration })
        .wait(defaultQueryAlias)
        .then(() => {
          numberOfProducts += defaultNumberOfProducts;
          verifyNumberOfProducts(numberOfProducts);

          if (!productLimit) {
            cy.get(productScrollButtons).should('not.contain', ' SHOW MORE ');
          } else {
            cy.get(productScrollButtons).should('exist');
          }
        });
    }
  }
}

export function verifySortingResetsList() {
  cy.get(SORTING_OPTION_SELECTOR).ngSelect(
    PRODUCT_LISTING.SORTING_TYPES.BY_TOP_RATED
  );

  cy.wait('@sortQuery').then(() => {
    assertDefaultNumberOfProducts('list');
  });
}

export function verifyFilterResetsList() {
  clickFacet('Brand', '');

  cy.wait('@gridQuery').then(() => {
    assertDefaultNumberOfProducts('list');
  });
}

export function verifyGridResetsList() {
  cy.get('cx-product-view > button.cx-product-grid:first').click({
    force: true,
  });

  cy.wait('@gridQuery').then(() => {
    assertDefaultNumberOfProducts('grid');
  });
}
