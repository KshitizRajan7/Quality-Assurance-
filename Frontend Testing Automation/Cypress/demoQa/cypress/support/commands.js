import practiceFormPage from "../pages/practiceFormPage";

Cypress.Commands.add('blank submit', () => {
    cy.get(practiceFormPage.getSubmitButton).click();
})