export class RegisterNewuser {
    static registerPage() {
        cy.contains('Register').click()
        cy.get('h1').should('have.text', 'Register')
    }

    static registerUser(firstName, lastName, email, password, passwordConfirm) {
        cy.get('#FirstName').clear().type(firstName)
        cy.get('#LastName').clear().type(lastName)
        cy.get('#Email').clear().type(email)
        cy.get('#Password').clear().type(password)
        cy.get('#ConfirmPassword').clear().type(passwordConfirm)

    }

    static saveNewUser() {
        cy.get('button').contains('Register').click()
        cy.get('.result').should('have.text', 'Your registration completed')
    }
}