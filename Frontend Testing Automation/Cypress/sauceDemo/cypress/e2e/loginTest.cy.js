import loginActions from "../actions/loginActions"
describe('testing loginpage', () => {
  it('should redirect to the dashborad with valid username and password', () => {
    cy.visit('https://www.saucedemo.com')
    cy.fixture('loginUsers').then(data => {
      loginActions.standardUserLogin(data.standardUser)
    })
  })
})