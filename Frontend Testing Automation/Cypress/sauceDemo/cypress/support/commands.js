import loginPage from "../pages/loginPage";

Cypress.Commands.add('login', (userName, password) => {
    cy.get(loginPage.userName).type(userName);
    cy.get(loginPage.password).type(password);
    cy.get(loginPage.loginButton).click();
})