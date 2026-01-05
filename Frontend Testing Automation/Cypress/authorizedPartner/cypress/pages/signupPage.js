class signupPage {
    getStartedButton = 'a[href="/register"] button.primary-btn:contains("Get Started")';
    checkBox = '#remember';
    // continueButton = 'button.primary-btn:contains("Continue)';
    // nextButton = 'button.primary-btn:contains("Next")';
    firstName = '[name="firstName"]';
    lastName = '[name="lastName"]';
    email = '[name="email"]';
    phoneNumber = '[name="phoneNumber"]';
    password = '[name="password"]';
    confirmPassword = '[name="confirmPassword"]';

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

    getFirstName() {
        return cy.get(this.firstName);
    }
    getLastName() {
        return cy.get(this.lastName);
    }
    getEmail() {
        return cy.get(this.email);
    }
    getPhoneNumber() {
        return cy.get(this.phoneNumber);
    }
    getPassword() {
        return cy.get(this.password);
    }
    getConfirmPassword() {
        return cy.get(this.confirmPassword);
    }
    clickNextButton() {
        this.getNextButton().click();
    }

    basicInfoFillUp(firstName, lastName, email, phoneNumber, password, confirmPassword) {
        this.getFirstName().type(firstName);
        this.getLastName().type(lastName);
        this.getEmail().type(email);
        this.getPhoneNumber().type(phoneNumber);
        this.getPassword().type(password);
        confirmPassword = password;
        this.getConfirmPassword().type(confirmPassword);
    }
}

export default new signupPage;