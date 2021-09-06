import faker from 'faker'
faker.locale = "pt_BR";


const menuResumoMensal = ':nth-child(4) > a';
const colunaDescricao = 'tbody > tr > :nth-child(1)';

export class ResumoMensal {

    acessarMenu() {
        cy.get(menuResumoMensal).click();
    }

    getDescricao() {
        return cy.get(colunaDescricao);
    }

}