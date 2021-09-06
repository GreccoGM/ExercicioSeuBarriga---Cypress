import faker from 'faker';
import elementos from "../../support/elementos";

export class MovimentacaoPage {

    acessarMenu() {
        cy.get(elementos.MOVIMENTACAO.menuMovimentacao).click();
    };

    salvarSemPreencherCampos() {
        return salvarMovimentacao();
    };

    validarCampoDataMovimentacao() {
        cy.get(elementos.MOVIMENTACAO.tipo).select("Receita")
        cy.get(elementos.MOVIMENTACAO.dataPagamento).type("19/08/2021")
        cy.get(elementos.MOVIMENTACAO.descricao).type(faker.random.word())
        cy.get(elementos.MOVIMENTACAO.interessado).type(faker.name.firstName())
        cy.get(elementos.MOVIMENTACAO.valor).type(faker.finance.routingNumber())
        cy.get(elementos.MOVIMENTACAO.conta).select("Mathew Lueilwitz")
        cy.get(elementos.MOVIMENTACAO.statusPago).click()
        salvarMovimentacao();
    }

    validarCampoDataPagamento() {
        cy.get(elementos.MOVIMENTACAO.tipo).select("Receita")
        cy.get(elementos.MOVIMENTACAO.dataMovimentacao).type("19/08/2021")
        cy.get(elementos.MOVIMENTACAO.descricao).type(faker.random.word())
        cy.get(elementos.MOVIMENTACAO.interessado).type(faker.name.firstName())
        cy.get(elementos.MOVIMENTACAO.valor).type(faker.finance.routingNumber())
        cy.get(elementos.MOVIMENTACAO.conta).select("Mathew Lueilwitz")
        cy.get(elementos.MOVIMENTACAO.statusPago).click()
        salvarMovimentacao();
    }

    validarCampoDescricao() {
        cy.get(elementos.MOVIMENTACAO.tipo).select("Receita")
        cy.get(elementos.MOVIMENTACAO.dataMovimentacao).type("19/08/2021")
        cy.get(elementos.MOVIMENTACAO.dataPagamento).type("30/08/2021")
        cy.get(elementos.MOVIMENTACAO.interessado).type(faker.name.firstName())
        cy.get(elementos.MOVIMENTACAO.valor).type(faker.finance.routingNumber())
        cy.get(elementos.MOVIMENTACAO.conta).select("Mathew Lueilwitz")
        cy.get(elementos.MOVIMENTACAO.statusPago).click()
        salvarMovimentacao();
    }

    validarCampoInteressado() {
        cy.get(elementos.MOVIMENTACAO.tipo).select("Receita")
        cy.get(elementos.MOVIMENTACAO.dataMovimentacao).type("19/08/2021")
        cy.get(elementos.MOVIMENTACAO.dataPagamento).type("30/08/2021")
        cy.get(elementos.MOVIMENTACAO.descricao).type(faker.random.word())
        cy.get(elementos.MOVIMENTACAO.valor).type(faker.finance.routingNumber())
        cy.get(elementos.MOVIMENTACAO.conta).select("Mathew Lueilwitz")
        cy.get(elementos.MOVIMENTACAO.statusPago).click()
        salvarMovimentacao();
    }

    validarCampoValor() {
        cy.get(elementos.MOVIMENTACAO.tipo).select("Receita")
        cy.get(elementos.MOVIMENTACAO.dataMovimentacao).type("19/08/2021")
        cy.get(elementos.MOVIMENTACAO.dataPagamento).type("30/08/2021")
        cy.get(elementos.MOVIMENTACAO.descricao).type(faker.random.word())
        cy.get(elementos.MOVIMENTACAO.interessado).type(faker.name.firstName())
        cy.get(elementos.MOVIMENTACAO.conta).select("Mathew Lueilwitz")
        cy.get(elementos.MOVIMENTACAO.statusPago).click()
        salvarMovimentacao();
    }

    validarTipoCampoValor() {
        cy.get(elementos.MOVIMENTACAO.tipo).select("Receita")
        cy.get(elementos.MOVIMENTACAO.dataMovimentacao).type("19/08/2021")
        cy.get(elementos.MOVIMENTACAO.dataPagamento).type("30/08/2021")
        cy.get(elementos.MOVIMENTACAO.descricao).type(faker.random.word())
        cy.get(elementos.MOVIMENTACAO.interessado).type(faker.name.firstName())
        cy.get(elementos.MOVIMENTACAO.dataPagamento).select("Mathew Lueilwitz")

        cy.get(elementos.MOVIMENTACAO.valor).type("mil e quinhentos")

        cy.get(elementos.MOVIMENTACAO.statusPago).click()
        salvarMovimentacao();
    }

    salvarMovimentacaoSucesso() {
        cy.get(elementos.MOVIMENTACAO.tipo).select("Despesa")
        cy.get(elementos.MOVIMENTACAO.dataMovimentacao).type("01/09/2021")
        cy.get(elementos.MOVIMENTACAO.dataPagamento).type("02/09/2021")
        cy.get(elementos.MOVIMENTACAO.descricao).type(faker.random.word())
        cy.get(elementos.MOVIMENTACAO.interessado).type(faker.name.firstName())
        cy.get(elementos.MOVIMENTACAO.valor).type(faker.datatype.float())
        cy.get(elementos.MOVIMENTACAO.conta).select("Conta 3Conta AlteradaConta Alterada")
        cy.get(elementos.MOVIMENTACAO.statusPendente).click()
        salvarMovimentacao();
    }

}

function salvarMovimentacao() {
    cy.get(elementos.MOVIMENTACAO.botaoSalvar).click();
}

export function getMsgLista() {
    return cy.get(elementos.MOVIMENTACAO.getMsgLista);
}

export function getMsg() {
    return cy.get(elementos.MOVIMENTACAO.getMsg);
}

export function limparCampos() {
    cy.get(dataMovimentacao).clear();
    cy.get(dataPagamento).clear();
    cy.get(descricao).clear();
    cy.get(interessado).clear();
    cy.get(valor).clear();
}
