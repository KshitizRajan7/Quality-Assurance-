import signupPage from "../pages/signupPage";

class signupActions {
    blankSignup(data) {
        signupPage.clickGetStartedButton();
        signupPage.clickCheckbox();
        signupPage.clickContinueButton();
        signupPage.basicInfoFillUp(data.firstName, data.lastName, data.email, data.phoneNumber, data.password, data.confirmPassword)
        signupPage.clickNextButton();
    }
}
export default new signupActions;