import faker from 'faker'
import elementos from "../../support/elementos";

export class ContaPage {

    salvarContaSemNome() {
        clicarMenuAdicionar();
        clicarBotaoSalvar();
    };

    salvarContaSucesso() {
        clicarMenuAdicionar();
        cy.get(elementos.CONTA.campoNomeConta)
            .type(faker.name.findName());
        clicarBotaoSalvar();
    }

    validarListaContas() {
        return clicarMenuListar();
    }

    editarContaSucesso() {
        clicarMenuListar();
        cy.get(elementos.CONTA.botaoEditar).first().click();
        cy.get(elementos.CONTA.campoNomeConta)
            .clear()
            .type(faker.name.findName());
        clicarBotaoSalvar();
    }

    excluirContaSucesso() {
        clicarMenuListar();
        cy.get(elementos.CONTA.botaoExcluir).eq(4).click();
    }

};

export function getMsg() {
    return cy.get(elementos.CONTA.alertMsg);
}

export function getTabelaContas() {
    return cy.get(elementos.CONTA.tabelaContas);
}

function clicarMenuAdicionar() {
    cy.get(elementos.CONTA.menuConta)
        .click();
    cy.get(elementos.CONTA.menuAdicionar)
        .click()
};

export function clicarMenuListar() {
    cy.get(elementos.CONTA.menuConta)
        .click();
    cy.get(elementos.CONTA.menuListar)
        .click()
};

function clicarBotaoSalvar() {
    cy.get(elementos.CONTA.botaoSalvar).click();
};