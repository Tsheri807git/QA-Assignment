import { Login } from "../pageObject/loginPage";
import { editUserInfo } from "../pageObject/editUserDetail";
import { addNewAD } from "../pageObject/addNewAddress";
import { RegisterNewuser } from "../pageObject/registerNewUser";

describe ('can add addresses of the customer', () => {
    it('should visit the site home', () => {
        cy.visit('/')
    })

    it('customer registrstion', () => {
        RegisterNewuser.registerPage()
        RegisterNewuser.registerUser('Tshering', 'Wangchuk', 'tshering@gmail.com', 'Tshering@123', 'Tshering@123')
    })

    it('should have successfully', () => {
        RegisterNewuser.saveNewUser()
    })
    
    it('User should login', () => {
        cy.get('a').contains('Continue').click()
        Login.loginPage()
        Login.loginUser('tshering@gmail.com', 'Tshering@123')
    })
    
    it('should have successfully', () => {
      Login.loginNewUser()
      editUserInfo.detailPage()
    })

    it('customer address', () => {
        addNewAD.address()
    })

    it('save with empty fields', () => {
        addNewAD.emptyAddress()
    })

    it('successfully save the addresses', () => {
        addNewAD.newAddress('Tshering', 'Wangchuk', 'tshering808@gmail.com', 'Bhutan', 'Thimphu', 'babesa', '1100', '17417007')
        addNewAD.saveBtn()
    })


})