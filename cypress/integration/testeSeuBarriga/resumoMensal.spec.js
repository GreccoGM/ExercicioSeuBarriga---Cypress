import { ResumoMensal } from '/cypress/support/pages/resumoMensal.js';
import { realizarLogin } from '/cypress/support/login.js';

describe("Validar Resumo Mensal", () => {
    const resumoMensal = new ResumoMensal();

    before(() => {
        cy.visit('/extrato')
    })
    beforeEach(() => {
        cy.reload();

        realizarLogin();

        resumoMensal.acessarMenu();
    })

    it("Verificar movimentaçao cadastrada - Mes atual", () => {
        resumoMensal.getDescricao()
            .should("contain", "Teste movimentaçao")
    })


})