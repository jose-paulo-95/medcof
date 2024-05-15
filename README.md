# Descrição
Este repositório contém testes automatizados usando o Cypress para validar a funcionalidade de pesquisa e a ordenação de datas em uma aplicação web. Certifique-se de seguir as instruções de configuração e execução dos testes para garantir a qualidade do software.

## Como instalar e executar
1. Clone o projeto
2. Rode o comando `npm install` para instalar as dependencias
3. Use npx cypress open 

## How to contribute
After you received your ticket/task, make a new branch from the current train branch with your name and the ticket id code, like `yourName/12345`.

## Pré-requisitos
Antes de executar os testes Cypress, certifique-se de que o seguinte esteja configurado em seu ambiente de desenvolvimento:

- Node.js instalado ([Node.js](https://nodejs.org/))
- Cypress instalado globalmente ou localmente no projeto ([Cypress](https://www.cypress.io/))

## Estrutura do Projeto
O projeto de automação é organizado da seguinte forma:

- `cypress/e2e`: Esta pasta contém os arquivos de teste Cypress.
- `cypress/support`: Aqui esta armazenado, comandos personalizados e elementos separados por pagina.
- `cypress.json`: Arquivo de configuração Cypress para definir configurações globais.

## Testes e Validações Disponíveis

### Validação da Página Inicial
- `validarPaginaInicialCarregada()`: Este teste verifica se a página inicial foi carregada corretamente, verificando a visibilidade de elementos-chave, como ícone de pesquisa, logotipo do cabeçalho e itens do menu.

### Validação do Campo de Pesquisa
- `validarCampoDePesquisa()`: Este teste verifica se o campo de pesquisa é exibido corretamente após clicar no ícone de pesquisa.

### Realização de Pesquisa
- `realizarPesquisa(palavraChave)`: Este teste executa uma pesquisa com a palavra-chave fornecida e verifica se os resultados são exibidos corretamente.

### Validação do Resultado da Pesquisa
- `validarResultadoDaPesquisa(palavraChave)`: Este teste verifica se a página de resultados da pesquisa contém a palavra-chave na URL, no rótulo de resultados e se pelo menos um artigo é exibido.

### Validação da Ordenação de Datas
- `realizarPesquisaSemPalavraChave()`: Este teste executa uma pesquisa sem uma palavra-chave específica.
- `validarResultadoComAsDatasEmOrdem()`: Este teste verifica se as datas dos resultados da pesquisa estão em ordem decrescente.

