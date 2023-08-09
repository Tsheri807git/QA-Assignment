import { RegisterNewuser } from "../pageObject/registerNewUser"
import { Login } from "../pageObject/loginPage";

describe('logging in with the data from fixture', () => {
    it('should visit the site home', () => {
        cy.visit('/')
    })
    

   
    it('should register the user', () => {
        cy.fixture('credential').then((data)=>{
            const {firstName, lastName, email, password, passwordConfirm} = data.userData;
                RegisterNewuser.RegisterPage()
                RegisterNewuser.RegisterUser(firstName, lastName, email, password, passwordConfirm)  
        })   
    })

    it('save the user', () => {
        RegisterNewuser.SaveNewUser()
    })

    it('user should login', () => {
        cy.fixture('credential').then((data) => {
            const {email, password} = data.userData;
            cy.get('a').contains('Continue').click()
                Login.LoginPage()
                Login.LoginUser(email, password)
        })
       
    })

    it('successfully login', () => {
        Login.LoginNewUser()
    })          
})