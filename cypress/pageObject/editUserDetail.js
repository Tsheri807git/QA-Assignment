export class editUserInfo {
    static detailPage() {
        cy.contains('My account').click()
        cy.get('h1').should('have.text', 'My account - Customer info')
    }

    static personalDetail(firstName, lastName, email) {
        cy.get('#FirstName').clear().type(firstName)
        cy.get('#LastName').clear().type(lastName)
        cy.get('#Email').clear().type(email)
    }

    static saveInfo() {
        cy.get('button').contains('Save').click()
        cy.get('#bar-notification').contains('The customer info has been updated successfully').should('be.visible')
    }
}