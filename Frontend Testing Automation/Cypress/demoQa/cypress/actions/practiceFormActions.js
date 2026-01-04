import practiceFormPage from "../pages/practiceFormPage";

class practiceFormActions {
    submitWithEmptyCredentials() {
        practiceFormPage.submit();
    }
}

export default new practiceFormActions;