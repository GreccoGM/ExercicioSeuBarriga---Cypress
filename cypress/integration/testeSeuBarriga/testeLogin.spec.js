///<reference types = "cypress"/>
import { realizarLogin } from '/cypress/support/login.js';

describe("Realizar Login", () => {
    //const login = new LoginPage();
    before(() => {
        cy.visit('https://seubarriga.wcaquino.me/')
    })

    it("Realizar Login com sucesso", () => {
        realizarLogin();

        cy.get('.alert')
            .should("be.visible")
            .should("contain", "Bem vindo,")
    })


})