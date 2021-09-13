import { MovimentacaoPage, getMsg, getMsgLista, salvarMovimentacao } from '/cypress/support/pages/movimentacaoPage.js';
import { realizarLogin } from '/cypress/support/login.js';

describe("Validar Campos Obrigatórios", () => {
    const movimentacao = new MovimentacaoPage();
    before(() => {
        cy.visit('/movimentacao')
    })
    beforeEach(() => {
        cy.reload();
        realizarLogin();

        movimentacao.acessarMenu();
    })

    it("Validar campos obrigatórios", () => {
        let i = 1;

        salvarMovimentacao();
        getMsgLista().should("have.length", 6)
        getMsgLista()
            .each(() => {
                const msg = ["Data da Movimentação é obrigatório",
                    "Data do pagamento é obrigatório",
                    "Descrição é obrigatório",
                    "Interessado é obrigatório",
                    "Valor é obrigatório",
                    "Valor deve ser um número"]

                cy.get('body > div.alert.alert-danger > ul > li:nth-child(' + i + ')').invoke('text')
                    .should("contain", msg[i - 1])

                i++;
            })
    })

    it("Validar campo obrigatório - 'Data Movimentação'", () => {
        movimentacao.validarCampoDataMovimentacao();

        getMsgLista()
            .should("have.length", 1)
            .should("have.text", "Data da Movimentação é obrigatório")
    })

    it("Validar campo obrigatório - 'Data Pagamento'", () => {
        movimentacao.validarCampoDataPagamento();

        getMsgLista()
            .should("have.length", 1)
            .should("have.text", "Data do pagamento é obrigatório")
    })

    it("Validar campo obrigatório - 'Descrição'", () => {
        movimentacao.validarCampoDescricao();

        getMsgLista()
            .should("have.length", 1)
            .should("have.text", "Descrição é obrigatório")
    })

    it("Validar campo obrigatório - 'Interessado'", () => {
        movimentacao.validarCampoInteressado();

        getMsgLista()
            .should("have.length", 1)
            .should("have.text", "Interessado é obrigatório")
    })

    it("Validar campo obrigatório - 'Valor'", () => {
        movimentacao.validarCampoValor();
        let i = 1;

        getMsgLista()
            .should("have.length", 2)
            .each(() => {
                cy.get('body > div.alert.alert-danger > ul > li:nth-child(' + i + ')').invoke('text')
                    .should("to.be.oneOf", ["Valor é obrigatório",
                        "Valor deve ser um número"])
                i++;
            })
    })

    it("Validar campo 'Valor'", () => {
        movimentacao.validarTipoCampoValor();

        getMsgLista()
            .should("have.text", "Valor deve ser um número")
    })

})

describe("Validar movimentação", () => {
    const movimentacao = new MovimentacaoPage();

    before(() => {
        cy.visit('/movimentacao')
    })
    beforeEach(() => {
        cy.reload();

        realizarLogin();

        movimentacao.acessarMenu();
    })

    it("Criar movimentação com sucesso", () => {
        movimentacao.salvarMovimentacaoSucesso();

        getMsg()
            .should("have.text", "Movimentação adicionada com sucesso!")
    })
})