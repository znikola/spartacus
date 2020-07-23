import {
  assertNumberOfProducts,
  clearSelectedFacet,
  clickFacet,
  clickSearchIcon,
  createProductFacetQuery,
  createProductQuery,
} from '../../../../helpers/commons/product-search/product-search';
import {
  CATEGORY_NAMES,
  PRODUCT_LISTING,
  SEARCH_QUERY_ALIAS,
} from '../../../../helpers/constants/index';
import { isMobile } from '../../../../sample-data/viewports';

context('Product search product type flow', () => {
  before(() => {
    cy.window().then((win) => win.sessionStorage.clear());
    cy.visit('/');
  });

  describe('Product search', () => {
    it('should be able to search with specific product type', () => {
      cy.server();

      createProductQuery(
        SEARCH_QUERY_ALIAS.SONY,
        CATEGORY_NAMES.SONY,
        PRODUCT_LISTING.PRODUCTS_PER_PAGE
      );
      createProductFacetQuery(
        'brand',
        CATEGORY_NAMES.SONY,
        SEARCH_QUERY_ALIAS.BRAND_PAGE
      );
      createProductQuery(
        SEARCH_QUERY_ALIAS.SONY_CLEAR_FACET,
        `${CATEGORY_NAMES.SONY}:relevance`,
        PRODUCT_LISTING.PRODUCTS_PER_PAGE
      );
      createProductFacetQuery(
        'price',
        CATEGORY_NAMES.SONY,
        SEARCH_QUERY_ALIAS.PRICE_DSC_FILTER
      );
      createProductFacetQuery(
        'category',
        CATEGORY_NAMES.SONY,
        SEARCH_QUERY_ALIAS.CATEGORY_FILTER
      );
      createProductFacetQuery(
        'Colour',
        CATEGORY_NAMES.SONY,
        SEARCH_QUERY_ALIAS.COLOR_FILTER
      );

      clickSearchIcon();

      cy.get('cx-searchbox input[aria-label="search"]').type(
        `${CATEGORY_NAMES.SONY}{enter}`
      );

      cy.wait(`@${SEARCH_QUERY_ALIAS.SONY}`).its('status').should('eq', 200);

      assertNumberOfProducts(
        `@${SEARCH_QUERY_ALIAS.SONY}`,
        `"${CATEGORY_NAMES.SONY}"`
      );

      // Filter by brand
      clickFacet('Brand', !isMobile);

      cy.wait(`@${SEARCH_QUERY_ALIAS.BRAND_PAGE}`)
        .its('status')
        .should('eq', 200);

      assertNumberOfProducts(
        `@${SEARCH_QUERY_ALIAS.BRAND_PAGE}`,
        `"${CATEGORY_NAMES.SONY}"`
      );

      clearSelectedFacet();

      cy.wait(`@${SEARCH_QUERY_ALIAS.SONY_CLEAR_FACET}`)
        .its('status')
        .should('eq', 200);

      assertNumberOfProducts(
        `@${SEARCH_QUERY_ALIAS.SONY}`,
        `"${CATEGORY_NAMES.SONY}"`
      );

      // Filter by price
      clickFacet('Price', !isMobile);

      cy.wait(`@${SEARCH_QUERY_ALIAS.PRICE_DSC_FILTER}`)
        .its('status')
        .should('eq', 200);

      assertNumberOfProducts(
        `@${SEARCH_QUERY_ALIAS.PRICE_DSC_FILTER}`,
        `"${CATEGORY_NAMES.SONY}"`
      );

      clearSelectedFacet();

      cy.wait(`@${SEARCH_QUERY_ALIAS.SONY_CLEAR_FACET}`)
        .its('status')
        .should('eq', 200);

      assertNumberOfProducts(
        `@${SEARCH_QUERY_ALIAS.SONY_CLEAR_FACET}`,
        `"${CATEGORY_NAMES.SONY}"`
      );

      // Filter by category
      clickFacet('Category', !isMobile);

      cy.wait(`@${SEARCH_QUERY_ALIAS.CATEGORY_FILTER}`)
        .its('status')
        .should('eq', 200);

      assertNumberOfProducts(
        `@${SEARCH_QUERY_ALIAS.CATEGORY_FILTER}`,
        `"${CATEGORY_NAMES.SONY}"`
      );

      clearSelectedFacet();

      cy.wait(`@${SEARCH_QUERY_ALIAS.SONY_CLEAR_FACET}`)
        .its('status')
        .should('eq', 200);

      assertNumberOfProducts(
        `@${SEARCH_QUERY_ALIAS.SONY_CLEAR_FACET}`,
        `"${CATEGORY_NAMES.SONY}"`
      );

      clickFacet('Color', !isMobile);

      cy.wait(`@${SEARCH_QUERY_ALIAS.COLOR_FILTER}`)
        .its('status')
        .should('eq', 200);

      assertNumberOfProducts(
        `@${SEARCH_QUERY_ALIAS.COLOR_FILTER}`,
        `"${CATEGORY_NAMES.SONY}"`
      );

      clearSelectedFacet();

      cy.wait(`@${SEARCH_QUERY_ALIAS.SONY_CLEAR_FACET}`)
        .its('status')
        .should('eq', 200);

      assertNumberOfProducts(
        `@${SEARCH_QUERY_ALIAS.SONY_CLEAR_FACET}`,
        `"${CATEGORY_NAMES.SONY}"`
      );
    });
  });
});
