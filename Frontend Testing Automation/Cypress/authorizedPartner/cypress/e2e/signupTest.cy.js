import signupActions from "../actions/signupActions"

describe('Authorized Partner Signup test', () => {
  it('should show error on required field when blank submit.', () => {
    cy.visit('https://authorized-partner.vercel.app/')
    signupActions.blankSignup();
  })
})