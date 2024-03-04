describe('Event Page', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000/event'); // Adjust the URL if needed
    });
  
    it('displays the Event page content', () => {
      cy.get('.text-2xl').should('exist');
      cy.get('.text-2xl').should('have.text', 'Add /number on link and see how dynamic routes works! For Example /event/23');
      cy.get('.text-blue-600').should('exist');
      cy.get('.text-blue-600').should('have.text', '/event/23');
    });
  });
  