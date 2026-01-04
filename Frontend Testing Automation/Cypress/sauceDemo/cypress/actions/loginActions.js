import loginPage from "../pages/loginPage";

class loginActions {
    standardUserLogin(user) {
        loginPage.login(user.userName, user.password);
    }
}

export default new loginActions();