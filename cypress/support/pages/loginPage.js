import elementos from "../../support/elementos";

export class LoginPage {

    informarEmail() {
        cy.get(elementos.LOGIN.email)
            .type("testeemail@email.com");
    };

    informarSenha() {
        cy.get(elementos.LOGIN.senha)
            .type("123456");
    };

    clicarBtnLogin() {
        cy.get(elementos.LOGIN.botaoLogin).click();
    };
}