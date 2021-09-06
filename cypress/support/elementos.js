const elementos = {
    LOGIN: {
        email: "#email",
        senha: "#senha",
        botaoLogin: ".btn"
    },

    MOVIMENTACAO: {
        botaoSalvar: '.btn',
        menuMovimentacao: ':nth-child(3) > a',
        dataPagamento: '#data_pagamento',
        dataMovimentacao: '#data_transacao',
        descricao: '#descricao',
        interessado: '#interessado',
        valor: '#valor',
        statusPago: '#status_pago',
        statusPendente: '#status_pendente',
        tipo: '#tipo',
        conta: '#conta',

        alertMsg: '.alert',
        alertMsgLista: '.alert > ul > li'
    },

    CONTA: {
        menuConta: '.dropdown-toggle',
        menuAdicionar: '.dropdown-menu > :nth-child(1) > a',
        menuListar: '.dropdown-menu > :nth-child(2) > a',
        campoNomeConta: '#nome',
        botaoSalvar: '.btn',
        botaoEditar: '#tabelaContas > tbody > tr > td > a:nth-child(1)',
        botaoExcluir: '#tabelaContas > tbody > tr > td > a:nth-child(2)',

        alertMsg: '.alert',
        tabelaContas: '#tabelaContas td'
    }
}

export default elementos;