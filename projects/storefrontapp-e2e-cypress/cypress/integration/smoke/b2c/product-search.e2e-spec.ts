import { isMobile } from '../../../sample-data/viewports';
import { productSearchTest } from '../../regression/commons/product-search/product-search.e2e';

context('Product search', () => {
  before(() => {
    cy.fixture('b2c/product-search/product-search.json').then(
      (data) => (this.data = data)
    );
    cy.visit('/');
    cy.get('cx-searchbox input').type('camera{enter}');
  });

  it('test1', () => {
    console.log('okay', this.data);
  });

  describe('why', () => {
    it('test2', () => {
      console.log('this.data', this.data);
    });
  });
  //test3
  productSearchTest(this.data, !isMobile);
});
