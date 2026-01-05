import loginPage from "../pages/loginPage";

class loginActions {
    userLogin(user) {
        loginPage.login(user.userName, user.password);
    }
    userLogout() {
        loginPage.getBurgerMenu().click();
        loginPage.getLogoutButton().click();
    }
}

export default new loginActions();