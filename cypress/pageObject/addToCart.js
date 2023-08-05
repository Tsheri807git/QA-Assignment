export class addToCart {
    static searchBook(value) {
        cy.get('#small-searchterms').clear().type(value)
        cy.get('button').contains('Search').click()
        cy.get('h2').should('include.text', value)
    }

    // static countNo(count) {
    //     cy.get('#product_enteredQuantity_38').clear().type('count')
    // }

    static cartBtn() {
        cy.get('button').contains('Add to cart').click()
        cy.get('.content').contains('The product has been added to your ').should('be.visible')
    }
}