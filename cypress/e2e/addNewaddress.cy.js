import { Login } from "../pageObject/loginPage";
import { EditUserInfo } from "../pageObject/editUserDetail";
import { AddNewAD } from "../pageObject/addNewAddress";
import { RegisterNewuser } from "../pageObject/registerNewUser";


describe ('can add addresses of the customer', () => {
    it('should visit the site home', () => {
        globalThis.email = RegisterNewuser.generateMail()
        cy.visit('/')
    })

    it('customer registrstion', () => {
        RegisterNewuser.RegisterPage()
        RegisterNewuser.RegisterUser('Tshering', 'Wangchuk', email, 'Tshering@123', 'Tshering@123')
    })

    it('should have successfully', () => {
        RegisterNewuser.SaveNewUser()
    })
    
    it('User should login', () => {
        cy.get('a').contains('Continue').click()
        Login.LoginPage()
        Login.LoginUser(email, 'Tshering@123')
    })
    
    it('should have successfully', () => {
      Login.loginNewUser()
      EditUserInfo.DetailPage()
    })

    it('customer address', () => {
        AddNewAD.Address()
    })

    it('save with empty fields', () => {
        AddNewAD.EmptyAddress()
    })

    it('successfully save the addresses', () => {
        AddNewAD.NewAddress('Tshering', 'Wangchuk', RegisterNewuser.generateMail(), 'Bhutan', 'Thimphu', 'babesa', '1100', '17417007')
        AddNewAD.SaveBtn()
    })


})