import { RegisterNewuser } from "../pageObject/registerNewUser"
import { Login } from "../pageObject/loginPage";

describe('logging in with the data from fixture', () => {
    it('should visit the site home', () => {
        cy.visit('/')
    })
    
    it('should register and log in', () => {
        cy.fixture('credential').then((data)=>{
            const {firstName, lastName, email, password, passwordConfirm} = data.userData;
            RegisterNewuser.registerPage()
            RegisterNewuser.registerUser(firstName, lastName, email, password, passwordConfirm)
            RegisterNewuser.saveNewUser()

            cy.get('a').contains('Continue').click()
            Login.loginPage()
            Login.loginUser(email, password)
            Login.loginNewUser()
        })
    })
})