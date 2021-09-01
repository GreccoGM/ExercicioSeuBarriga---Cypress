describe("Validar Resumo Mensal", () => {

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

        cy.get(':nth-child(4) > a').click();
    })

    it("Verificar movimentaçao cadastrada", () => {
        cy.get('tbody > tr > :nth-child(1)')
            .should("have.text", "Teste movimentaçao")
    })


})