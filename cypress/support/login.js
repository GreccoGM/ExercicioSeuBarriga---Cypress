import { LoginPage } from '/cypress/support/pages/loginPage.js';

export function realizarLogin() {
    const login = new LoginPage();

    login.informarEmail();
    login.informarSenha();
    login.clicarBtnLogin();
}
