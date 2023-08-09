import { AddToCart } from "../pageObject/addToCart";
import { CheckOutB } from "../pageObject/checkOut";
import { Login } from "../pageObject/loginPage";
describe('search for book and add to cart', () => {
    it('should visit the site home', () => {
        cy.visit('/')
    })

    it('enter the names of the book', () => {
        AddToCart.SearchBook('First Prize Pies')
    })

    // it('write the count of the book', () => {
    //     addToCart.countNo('2')
    // })

    it('add the book to the cart', () => {
        AddToCart.CartBtn()
    })

    it('should go to the shopping cart', () => {
        CheckOutB.CartList()
    })

    it('accept toc and checkout', () => {
        CheckOutB.Checkout()
    })

    it('enter wrong customer credential', () => {
        Login.LoginUser('tshering@gmai.com', 'tshering123')
        cy.get('button').contains('Log in').click()
    })

    it('unsuccessful log in', () => {
        cy.get('div').contains('Login was unsuccessful. Please correct the errors and try again.').should('be.visible')
    })
})