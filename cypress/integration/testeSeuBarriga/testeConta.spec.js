import { ContaPage, getMsg, getTabelaContas, clicarMenuListar } from '/cypress/support/pages/contaPage.js';
import { realizarLogin } from '/cypress/support/login.js';

describe("Teste Conta", () => {
    const conta = new ContaPage();
    before(() => {
        cy.visit("/login")
    })
    beforeEach(() => {
        cy.reload();
        realizarLogin();
    })

    it("Validar cadastro conta sem nome", () => {
        conta.salvarContaSemNome();

        getMsg()
            .should("be.visible")
            .should("have.text", "Informe o nome da conta")
    })

    it("Validar cadastro de conta com sucesso", () => {
        conta.salvarContaSucesso();

        getMsg()
            .should("be.visible")
            .should("have.text", "Conta adicionada com sucesso!")
    })

    it("Validar lista de contas", () => {
        clicarMenuListar();

        getTabelaContas()
            .should('not.have.length', 0)
    })

    it("Validar sucesso edição de conta", () => {
        conta.editarContaSucesso();

        getMsg()
            .should("be.visible")
            .should("have.text", "Conta alterada com sucesso!")
    })

    it("Validar sucesso exclusão de conta", () => {
        conta.excluirContaSucesso();

        getMsg()
            .should("be.visible")
            .should("have.text", "Conta removida com sucesso!")
    })


})