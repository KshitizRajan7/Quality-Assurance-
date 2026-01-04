import signupPage from "../pages/signupPage";

class signupActions {
    blankSignup() {
        signupPage.clickGetStartedButton();
        signupPage.clickCheckbox();
        signupPage.clickContinueButton();
        signupPage.clickNextButton();
    }
}
export default new signupActions;