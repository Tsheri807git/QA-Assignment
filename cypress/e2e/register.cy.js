import { RegisterNewuser } from "../pageObject/registerNewUser"
import { editUserInfo } from "../pageObject/editUserDetail";
import { Login } from "../pageObject/loginPage";

describe('Register new user', () => {
  it('should visit the site home', () => {
    cy.visit('/')
  })

  it('should register new user', () => {
    RegisterNewuser.registerPage()
    RegisterNewuser.registerUser('Tshering', 'Wangchuk', 'tshering1@gmail.com', 'Tshering@123', 'Tshering@123')
  })
  
  it('should have successfully', () => {
    RegisterNewuser.saveNewUser()
  })

  it('User should login', () => {
    cy.get('a').contains('Continue').click()
    Login.loginPage()
    Login.loginUser('tshering1@gmail.com', 'Tshering@123')
  })

  it('should have successfully', () => {
  Login.loginNewUser()
  })

  it('should edit the customer info', () => {
  editUserInfo.detailPage()
  editUserInfo.personalDetail('Sonam', 'Tenzin', 'sonam@gmail.com')
  })

  it('should have successfully', () => {
  editUserInfo.saveInfo()

  })
})