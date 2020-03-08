

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
  
    it('displays second item', () => {
      cy.get('#papercontainer').within(() => {
        cy.get('#paperimg').should('exist');
        cy.get('#paper').should('contain', 'Paper');
        cy.get('#paperbutton').should('exist');
      })
    });
  
    it('displays third item', () => {
      cy.get('#scissorscontainer').within(() => {
        cy.get('#scissorsimg').should('exist');
        cy.get('#scissors').should('contain', 'Scissors');
        cy.get('#scissorbutton').should('exist');
      })
    });
  });  