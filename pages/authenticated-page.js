const { I } = inject();
const assert = require('assert');

const authenticatedPage = {
    userCpfAuthenticated: "//div[@class='layout-margin layout-align-center-center layout-column']//li",
    logOutButton: "//button[contains(text(),'Sair')]",
    myProfileButton: "//a[contains(@aria-label,'Meu perfil')]",
    inputPassword: "//input[@name = 'current_password']",
    passwordConfirmButton: "//button[contains(text(),'Enviar')]",
    inputNameProfile: "//input[@name = 'name']",
    updateConfirmButton: "//button[contains(text(), 'Atualizar')]",
    welcomeName: "//h5[contains(text(), 'Bem-vindo')]",
    userVerified,
    signOut,
    updateProfile,
    checkUpdatedProfile
}


async function userVerified(cpfCheck) {
    I.waitForVisible(authenticatedPage.userCpfAuthenticated, 10);

    const check = String(cpfCheck).replace(/[^0-9]/g, '');
    let authenticated = await I.grabTextFrom(authenticatedPage.userCpfAuthenticated)
    authenticated = authenticated.replace(/[^0-9]/g, '');

    assert.equal(check, authenticated)
}

function signOut() {
    I.waitForVisible(authenticatedPage.logOutButton, 10)
    I.click(authenticatedPage.logOutButton)
}

function updateProfile(newName, userPassword) {
    I.waitForVisible(authenticatedPage.myProfileButton, 10);
    I.amOnPage("/#!/contribuinte/perfil")


    I.waitForVisible(authenticatedPage.inputPassword, 10);
    I.fillField(authenticatedPage.inputPassword, userPassword);
    I.click(authenticatedPage.passwordConfirmButton);

    I.waitForVisible(authenticatedPage.inputNameProfile, 10);
    I.clearField(authenticatedPage.inputNameProfile);
    I.fillField(authenticatedPage.inputNameProfile, newName)

    I.click(authenticatedPage.updateConfirmButton);

}

async function checkUpdatedProfile(newName) {
    I.waitForVisible(authenticatedPage.welcomeName, 10)
    const nameChanged = await I.grabTextFrom(authenticatedPage.welcomeName)
    if (!nameChanged.includes(newName)) {
        throw new Error("error update profile, name expected: " + newName)
    }
}

module.exports = authenticatedPage;