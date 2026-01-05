import loginActions from "../actions/loginActions"
import loginPage from "../pages/loginPage"
describe('testing loginpage', () => {
  beforeEach(() => {
    cy.visit('https://www.saucedemo.com')
  })

  after(() => {
    loginActions.userLogout();
  })
  //standard user
  it('should redirect to the dashborad with valid username and password', () => {

    cy.fixture('loginUsers').then(data => {
      loginActions.userLogin(data.standardUser)
    })
  })
  //lockedout user
  it('should show error message in login page with lockedout user ', () => {
    cy.fixture('loginUsers').then(data => {
      loginActions.userLogin(data.lockedoutUser)
    })
  })
  //problem user
  it('should refirect to dashboard but problems occurs with problem user', () => {
    cy.fixture('loginUsers').then(data => {
      loginActions.userLogin(data.problemUser)
    })
  })
  //performance glitch user
  it('should delay to redirect to dashborad with performance glitch user', () => {
    cy.fixture('loginUsers').then(data => {
      loginActions.userLogin(data.performanceGlitchUser)
    })
  })
  //error user
  it('should refirect to dashboard but got some error with error user', () => {
    cy.fixture('loginUsers').then(data => {
      loginActions.userLogin(data.errorUser)
    })
  })
  //visual user
  it('should refirect to dashboard but got Ui defects with visual user', () => {
    cy.fixture('loginUsers').then(data => {
      loginActions.userLogin(data.visualUser)
    })
  })
})