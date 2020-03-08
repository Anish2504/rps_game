describe("User can see results", () => {
  
    describe("Computer selects rock", () => {
      beforeEach(() => {
        cy.visit("http://localhost:3001/"), {
          onBeforeLoad: computer => {
            cy.stub(computerSelection(), 'computer').returns(rock)
          }
        }
      })
      it('player picks rock', () => {
        cy.get("#rockbutton").click();
        cy.get('#results').should('contain', "It's a tie. Try again!")
        });   
      it('player picks paper', () => {
        cy.get("#paperbutton").click();
        cy.get('#results').should('contain', "Congratulations, you win!")
        })
        ;
      it('player picks scissors', () => {
        cy.get("#scissorbutton").click();
        cy.get('#results').should('contain', "Better luck next time.")
      })
    });
  
    describe("Computer selects paper", () => {
      beforeEach(() => {
        cy.visit("http://localhost:3001/"), {  
        };
      });
      it('player picks rock', () => {
        cy.get("#rockbutton").click();
        cy.stub(selection).returns(paper)
        cy.get('#results').should('contain', "Better luck next time.")
        });   
      it('player picks paper', () => {
        cy.get("#paperbutton").click();
        cy.stub(selection).returns(paper)
        cy.get('#results').should('contain', "It's a tie. Try again!")
        })
        ;
      it('player picks scissors', () => {
        cy.get("#scissorbutton").click();
        cy.stub(selection).returns(paper)
        cy.get('#results').should('contain', "Congratulations, you win!")
      });
    });
  
    describe("Computer selects scissors", () => {
      beforeEach(() => {
        cy.visit("http://localhost:3001/"), {
        onBeforeLoad: win => {
        cy.stub(win.Math, 'floor').returns(2)
          }
        };
      });
      it('player picks rock', () => {
        cy.get("#rockbutton").click();
        cy.get('#results').should('contain', "Congratulations, you win!")
        });   
      it('player picks paper', () => {
        cy.get("#paperbutton").click();
        cy.get('#results').should('contain', "Better luck next time.")
        })
        ;
      it('player picks scissors', () => {
        cy.get("#scissorbutton").click();
        cy.get('#results').should('contain', "It's a tie. Try again!")
      });
    })
  })