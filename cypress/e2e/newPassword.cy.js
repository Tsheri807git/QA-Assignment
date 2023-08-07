import { passwordChange } from "../pageObject/changepassword";
import { RegisterNewuser } from "../pageObject/registerNewUser"
import { editUserInfo } from "../pageObject/editUserDetail";
import { Login } from "../pageObject/loginPage";

describe ('changing the password', () => {
    it('should visit the site home', () => {
        cy.visit('/')
    })

    it('register and login', () => {
        RegisterNewuser.registerPage()
        RegisterNewuser.registerUser('Tshering', 'Wangchuk', 'tshering1@gmail.com', 'Tshering@123', 'Tshering@123')
        RegisterNewuser.saveNewUser()

        cy.get('a').contains('Continue').click()
        Login.loginPage()
        Login.loginUser('tshering1@gmail.com', 'Tshering@123')

        Login.loginNewUser()

        editUserInfo.detailPage()
    })

    it('change the password', () => {
        passwordChange.changePassword()
        passwordChange.newpassword('Tshering@123', 'tshering123', 'tshering123')
    })

    it('successfully changed password', () => {
        passwordChange.savepasswordbtn()
    })
})