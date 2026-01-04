class practiceFormPage {
    formCard = '.top-card h5:contains("Forms")';
    practiceForm = '.element-list span:contains("Practice Form")';
    submitButton = '#submit';

    getFormCard() {
        return cy.get(this.formCard);
    }

    getPracticeForm() {
        return cy.get(this.practiceForm);
    }

    getSubmitButton() {
        return cy.get(this.submitButton);
    }
    submit() {
        this.getFormCard().click();
        this.getPracticeForm().click();
        this.getSubmitButton().click();
    }
}

export default new practiceFormPage;