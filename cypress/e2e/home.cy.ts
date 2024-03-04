describe('Home Page', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000');
    });
  
    it('displays the Home page content', () => {
  
      cy.get('img').should('exist');
  
      cy.get('img').should('have.attr', 'alt', 'hero image');
  
      cy.get('img').should('have.attr', 'width', '500');
      cy.get('img').should('have.attr', 'height', '250');
  
      cy.contains('Welcome to My Next.JS Mini Project!').should('exist');
 
      cy.contains("This is my Home Page, let's see another routes!").should('exist');
    });
  });
  