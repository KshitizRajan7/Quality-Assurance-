import signupActions from "../actions/signupActions"

beforeEach(() => {
  cy.visit('https://authorized-partner.vercel.app/')
})

describe('Authorized Partner Signup test', () => {
  it('should show error on required field when blank submit.', () => {
    signupActions.blankSignup();
  })
  it('should fill up all the field with data and submit', () => {
    cy.fixture('basicinfo').then(data => {
      signupActions.blankSignup(data.validData);
    })
  })
})