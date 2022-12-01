const { I } = inject();



const homePage = {

    inputLogin: "//input[@name = 'login']",
    inputBirthDate: "//input[@name = 'birthdate']",
    loginButton: "//button[contains(text(), 'Enviar')]",
    logar,
    isLoaded,
};


function isLoaded() {
    I.amOnPage('/');

    I.waitForVisible(homePage.inputLogin, 10);

}
function logar(cpf, birthDate) {
    I.fillField(homePage.inputLogin, cpf)
    I.fillField(homePage.inputBirthDate, birthDate)


    I.click(homePage.loginButton)

}


module.exports = homePage;