class signupPage {
    getStartedButton = 'a[href="/register"] button.primary-btn:contains("Get Started")';
    checkBox = '#remember';
    // continueButton = 'button.primary-btn:contains("Continue)';
    // nextButton = 'button.primary-btn:contains("Next")';

    getGetstartedButton() {
        return cy.get(this.getStartedButton);
    }
    getCheckBox() {
        return cy.get(this.checkBox);
    }
    getContinueButton() {
        return cy.contains('button.primary-btn', 'Continue');
    }
    getNextButton() {
        return cy.contains('button.primary-btn', 'Next');
    }
    clickGetStartedButton() {
        this.getGetstartedButton().click();
    }
    clickCheckbox() {
        this.getCheckBox().click();
    }
    clickContinueButton() {
        this.getContinueButton().click();
    }
    clickNextButton() {
        this.getNextButton().click();
    }
}

export default new signupPage;