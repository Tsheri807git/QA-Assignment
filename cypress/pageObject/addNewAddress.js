export class addNewAD {

    static address() {
        cy.get('a[href="/customer/addresses"]').click({ multiple: true })
        cy.get('.page-title').should('have.text', 'My account - Addresses')

        cy.get('button').contains('Add new').click()
        cy.get('.page-title').should('have.text', 'My account - Add new address')
    }

    static emptyAddress() {
        cy.get('button').contains('Save').click()
        cy.get('#Address_FirstName-error').contains('First name is required.').should('be.visible') 
        cy.get('#Address_LastName-error').contains('Last name is required.').should('be.visible')
        cy.get('#Address_Email-error').contains('Email is required.').should('be.visible')
        cy.get('#Address_City-error').contains('City is required').should('be.visible')
        cy.get('#Address_Address1-error').contains('Street address is required').should('be.visible')
        cy.get('#Address_ZipPostalCode-error').contains('Zip / postal code is required').should('be.visible')
        cy.get('#Address_PhoneNumber-error').contains('Phone is required.').should('be.visible')
    }

    static newAddress(firstName, lastName, email, country, city, address1, postalCode, pNumber) {
        cy.get('#Address_FirstName').type(firstName)
        cy.get('#Address_LastName').type(lastName)
        cy.get('#Address_Email').type(email)
        cy.get('#Address_CountryId').select(country)
        cy.get('#Address_City').type(city)
        cy.get('#Address_Address1').type(address1)
        cy.get('#Address_ZipPostalCode').type(postalCode)
        cy.get('#Address_PhoneNumber').type(pNumber)
    }

    static saveBtn() {
        cy.get('button').contains('Save').click()
        cy.get('#bar-notification').contains('The new address has been added successfully.').should('be.visible')
    }
}
