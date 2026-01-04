import practiceFormActions from "../actions/practiceFormActions"

describe('testing practice form', () => {
  it('should show error on required empty field in blank form submit.', () => {
    cy.visit('https://demoqa.com/')
    practiceFormActions.submitWithEmptyCredentials();
  })
})