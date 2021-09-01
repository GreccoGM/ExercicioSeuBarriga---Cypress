///<reference types = "cypress"/>

describe("Realizar Login", () => {

    before(() => {
        cy.visit('https://seubarriga.wcaquino.me/')
    })

    it("Realizar Login com sucesso", () => {
        cy.get('#email')
            .type("testeemail@email.com")
        cy.get('#senha')
            .type("123456")
        cy.get('.btn').click();

        cy.get('.alert')
            .should("be.visible")
            .should("contain", "Bem vindo,")
    })


})