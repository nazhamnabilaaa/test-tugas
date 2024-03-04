describe('About Page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/about'); // Adjust the URL if needed
  });

  it('displays the About page content', () => {
    cy.get('.font-bold').should('exist');
    cy.get('.font-bold').should('have.text', 'This is my About Page!');
    cy.get('.text-3xl').should('exist');
    cy.get('.w-screen').should('exist');
    cy.get('.text-center').should('exist');
  });
});
