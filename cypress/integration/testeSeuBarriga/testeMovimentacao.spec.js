
describe("Validar Campos Obrigatórios", () => {

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

        cy.get(':nth-child(3) > a').click();
    })

    it("Validar campos obrigatórios", () => {
        cy.get('.btn')
            .click()
        cy.get('.alert > ul > li').should("have.length", 6)


        cy.get('.alert > ul > li')
            .each(() => {
                let i = 1;
                cy.get('body > div.alert.alert-danger > ul > li:nth-child(' + i + ')').invoke('text')
                    .should("to.be.oneOf", ["Data da Movimentação é obrigatório",
                        "Data do pagamento é obrigatório",
                        "Descrição é obrigatório",
                        "Interessado é obrigatório",
                        "Valor é obrigatório",
                        "Valor deve ser um número"])
                i++;
            })
    })

    it("Validar campo obrigatório - Data transiçao", () => {
        cy.get('#data_pagamento')
            .type("19/08/2021")
        cy.get('#descricao')
            .type("Teste Valor")
        cy.get('#interessado')
            .type("Gloria")
        cy.get('#valor')
            .type(150)
        cy.get('#status_pago')
            .click()
        cy.get('.btn')
            .click();

        cy.get('.alert > ul > li')
            .should("have.length", 1)
            .should("have.text", "Data da Movimentação é obrigatório")
    })

    it("Validar campo obrigatório - Data Pagamento", () => {
        cy.get('#data_transacao')
            .type("19/08/2021")
        cy.get('#descricao')
            .type("Teste Valor")
        cy.get('#interessado')
            .type("Gloria")
        cy.get('#valor')
            .type(150)
        cy.get('#status_pago')
            .click()
        cy.get('.btn')
            .click();

        cy.get('.alert > ul > li')
            .should("have.length", 1)
            .should("have.text", "Data do pagamento é obrigatório")
    })

    it("Validar campo obrigatório - Descrição", () => {
        cy.get('#data_transacao')
            .type("19/08/2021")
        cy.get('#data_pagamento')
            .type("29/08/2021")
        cy.get('#interessado')
            .type("Gloria")
        cy.get('#valor')
            .type(150)
        cy.get('#status_pago')
            .click()
        cy.get('.btn')
            .click();

        cy.get('.alert > ul > li')
            .should("have.length", 1)
            .should("have.text", "Descrição é obrigatório")
    })

    it("Validar campo obrigatório - Interessado", () => {
        cy.get('#data_transacao')
            .type("19/08/2021")
        cy.get('#data_pagamento')
            .type("29/08/2021")
        cy.get('#descricao')
            .type("Teste Valor")
        cy.get('#valor')
            .type(150)
        cy.get('#status_pago')
            .click()
        cy.get('.btn')
            .click();

        cy.get('.alert > ul > li')
            .should("have.length", 1)
            .should("have.text", "Interessado é obrigatório")
    })

    it("Validar campo obrigatório - Valor", () => {
        cy.get('#data_transacao')
            .type("19/08/2021")
        cy.get('#data_pagamento')
            .type("29/08/2021")
        cy.get('#descricao')
            .type("Teste Valor")
        cy.get('#interessado')
            .type("Gloria")
        cy.get('#status_pago')
            .click()
        cy.get('.btn')
            .click();

        cy.get('.alert > ul > li')
            .should("have.length", 2)
            .each(() => {
                let i = 1;
                cy.get('body > div.alert.alert-danger > ul > li:nth-child(' + i + ')').invoke('text')
                    .should("to.be.oneOf", ["Valor é obrigatório",
                        "Valor deve ser um número"])
            })
    })

    it("Validar campo 'Valor'", () => {
        cy.get('#tipo')
            .select("Despesa")
        cy.get('#data_transacao')
            .type("29/08/2021")
        cy.get('#data_pagamento')
            .type("31/08/2021")
        cy.get('#descricao')
            .type("Teste Valor")
        cy.get('#interessado')
            .type("Gloria")
        cy.get('#valor')
            .type("Mil e quinhentos")
        cy.get('#status_pago')
            .click()
        cy.get('.btn')
            .click();

        cy.get('.alert > ul > li')
            .should("have.text", "Valor deve ser um número")
    })

})

describe("Validar movimentação", () => {

    it("Criar movimentação com sucesso", () => {
        cy.get('#tipo')
            .select("Despesa")
        cy.get('#data_transacao')
            .type("15/08/2021")
        cy.get('#data_pagamento')
            .type("20/08/2021")
        cy.get('#descricao')
            .type("Teste 30-08")
        cy.get('#interessado')
            .type("Gloria")
        cy.get('#valor')
            .type("180")
        cy.get('#status_pendente')
            .click()
        cy.get('.btn')
            .click();

        cy.get('.alert')
            .should("have.text", "Movimentação adicionada com sucesso!")
    })
})