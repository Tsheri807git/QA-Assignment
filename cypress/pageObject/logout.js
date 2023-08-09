export class LogOut {

    static CloseNotice () {
        cy.get('.close').click()
    }
    static LogOutBtn () {
        cy.get('a[href="/logout"]').click()
        cy.get('.topic-block-title').should('have.text', 'Welcome to our store')
    }
}