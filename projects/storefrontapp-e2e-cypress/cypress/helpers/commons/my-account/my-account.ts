export function accessPageAsAnonymous(url: string) {
  cy.visit(url);
  cy.location('pathname').should('contain', '/login');
}
