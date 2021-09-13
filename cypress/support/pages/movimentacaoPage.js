import faker from 'faker';
import elementos from "../../support/elementos";

export class MovimentacaoPage {

    acessarMenu() {
        cy.get(elementos.MOVIMENTACAO.menuMovimentacao).click();
    };

    validarCampoDataMovimentacao() {
        preencherCampos();
        cy.get(elementos.MOVIMENTACAO.dataMovimentacao).clear();
        salvarMovimentacao();
    }

    validarCampoDataPagamento() {
        preencherCampos();
        cy.get(elementos.MOVIMENTACAO.dataPagamento).clear();
        salvarMovimentacao();
    }

    validarCampoDescricao() {
        preencherCampos();
        cy.get(elementos.MOVIMENTACAO.descricao).clear();
        salvarMovimentacao();
    }

    validarCampoInteressado() {
        preencherCampos();
        cy.get(elementos.MOVIMENTACAO.interessado).clear();
        salvarMovimentacao();
    }

    validarCampoValor() {
        preencherCampos();
        cy.get(elementos.MOVIMENTACAO.valor).clear();
        salvarMovimentacao();
    }

    validarTipoCampoValor() {
        preencherCampos();
        cy.get(elementos.MOVIMENTACAO.valor).clear();
        cy.get(elementos.MOVIMENTACAO.valor).type("mil e quinhentos")
        salvarMovimentacao();
    }

    salvarMovimentacaoSucesso() {
        preencherCampos();
        salvarMovimentacao();
    }

}

function preencherCampos() {
    cy.get(elementos.MOVIMENTACAO.tipo).select("Despesa")
    cy.get(elementos.MOVIMENTACAO.dataMovimentacao).type("01/09/2021")
    cy.get(elementos.MOVIMENTACAO.dataPagamento).type("02/09/2021")
    cy.get(elementos.MOVIMENTACAO.descricao).type(faker.random.word())
    cy.get(elementos.MOVIMENTACAO.interessado).type(faker.name.firstName())
    cy.get(elementos.MOVIMENTACAO.valor).type(faker.datatype.float())
    cy.get(elementos.MOVIMENTACAO.conta).select("MovimentacaoTeste")
    cy.get(elementos.MOVIMENTACAO.statusPendente).click()
}

export function salvarMovimentacao() {
    cy.get(elementos.MOVIMENTACAO.botaoSalvar).click();
}

export function getMsgLista() {
    //'.alert > ul > :nth-child(1)'
    //let vetor; let i = 0;


    return cy.get(elementos.MOVIMENTACAO.alertMsgLista)
    /*cy.get('.alert > ul >li')
        .each(() => {
            vetor = cy.get('.alert > ul > :nth-child(' + i + ')')
            console.log(i)
            i++;
        })

    console.log("vetor", vetor)*/
    //return vetor;
}

export function getMsg() {
    return cy.get(elementos.MOVIMENTACAO.alertMsg);
}

