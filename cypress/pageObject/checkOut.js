export class CheckOutB {
    
    static CartList() {
        cy.get('#topcartlink').click()
        cy.get('h1').should('have.text', 'Shopping cart')
    }

    static Checkout() {
        cy.get('#termsofservice').click()
        cy.get('button').contains('Checkout').click()
        cy.get('.page-title').should('have.text', 'Welcome, Please Sign In!')
    }
}