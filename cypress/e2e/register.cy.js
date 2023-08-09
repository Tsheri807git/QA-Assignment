import { RegisterNewuser } from "../pageObject/registerNewUser"
import { EditUserInfo } from "../pageObject/editUserDetail";
import { Login } from "../pageObject/loginPage";

describe('Register new user', () => {
  it('should visit the site home', () => {
    cy.visit('/')
  })

  it('should register new user', () => {
    globalThis.email = RegisterNewuser.GenerateMail()
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
  Login.LoginNewUser()
  })

  it('should edit the customer info', () => {
  EditUserInfo.DetailPage()
  EditUserInfo.PersonalDetail('Sonam', 'Tenzin', 'sonam@gmail.com')
  })

  it('should have successfully', () => {
  EditUserInfo.SaveInfo()

  })
})