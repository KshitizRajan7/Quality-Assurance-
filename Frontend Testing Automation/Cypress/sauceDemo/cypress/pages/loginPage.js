class loginPage {
    userName = '#user-name';
    password = '#password';
    loginButton = '#login-button';
    burgerMenuButton = '#react-burger-menu-btn';
    logoutButton = '#logout_sidebar_link';

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

    getBurgerMenu() {
        return cy.get(this.burgerMenuButton);
    }
    getLogoutButton() {
        return cy.get(this.logoutButton);
    }
    login(userName, password) {
        this.getUserName().type(userName);
        this.getPassword().type(password);
        this.getLoginButton().click();
    }
}

export default new loginPage;