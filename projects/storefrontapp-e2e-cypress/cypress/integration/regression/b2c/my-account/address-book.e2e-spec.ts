import { fillShippingAddress } from '../../../../helpers/commons/checkout/checkout-forms';
import {
  addSecondAddress,
  assertAddressForm,
  checkAddressForm,
  deleteExistingAddress,
  editAddress,
  setSecondAddressToDefault,
} from '../../../../helpers/commons/my-account/address-book';
import { accessPageAsAnonymous } from '../../../../helpers/commons/my-account/my-account';
import {
  ADDRESS_BOOK_LABEL,
  ADDRESS_BOOK_PAGE,
  EDITED_ADDRESS_DATA,
  FULL_NAME_FROM_EDITED_ADDRESS,
  FULL_NAME_FROM_SECOND_ADDRESS,
  HOMEPAGE,
  NEW_ADDRESS_DATA,
  NEW_SECOND_ADDRESS_DATA,
} from '../../../../helpers/constants/index';
import * as login from '../../../../helpers/login';

describe('My Account - Address Book', () => {
  before(() => {
    cy.window().then((win) => {
      win.sessionStorage.clear();
    });
  });

  describe('address book test for anonymous user', () => {
    it('should redirect to login page for anonymous user', () => {
      accessPageAsAnonymous(ADDRESS_BOOK_PAGE);
    });
  });

  describe('address book test for logged in user', () => {
    before(() => {
      cy.requireLoggedIn();
      cy.reload();
      cy.visit(HOMEPAGE);
      cy.selectUserMenuOption({
        option: ADDRESS_BOOK_LABEL,
      });
    });

    beforeEach(() => {
      cy.restoreLocalStorage();
    });

    it('should display a new address form when no address exists', () => {
      checkAddressForm();
    });

    it('should create a new address', () => {
      fillShippingAddress();
    });

    it('should display the newly added address card in the address book', () => {
      cy.get('cx-card').should('have.length', 1);
      assertAddressForm(NEW_ADDRESS_DATA);
    });

    it('should edit the existing address', () => {
      editAddress();
    });

    it('should display the edited address card in the address book', () => {
      cy.get('cx-card').should('have.length', 1);
      assertAddressForm(EDITED_ADDRESS_DATA);
    });

    it('should add a second address', () => {
      addSecondAddress(NEW_SECOND_ADDRESS_DATA);
    });

    it('should set the second address as the default one', () => {
      setSecondAddressToDefault(FULL_NAME_FROM_SECOND_ADDRESS);
    });

    it('should delete the existing address', () => {
      deleteExistingAddress(FULL_NAME_FROM_EDITED_ADDRESS);
    });

    afterEach(() => {
      cy.saveLocalStorage();
    });

    after(() => {
      login.signOutUser();
    });
  });
});
