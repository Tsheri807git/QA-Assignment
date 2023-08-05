import { addToCart } from "../pageObject/addToCart";
import { checkOutB } from "../pageObject/checkOut";
import { Login } from "../pageObject/loginPage";
describe('search for book and add to cart', () => {
    it('should visit the site home', () => {
        cy.visit('/')
    })

    it('enter the names of the book', () => {
        addToCart.searchBook('First Prize Pies')
    })

    // it('write the count of the book', () => {
    //     addToCart.countNo('2')
    // })

    it('add the book to the cart', () => {
        addToCart.cartBtn()
    })

    it('should go to the shopping cart', () => {
        checkOutB.cartList()
    })

    it('accept toc and checkout', () => {
        checkOutB.checkout()
    })

    it('enter wrong customer credential', () => {
        Login.loginUser('tshering@gmai.com', 'tshering123')
        cy.get('button').contains('Log in').click()
    })

    it('unsuccessful log in', () => {
        cy.get('div').contains('Login was unsuccessful. Please correct the errors and try again.').should('be.visible')
    })
})