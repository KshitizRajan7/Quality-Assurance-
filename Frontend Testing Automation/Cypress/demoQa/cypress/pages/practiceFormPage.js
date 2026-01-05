class practiceFormPage {
    formCard = '.top-card h5:contains("Forms")';
    practiceForm = '.element-list span:contains("Practice Form")';
    firstName = '#firstName';
    lastName = '#lastName';
    email = '#userEmail';
    genderMale = '#gender-radio-1';
    mobile = '#userNumber';
    dob = '#dateOfBirthInput';
    subject = '#subjectsContainer';
    hobbies = '#hobbies-checkbox-1';
    uploadPicture = '#uploadPicture';
    currentAddress = '#currentAddress';
    state = '#state'
    city = '#city'
    submitButton = '#submit';

    getFormCard() {
        return cy.get(this.formCard);
    }

    getPracticeForm() {
        return cy.get(this.practiceForm);
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
    getGender() {
        return cy.get(this.genderMale).parent();
    }
    getMobile() {
        return cy.get(this.mobile);
    }
    getDob() {
        return cy.get(this.dob);
    }
    getSubject() {
        return cy.get(this.subject);
    }
    getHobbies() {
        return cy.get(this.hobbies).parent();
    }
    getUploadPicture() {
        return cy.get(this.uploadPicture);
    }
    getCurrentAddress() {
        return cy.get(this.currentAddress);
    }
    getState() {
        return cy.get(this.state);
    }
    getCity() {
        return cy.get(this.city);
    }
    getSubmitButton() {
        return cy.get(this.submitButton);
    }
    submit() {
        // this.getFormCard().click();
        // this.getPracticeForm().click();
        this.getSubmitButton().click();
    }
    fillFormAndSubmit(firstName, lastName, email, mobile, dob, subject, currentAddress,fileName, state, city) {
        this.getFirstName().type(firstName);
        this.getLastName().type(lastName);
        this.getEmail().type(email);
        this.getGender().click();
        this.getMobile().type(mobile);
        this.getDob().type('{selectall}' + dob + '{enter}');
        this.getSubject().type(subject + '{enter}');
        this.getHobbies().click();
        this.getUploadPicture().attachFile(fileName);
        this.getCurrentAddress().type(currentAddress);
        this.getState().type(state + '{enter}');
        this.getCity().type(city + '{enter}');
        this.getSubmitButton().click();
    }
}

export default new practiceFormPage;