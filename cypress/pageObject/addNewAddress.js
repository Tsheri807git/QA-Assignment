export class AddNewAD {

    static Address() {
        cy.get('a[href="/customer/addresses"]').click({ multiple: true })
        cy.get('.page-title').should('have.text', 'My account - Addresses')

        cy.get('button').contains('Add new').click()
        cy.get('.page-title').should('have.text', 'My account - Add new address')
    }

    static EmptyAddress() {
        cy.get('button').contains('Save').click()

        const id  = ['#Address_FirstName-error', '#Address_LastName-error', '#Address_Email-error', '#Address_City-error', '#Address_Address1-error', '#Address_ZipPostalCode-error', '#Address_PhoneNumber-error']
        const message = ['First name is required.', 'Last name is required.', 'Email is required.', 'City is required', 'Street address is required', 'Zip / postal code is required', 'Phone is required']

        for (let i in id) {
            cy.get(id[i]).contains(message[i]).should('be.visible')
        }
    }

    static AewAddress(firstName, lastName, email, country, city, address1, postalCode, pNumber) {
        cy.get('#Address_FirstName').type(firstName)
        cy.get('#Address_LastName').type(lastName)
        cy.get('#Address_Email').type(email)
        cy.get('#Address_CountryId').select(country)
        cy.get('#Address_City').type(city)
        cy.get('#Address_Address1').type(address1)
        cy.get('#Address_ZipPostalCode').type(postalCode)
        cy.get('#Address_PhoneNumber').type(pNumber)
    }

    static SaveBtn() {
        cy.get('button').contains('Save').click()
        cy.get('#bar-notification').contains('The new address has been added successfully.').should('be.visible')
    }
}
