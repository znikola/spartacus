// https://spartacus-demo.eastus.cloudapp.azure.com:444/powertools-spa/en/USD/
context('Homepage', () => {
  beforeEach(() => {
    cy.visit('https://spartacus-demo.eastus.cloudapp.azure.com:444/powertools-spa/en/USD/');
  });

  it.skip('should display title', () => {
      cy.title().should('not.be.empty');
    });

  /* === Test Created with Cypress Studio === */
  it.skip('should checkout with account payment', function() {
    /* ==== Generated with Cypress Studio ==== */
    cy.get('.btn-primary').click();
    cy.get('cx-login > a').click();
    cy.get(':nth-child(1) > label > .form-control').click();
    cy.get(':nth-child(1) > label > .form-control').type('marie.dubois@rustic-hw.com');
    cy.get(':nth-child(2) > label > .form-control').type('pw4all');
    cy.get('form.ng-dirty > .btn').click();

    cy.get(':nth-child(1) > cx-carousel > .carousel-panel > .slides > .slide.active > :nth-child(1) > a > .is-initialized > img').click();
    cy.get('cx-item-counter > :nth-child(3)').click();
    cy.scrollTo('top');
    cy.wait(1000);

    cy.get('form.ng-valid > .btn').click();
    cy.get('.cx-dialog-buttons > .btn-primary').click();
    cy.get('cx-cart-totals > .btn').click();
    cy.get(':nth-child(3) > .cx-payment-type-label > .cx-payment-type').click();
    cy.get('#paymentType-ACCOUNT').check();

    cy.get('.form-control').click();
    cy.get('.form-control').type('777MI6');
    cy.get(':nth-child(2) > .btn').click();

    cy.get('.cx-card-link').click();
    cy.get(':nth-child(2) > .cx-btn').click();
    cy.get('#deliveryMode-premium-net').check();
    cy.get(':nth-child(2) > .btn').click();

    cy.get('label > .scaled-input').check();
    cy.get('.cx-place-order-form > .btn').click();

    cy.selectUserMenuOption({
        option: 'Sign Out',
      });
      cy.reload();

    //cy.get(':nth-child(8) > cx-generic-link > a').click();
    /* ==== End Cypress Studio ==== */
  });

  /* === Test Created with Cypress Studio === */
  it.skip('should login and logout', function() {
    /* ==== Generated with Cypress Studio ==== */
    cy.get('.btn-primary').click();
    cy.get('cx-login > a').click();
    cy.get(':nth-child(1) > label > .form-control').click();
    cy.get(':nth-child(1) > label > .form-control').type('marie.dubois@rustic-hw.com');
    cy.get(':nth-child(2) > label > .form-control').type('pw4all');
    cy.get('form.ng-dirty > .btn').click();
    cy.wait(1000);
    cy.reload();
    // cy.get(':nth-child(8) > cx-generic-link > a').click();
    cy.selectUserMenuOption({
        option: 'Sign Out',
      });
    /* ==== End Cypress Studio ==== */
  });

  /* === Test Created with Cypress Studio === */
  it('should checkout and replenish with credit card', function() {
    /* ==== Generated with Cypress Studio ==== */
    cy.get('.btn-primary').click();
    cy.get('input').click();
    cy.get('input').type('drill{enter}');
    cy.get('[href="/powertools-spa/en/USD/search/drill?query=drill:relevance:category:1360"] > :nth-child(1) > .count').click();
    cy.wait(1000);
    cy.get('[href="/powertools-spa/en/USD/search/drill?query=drill:relevance:category:1360:brand:brand_753"] > :nth-child(1) > .label').click();
    cy.wait(1000);
    cy.get(':nth-child(1) > :nth-child(1) > :nth-child(2) > .row > .col-md-4 > cx-add-to-cart > .ng-untouched > .btn').click();
    cy.wait(1000);
    cy.get('cx-item-counter > :nth-child(3)').click();
    cy.wait(1000);
    cy.get('.cx-dialog-buttons > .btn-primary').click();
    cy.wait(1000);
    cy.get('cx-item-counter > :nth-child(3)').click();
    cy.wait(1000);
    cy.get('cx-cart-totals > .btn').click();
    cy.wait(1000);
    cy.get(':nth-child(1) > label > .form-control').click();
    cy.wait(1000);
    cy.get(':nth-child(1) > label > .form-control').type('marie.dubois@rustic-hw.com');
    cy.get(':nth-child(2) > label > .form-control').type('pw4all');
    cy.get('form.ng-dirty > .btn').click();
    cy.wait(1000);
    //cy.get('.form-control').click({multiple: true});
    cy.get('.form-control').click();
    //cy.get('.form-control').type('54454');
    cy.get(':nth-child(2) > .btn').click();
    cy.wait(1000);
    cy.get('.country-select > .ng-select-container > .ng-arrow-wrapper').click();
    cy.wait(1000);
    cy.get('.country-select > .ng-select-container > .ng-value-container > .ng-input > input').click();
    cy.wait(1000);
    cy.get('#ae0ca5fbaa79-7').click();
    cy.wait(1000);
    cy.get('.country-select > .ng-select-container > .ng-value-container > .ng-input > input').click();
    cy.wait(1000);
    cy.get(':nth-child(2) > :nth-child(1) > label > .ng-select > .ng-select-container > .ng-value-container > .ng-input > input').click();
    cy.wait(1000);
    cy.get('#aed96d980f40-1').click();
    cy.wait(1000);
    cy.get(':nth-child(2) > :nth-child(1) > label > .ng-select > .ng-select-container > .ng-value-container > .ng-input > input').click();
    cy.wait(1000);
    cy.get(':nth-child(3) > label > .form-control').click();
    cy.wait(1000);
    cy.get(':nth-child(3) > label > .form-control').type('Jack');
    cy.wait(1000);
    cy.get(':nth-child(4) > label > .form-control').type('Daniels');
    cy.wait(1000);
    cy.get(':nth-child(5) > label > .form-control').type('100 <ain{backspace}{backspace}{backspace}{backspace}Main Street');
    cy.wait(1000);
    cy.get(':nth-child(6) > label > .form-control').type('Suite 4');
    cy.wait(1000);
    cy.get(':nth-child(1) > label > .form-control').type('London');
    cy.wait(1000);
    cy.get(':nth-child(2) > label > .form-control').type('H4D9P3');
    cy.wait(1000);
    cy.get('.region-select > .ng-select-container > .ng-arrow-wrapper').click();
    cy.wait(1000);
    cy.get('.region-select > .ng-select-container > .ng-value-container > .ng-input > input').click();
    cy.wait(1000);
    cy.get('#a8a79c5b7654-8').click();
    cy.wait(1000);
    cy.get('.region-select > .ng-select-container > .ng-value-container > .ng-input > input').click();
    cy.wait(1000);
    cy.get(':nth-child(8) > label > .form-control').click();
    cy.wait(1000);
    cy.get(':nth-child(8) > label > .form-control').type('555234222');
    cy.wait(1000);
    cy.get(':nth-child(2) > .btn').click();
    cy.wait(1000);
    cy.get('#deliveryMode-premium-net').check();
    cy.wait(1000);
    cy.get(':nth-child(2) > .btn').click();
    cy.wait(1000);
    cy.get('label > .ng-select > .ng-select-container > .ng-value-container > .ng-input > input').click();
    cy.wait(1000);
    cy.get('#a7e229d8583e-3').click();
    cy.wait(1000);
    cy.get('label > .ng-select > .ng-select-container > .ng-value-container > .ng-input > input').click();
    cy.wait(1000);
    cy.get('.col-md-12 > :nth-child(2) > label > .form-control').click();
    cy.wait(1000);
    cy.get('.col-md-12 > :nth-child(2) > label > .form-control').type('Johnny Depp');
    cy.wait(1000);
    cy.get(':nth-child(3) > label > .form-control').type('4111111111111111');
    cy.wait(1000);
    cy.get('.cx-payment-form-exp-date > :nth-child(1) > .ng-select > .ng-select-container > .ng-arrow-wrapper').click();
    cy.wait(1000);
    cy.get('.cx-payment-form-exp-date > :nth-child(1) > .ng-select > .ng-select-container > .ng-value-container > .ng-input > input').click();
    cy.wait(1000);
    cy.get('#abd2670c6373-5').click();
    cy.wait(1000);
    cy.get('.cx-payment-form-exp-date > :nth-child(1) > .ng-select > .ng-select-container > .ng-value-container > .ng-input > input').click();
    cy.wait(1000);
    cy.get(':nth-child(2) > .ng-select > .ng-select-container').click();
    cy.wait(1000);
    cy.get('.cx-payment-form-exp-date > :nth-child(1) > .ng-select > .ng-select-container > .ng-value-container > .ng-input > input').click();
    cy.wait(1000);
    cy.get('#a16f33fc87c7-3').click();
    cy.get('.cx-payment-form-exp-date > :nth-child(1) > .ng-select > .ng-select-container > .ng-value-container > .ng-input > input').click();
    cy.wait(1000);
    cy.get('#cVVNumber').click();
    cy.wait(1000);
    cy.get('#cVVNumber').type('456');
    cy.wait(1000);
    cy.get(':nth-child(5) > .form-check > label > .form-check-input').check();
    cy.wait(1000);
    cy.get(':nth-child(2) > .btn').click();
    cy.wait(1000);
    cy.get('label > .scaled-input').check();
    cy.wait(1000);
    cy.get('#orderType-SCHEDULE_REPLENISHMENT_ORDER').check();
    cy.wait(1000);
    cy.get('.cx-days > .form-control').select('7');
    cy.wait(1000);
    cy.get('.cx-month > .form-control').click();
    cy.wait(1000);
    cy.get('.cx-place-order-form > .btn').click();
    cy.wait(1000);
    cy.get(':nth-child(8) > cx-generic-link > a').click();
    cy.wait(1000);
    /* ==== End Cypress Studio ==== */
  });
});