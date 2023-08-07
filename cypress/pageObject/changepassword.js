export class passwordChange {

    static changePassword () {
        cy.get('a[href="/customer/changepassword"]').click({ multiple: true })
        cy.get('.page-title').should('have.text', 'My account - Change password')
    }

    static newpassword (oldpassword, newpassword, confirmpassword) {
        cy.get('#OldPassword').type(oldpassword)
        cy.get('#NewPassword').type(newpassword)
        cy.get('#ConfirmNewPassword').type(confirmpassword)
    }

    static savepasswordbtn (){
        cy.get('button').contains('Change password').click()
        cy.get('#bar-notification').contains('Password was changed').should('be.visible')
    }
}