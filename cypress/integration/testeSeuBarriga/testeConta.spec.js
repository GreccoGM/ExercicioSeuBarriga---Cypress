describe("Teste Conta", () => {

    before(() => {
        cy.visit('https://seubarriga.wcaquino.me/')
    })
    beforeEach(() => {
        cy.reload();

        cy.get('#email')
            .type("testeemail@email.com")
        cy.get('#senha')
            .type("123456")
        cy.get('.btn').click();

    })

    it("Cadastrar conta sem nome", () => {
        cy.get('.dropdown-toggle')
            .click()
        cy.get('.dropdown-menu > :nth-child(1) > a')
            .click()
        cy.get('.btn').click();

        cy.get('.alert')
            .should("be.visible")
            .should("have.text", "Informe o nome da conta")
    })

    it("Cadastrar conta com sucesso", () => {
        cy.get('.dropdown-toggle')
            .click()
        cy.get('.dropdown-menu > :nth-child(1) > a')
            .click()
        cy.get('#nome')
            .type("Primeiro teste")
        cy.get('.btn').click();

        cy.get('.alert')
            .should("be.visible")
            .should("have.text", "Conta adicionada com sucesso!")
    })

    it("Verificar lista de contas", () => {
        cy.get('.dropdown-toggle')
            .click()
        cy.get('.dropdown-menu > :nth-child(2) > a')
            .click();

        cy.get('#tabelaContas td')
            .should('not.have.length', 0)
    })

    it("Validar edição de conta", () => {
        cy.get('.dropdown-toggle')
            .click()
        cy.get('.dropdown-menu > :nth-child(2) > a')
            .click()
        cy.get('#tabelaContas > tbody > tr:nth-child(1) > td:nth-child(2) > a:nth-child(1)')
            .click();

        cy.get('#nome')
            .type("Primeira alteração")
        cy.get('.btn').click();

        cy.get('.alert')
            .should("be.visible")
            .should("have.text", "Conta alterada com sucesso!")
    })

    it("Validar exclusão de conta", () => {
        cy.get('.dropdown-toggle')
            .click()
        cy.get('.dropdown-menu > :nth-child(2) > a')
            .click()
        cy.get('#tabelaContas > tbody > tr:nth-child(1) > td:nth-child(2) > a:nth-child(2)')
            .click();

        cy.get('.alert')
            .should("be.visible")
            .should("have.text", "Conta removida com sucesso!")
    })


})