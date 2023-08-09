export class Login {
    static LoginPage() {
        cy.contains('Log in').click()
        cy.get('h1').should('have.text', 'Welcome, Please Sign In!')
    }

    static LoginUser(email, password) {
        cy.get('#Email').clear().type(email)
        cy.get('#Password').clear().type(password)
    }

    static LoginNewUser() {
        cy.get('button').contains('Log in').click()
        cy.get('h2').should('include.text', 'Welcome to our store')
    }
}