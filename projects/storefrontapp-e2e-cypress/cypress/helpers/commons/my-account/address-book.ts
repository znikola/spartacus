import {
  ADDRESS_BOOK_FORM_SELECTOR,
  EDITED_ADDRESS_DATA,
  FULL_NAME_FROM_EDITED_ADDRESS,
  FULL_NAME_FROM_SECOND_ADDRESS,
  NEW_SECOND_ADDRESS_DATA,
} from '../../constants/index';
import { AddressData, fillShippingAddress } from '../checkout/checkout-forms';
import * as alerts from '../global-message';

export function checkAddressForm() {
  cy.get(ADDRESS_BOOK_FORM_SELECTOR).should('exist');
}

export const assertAddressForm = (
  address: AddressData,
  state?: string
): void => {
  state = state ? state : 'CA-QC';
  cy.get('cx-card .card-header').contains('✓ DEFAULT');
  cy.get('cx-card .card-body').within(() => {
    cy.get('.cx-card-label-bold').should(
      'contain',
      `${address.firstName} ${address.lastName}`
    );
    cy.get('.cx-card-label').eq(0).should('contain', address.address.line1);
    cy.get('.cx-card-label').eq(1).should('contain', address.address.line2);
    cy.get('.cx-card-label')
      .eq(2)
      .should('contain', `${address.address.city}, ${state}`);
    cy.get('.cx-card-label').eq(3).should('contain', address.address.postal);
    cy.get('.cx-card-label').eq(4).should('contain', address.phone);
  });
};

export function editAddress(
  editAddressData: AddressData = EDITED_ADDRESS_DATA
) {
  cy.get('a').contains('Edit').click();
  cy.get(ADDRESS_BOOK_FORM_SELECTOR).within(() => {
    cy.get('[formcontrolname="titleCode"]').ngSelect('Mr.');
    cy.get('[formcontrolname="firstName"]')
      .clear()
      .type(editAddressData.firstName);
    cy.get('[formcontrolname="lastName"]')
      .clear()
      .type(editAddressData.lastName);
    cy.get('[formcontrolname="phone"]').clear().type(editAddressData.phone);

    cy.get('button.btn-primary').click();
  });
}

export function addSecondAddress(
  secondAddress: AddressData = NEW_SECOND_ADDRESS_DATA
) {
  cy.get('button').contains(' Add new address ').click({ force: true });
  fillShippingAddress(secondAddress);
  cy.get('cx-card').should('have.length', 2);
}

export function setSecondAddressToDefault(
  fullName: string = FULL_NAME_FROM_SECOND_ADDRESS
) {
  cy.get('a').contains('Set as default').click();

  const firstCard = cy.get('cx-card').first();
  firstCard.should('contain', '✓ DEFAULT');
  firstCard.should('contain', fullName);
}

export function deleteFirstAddress() {
  cy.server();
  cy.route(
    'DELETE',
    `${Cypress.env('OCC_PREFIX')}/${Cypress.env(
      'BASE_SITE'
    )}/users/*/addresses/*?lang=en&curr=USD`
  ).as('deleteAddress');
  cy.route(
    `${Cypress.env('OCC_PREFIX')}/${Cypress.env(
      'BASE_SITE'
    )}/users/*/addresses?lang=en&curr=USD`
  ).as('fetchAddresses');

  const firstCard = cy.get('cx-card').first();
  firstCard.contains('Delete').click();
  cy.get('.cx-card-delete button.btn-primary').click();
  cy.wait('@deleteAddress').its('status').should('eq', 200);
  cy.wait('@fetchAddresses').its('status').should('eq', 200);
}

export function deleteExistingAddress(
  secondAddress: string = FULL_NAME_FROM_EDITED_ADDRESS
) {
  const firstCard = cy.get('cx-card').first();

  firstCard.within(() => {
    cy.get('a').contains('Delete').click();
  });

  cy.get('.cx-card-delete-msg').should(
    'contain',
    'Are you sure you want to delete this address?'
  );

  // click cancel
  cy.get('.btn-secondary').should('contain', 'Cancel');
  cy.get('.btn-secondary').click();
  cy.get('.cx-card-delete-msg').should(
    'not.contain',
    'Are you sure you want to delete this address?'
  );

  // click delete
  deleteFirstAddress();
  alerts.getSuccessAlert().contains('Address deleted successfully!');

  cy.get('cx-card').should('have.length', 1);

  // verify remaining address is now the default one
  const defaultCard = cy.get('cx-card').first();
  defaultCard.should('contain', '✓ DEFAULT');
  defaultCard.should('contain', secondAddress);
}
