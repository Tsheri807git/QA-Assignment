export class checkOutB {
    
    static cartList() {
        cy.get('#topcartlink').click()
        cy.get('h1').should('have.text', 'Shopping cart')
    }

    static checkout() {
        cy.get('#termsofservice').click()
        cy.get('button').contains('Checkout').click()
        cy.get('.page-title').should('have.text', 'Welcome, Please Sign In!')
    }
}