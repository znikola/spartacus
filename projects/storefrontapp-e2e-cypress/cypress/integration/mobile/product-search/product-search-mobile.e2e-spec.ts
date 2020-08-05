import * as productSearchFlow from '../../../helpers/commons/product-search/product-search';
import { formats, isMobile } from '../../../sample-data/viewports';

context(
  `${formats.mobile.width + 1}p resolution - Product search`,
  {
    viewportHeight: formats.mobile.width,
    viewportWidth: formats.mobile.height,
  },
  () => {
    before(() => {
      cy.fixture('b2c/product-search/product-search.json').then((data) => {
        this.data = data;
        cy.visit('/');
      });
    });

    describe('Search results', () => {
      it('should be able to search and get results', () => {
        productSearchFlow.clickSearchIcon();
        cy.get('cx-searchbox input[aria-label="search"]').type(
          `${this.data.searchQuery}{enter}`
        );
        productSearchFlow.searchResult(this.data.searchQuery);
      });
    });

    describe('Pagination', () => {
      it('should navigate to the next page and display results', () => {
        productSearchFlow.verifyNextPage(2);
      });

      it('should be able navigate to the specified page number and display results', () => {
        productSearchFlow.verifyChoosePage(3);
      });

      it('should navigate to the previous page and display results', () => {
        productSearchFlow.verifyPreviousPage(2);
      });
    });

    describe('product list view mode', () => {
      it('should be able to switch to grid mode', () => {
        productSearchFlow.viewMode();
      });
    });

    describe('Facets', () => {
      it('should filter results using facet filtering', () => {
        productSearchFlow.filterUsingFacetFiltering(
          isMobile,
          this.data.searchQuery
        );
      });

      it('should be able to clear active facet', () => {
        productSearchFlow.clearActiveFacet(this.data.searchQuery);
      });
    });

    describe('Sorting', () => {
      before(() => {
        cy.visit('/');
        productSearchFlow.clickSearchIcon();
        cy.get('cx-searchbox input[aria-label="search"]').type(
          `${this.data.searchQuery}{enter}`
        );
        productSearchFlow.searchResult(this.data.searchQuery);
      });

      beforeEach(() => {
        cy.server();
      });

      it('should be able to sort by lowest price', () => {
        productSearchFlow.sortByLowestPrice();
      });

      it('should be able to sort by highest price', () => {
        productSearchFlow.sortByHighestPrice();
      });

      it('should be able to sort by name ascending', () => {
        productSearchFlow.sortByNameAscending();
      });

      it('should be able to sort by name descending', () => {
        productSearchFlow.sortByNameDescending();
      });

      it('should be able to sort by relevance', () => {
        productSearchFlow.sortByRelevance();
      });

      it('should be able to sort by top rated', () => {
        productSearchFlow.sortByTopRated();
      });
    });
  }
);
