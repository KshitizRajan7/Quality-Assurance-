import practiceFormActions from "../actions/practiceFormActions"

describe('testing practice form', () => {
  beforeEach(() => {
    cy.visit('https://demoqa.com/automation-practice-form');

  })
  it('should show error on required empty field in blank form submit.', () => {
    practiceFormActions.submitWithEmptyCredentials();
  })

  it('should fill all the form with valid data and submit', () => {
    cy.fixture('PracticeFormData').then(data => {
      practiceFormActions.submitForm(data.validData);
    })
  })
})