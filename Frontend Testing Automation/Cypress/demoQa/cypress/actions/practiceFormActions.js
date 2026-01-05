import practiceFormPage from "../pages/practiceFormPage";

class practiceFormActions {
    submitWithEmptyCredentials() {
        practiceFormPage.submit();
    }
    submitForm(data) {
        practiceFormPage.fillFormAndSubmit(data.firstName, data.lastName, data.email, data.mobile, data.dob, data.subject, data.currentAddress,data.fileName, data.state, data.city);
    }
}

export default new practiceFormActions;