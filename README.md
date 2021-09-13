# Indice
- [Sobre](#-sobre)
- [Tencologias e Ferramentas](#-tecnologicas-e-ferramentas-utilizadas)
- [Como baixar o projeto](#-como-baixar-o-projeto)
---
## 📃 Sobre 

O projeto **ExercicioSeuBarriga---Cypress** é um meio para exercitar testes utlizando Cypress.
A aplicação utilizada foi a de prestação de contas do [Seu Barriga](https://seubarriga.wcaquino.me/).

Contem as validações:
- Criação de Conta:
   * Quando nenhum nome é informado para criar conta, validar que a mensagem "Informe o nome da conta" é retornada.
   * Mensagem de conta criada com sucesso.
   * Apresentação das contas cadastradas no listar.  
   * Mensagem de sucesso na alteração da conta.
   * Mensagem de conta removida com sucesso. 
    
- Criação de Movimentação
  * Mensagem de obrigatoriedade dos campos: data da movimentação, data do pagamento, descrição, interessado e valor.
  * Mensagem de erro no campo valor para caracteres diferentes de números.
  * Mensagem movimentação criada com sucesso.
  * Na tela de resumo mensal, validar a apresentação da movimentação cadastrada.  

---
## 🚀 Tecnologicas e ferramentas utilizadas
O projeto foi desenvolvido utilizando as tecnologias e ferramentas:
- [Cypress](https://www.cypress.io/)
- Javascript
- VsCode
- Biblioteca [Faker.js](https://github.com/Marak/faker.js)
---
## 📦 Como baixar o projeto
```bash    
#clonar o projeto de teste da aplicação
    git clone https://github.com/GreccoGM/ExercicioSeuBarriga---Cypress.git
```
