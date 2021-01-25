context('Homepage', () => {
  beforeEach(() => {
    cy.visit('https://electronics.spartacus-dev2.eastus.cloudapp.azure.com:9002/yacceleratorstorefront/electronics/en/');
  });

  it('should display title', () => {
      cy.title().should('not.be.empty');
    });

  /* === Test Created with Cypress Studio === */
  it('should register new user', function() {
    /* ==== Generated with Cypress Studio ==== */
    cy.get('.consent-accept').click();
    cy.get('.js-cookie-notification-accept').click();
    cy.get('.col-sm-2 > .btn > .glyphicon').click();
    cy.get('.userSign').click();
    cy.get('#register\\.title').select('mr');
    cy.get('#register\\.firstName').click();
    cy.get('#register\\.firstName').type('John');
    cy.get('#register\\.lastName').type('Doe');
    cy.get('#register\\.email').click();
    cy.get('#register\\.email').type('john1.doe@acme.com');
    cy.get('#password').type('1qazXSW@');
    cy.get('#register\\.checkPwd').click();
    cy.get('#register\\.checkPwd').type('1qazXSW@');
    cy.get('#consentForm\\.consentGiven1').check();
    cy.get('#registerChkTermsConditions').check();
    cy.get('.form-actions > .btn').click();
    /* ==== End Cypress Studio ==== */
  });
});