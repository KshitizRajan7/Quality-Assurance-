class loginPage {
    userName = '#user-name';
    password = '#password';
    loginButton = '#login-button';

    //getters 
    getUserName() {
        return cy.get(this.userName);
    }

    getPassword() {
        return cy.get(this.password);
    }

    getLoginButton() {
        return cy.get(this.loginButton);
    }
    login(userName, password) {
        this.getUserName().type(userName);
        this.getPassword().type(password);
        this.getLoginButton().click();
    }
}

export default new loginPage;