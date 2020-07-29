import * as productSearchFlow from '../../../../helpers/commons/product-search/product-search';
import { SEARCH_CAMERA } from '../../../../helpers/constants/index';

export function productSearchTest(data, isMobile) {
  describe('Search results', () => {
    it('should be able to search and get results', () => {
      console.log('why not', this.data);
      productSearchFlow.searchResult(SEARCH_CAMERA);
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
      productSearchFlow.filterUsingFacetFiltering(!isMobile, SEARCH_CAMERA);
    });

    it('should be able to clear active facet', () => {
      productSearchFlow.clearActiveFacet(SEARCH_CAMERA);
    });
  });

  describe('Sorting', () => {
    before(() => {
      cy.visit('/');
      cy.get('cx-searchbox input').type('camera{enter}');
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
