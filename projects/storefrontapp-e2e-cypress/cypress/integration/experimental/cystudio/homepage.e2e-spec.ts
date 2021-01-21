context('Homepage', () => {
    beforeEach(() => {
      cy.visit('/');
    });
  
    it('should display title', () => {
      cy.title().should('not.be.empty');
    });
  
    it('should have site logo', () => {
      cy.get('cx-page-slot.SiteLogo').should('be.visible');
    });
  
    it('should have splash banner', () => {
      cy.get('cx-page-slot.Section1 cx-banner');
    });
  
    it('should have footer with footer navigation and notice', () => {
      cy.get('cx-page-slot.Footer').within(() => {
        cy.get('cx-navigation-ui > nav').should('have.length', 3);
        cy.get('h5').should('have.length', 3);
        cy.get('cx-generic-link').should('have.length', 8);
      });
      cy.get('cx-paragraph .cx-notice').should(
        'contain',
        'SAP SE or an SAP affiliate company. All rights reserved.'
      );
    });
  
    /* === Test Created with Cypress Studio === */
    it('should Allow Basic Search', function() {
      /* ==== Generated with Cypress Studio ==== */
      cy.get('.btn-primary').click();
      cy.get('input').click();
      cy.get('input').type('camera');
      cy.get('[href="/electronics-spa/en/USD/product/CONF_CAMERA_SL/Digital%20Camera"]').click();
      cy.wait(1000);
      /* ==== End Cypress Studio ==== */
    });
  
    /* === Test Created with Cypress Studio === */
    it('should display banner page', function() {
      cy.visit('/');
      /* ==== Generated with Cypress Studio ==== */
      cy.get('.btn-primary').click();
      cy.get('.Section1 > :nth-child(1) > cx-generic-link > a > .is-initialized > img').click();
      cy.wait(1000);
      /* ==== End Cypress Studio ==== */
    });
  
    /* === Test Created with Cypress Studio === */
    it('should display small banner page', function() {
      cy.visit('/');
      /* ==== Generated with Cypress Studio ==== */
      cy.get('.btn-primary').click();
      cy.get('.Section2A > :nth-child(1) > cx-generic-link > a > .is-initialized > img').click({multiple: true});
      cy.wait(1000);
      //cy.get('cx-generic-link > a > .is-initialized > img').click({multiple: true});
      /* ==== End Cypress Studio ==== */
      /* ==== Generated with Cypress Studio ==== */
      cy.get('cx-breadcrumb > nav > :nth-child(1) > a').click();
      /* ==== End Cypress Studio ==== */
    });
  
    /* === Test Created with Cypress Studio === */
    it('should link to store finder', function() {
      /* ==== Generated with Cypress Studio ==== */
      cy.get('.btn-primary').click();
      cy.get('.SiteLinks > :nth-child(1) > cx-generic-link > a').click();
      cy.get('.row > :nth-child(2) > .btn').click();
      cy.wait(1000);
      /* ==== End Cypress Studio ==== */
    });
  
    /* === Test Created with Cypress Studio === */
    it('should link to contact us page', function() {
      /* ==== Generated with Cypress Studio ==== */
      cy.get('.SiteLinks > :nth-child(2) > cx-generic-link > a').click();
      cy.wait(1000);
      /* ==== End Cypress Studio ==== */
    });
  
    /* === Test Created with Cypress Studio === */
    it('should link to help faq page', function() {
      /* ==== Generated with Cypress Studio ==== */
      cy.get('.SiteLinks > :nth-child(3) > cx-generic-link > a').click();
      cy.wait(1000);
      /* ==== End Cypress Studio ==== */
    });

    /* === Test Created with Cypress Studio === */
    it('should update product slider upon user action', function() {
      /* ==== Generated with Cypress Studio ==== */
      cy.get('.btn-primary').click();
      cy.get(':nth-child(1) > cx-carousel > .carousel-panel > .next > .cx-icon').click();
      cy.wait(1000); // added manually
      cy.get(':nth-child(1) > cx-carousel > .carousel-panel > .next > .cx-icon').click();
      cy.wait(1000);
      cy.get(':nth-child(1) > cx-carousel > .carousel-panel > .previous > .cx-icon').click();
      cy.wait(1000);
      cy.get(':nth-child(1) > cx-carousel > .indicators > [disabled=""] > .cx-icon').click();
      cy.wait(1000);
      cy.get(':nth-child(2) > cx-carousel > .carousel-panel > .next > .cx-icon').click();
      cy.wait(1000);
      cy.get(':nth-child(2) > cx-carousel > .carousel-panel > .previous').click();
      cy.wait(1000);
      cy.get(':nth-child(2) > cx-carousel > .indicators > [disabled=""] > .cx-icon').click();
      /* ==== End Cypress Studio ==== */
    });

    /* === Test Created with Cypress Studio === */
    it('should link footer to sap commerce cloud', function() {
        /* ==== Generated with Cypress Studio ==== */
        cy.get('.btn-primary').click();
        cy.get('cx-navigation-ui > :nth-child(1) > .wrapper > .childs > :nth-child(1) > cx-generic-link > a').click();
        /* ==== End Cypress Studio ==== */
      });    
  });
  