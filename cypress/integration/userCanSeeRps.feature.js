describe("User can see three options on the page", () => {
    beforeEach(() => {
      cy.visit('http://localhost:3001');
    })
  
    it('displays first option', () => {
      cy.get('#rockcontainer').within(() => {
        cy.get(('#rockimg')).should('exist');
        cy.get('#rock').should('contain', 'Rock');
        cy.get('#rockbutton').should('exist');
      })
    });