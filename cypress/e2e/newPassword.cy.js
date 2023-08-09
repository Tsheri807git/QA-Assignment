import { PasswordChange } from "../pageObject/changepassword";
import { RegisterNewuser } from "../pageObject/registerNewUser"
import { EditUserInfo } from "../pageObject/editUserDetail";
import { Login } from "../pageObject/loginPage";
import { LogOut } from "../pageObject/logout";

describe ('changing the password', () => {
    it('should visit the site home', () => {
        cy.visit('/')
    })

    it('register the user', () => {
        globalThis.email = RegisterNewuser.GenerateMail()
        RegisterNewuser.RegisterPage()
        RegisterNewuser.RegisterUser('Tshering', 'Wangchuk', email, 'Tshering@123', 'Tshering@123')
    })   
    
    it('save the user', () => {
        RegisterNewuser.SaveNewUser()
    })

    it('user should login', () => {
        cy.get('a').contains('Continue').click()
        Login.LoginPage()
        Login.LoginUser(email, 'Tshering@123')
    })
    
    it('log in successfylly', () => {
        Login.LoginNewUser()
    })

    it('click on myaccount', () => {
        EditUserInfo.DetailPage()
    })    

    it('change the password', () => {
        PasswordChange.ChangePassword()
        PasswordChange.Newpassword('Tshering@123', 'tshering123', 'tshering123')
    })

    it('successfully changed password', () => {
        PasswordChange.Savepasswordbtn()
    })

    it('user logout', () => {
        LogOut.CloseNotice()
        LogOut.LogOutBtn()
    })

    it('login again with new password', () => {
        Login.LoginPage()
        Login.LoginUser(email, 'tshering123')
    })

    it('login successfully with new password', () => {
        Login.LoginNewUser()
    })
})