# Smarttbot-cypress

---

Projeto criado para execução de Testes Automatizados da plataforma SmarttBot.

## Tecnologias utilizadas

---

Principais tecnologias utilizadas no código.

💻 [Node.js](https://nodejs.org/)

✅ [Cypress](https://www.cypress.io)

❄️ [Cucumber](https://cucumber.io)

---

## Passo a passo para execução dos testes

### Instalação dos node_modules

<!--sec data-title="Prompt: OS X and Linux" data-id="OSX_Linux_prompt" data-collapse=true ces-->

Para conseguir executar o código, os módulos do Node devem ser instalados. Sendo assim, antes de qualquer execução deve ser executado no terminal o seguinte código.

    $ yarn install

<!--endsec-->

### Execução dos testes

Após instalação dos módulos o projeto já estará a disposição para execução.

Alguns comandos foram adicionados no package.json para facilitar a execução.

<!--sec data-title="Prompt: OS X and Linux" data-id="OSX_Linux_prompt" data-collapse=true ces-->

Para executar os testes pelo Test Runner do próprio cypress, basta executar o seguinte comando:

    $ yarn open

<!--endsec-->
<!--sec data-title="Prompt: OS X and Linux" data-id="OSX_Linux_prompt" data-collapse=true ces-->

Para executar os testes em modo headless diretamente pelo terminal basta executar o seguinte comando:

    $ yarn test

<!--endsec-->

Esse comando irá executar os testes pelo navegador padrão do Cypress.

Foram adicionados mais duas opções de execução dos testes nos navegadores Chrome e Edge.

<!--sec data-title="Prompt: OS X and Linux" data-id="OSX_Linux_prompt" data-collapse=true ces-->

Para executar os testes pelo Chrome, basta executar o seguinte comando:

    $ yarn test:chrome

<!--endsec-->

<!--sec data-title="Prompt: OS X and Linux" data-id="OSX_Linux_prompt" data-collapse=true ces-->

Para executar os testes pelo Edge, basta executar o seguinte comando:

    $ yarn test:edge

## <!--endsec-->

## Arquitetura do Projeto

Nesse projeto utilizei o PageObjects como design pattern, desacoplando ao máximo as informações a fim de facilitar o reuso e manutenção mais fácil do projeto.

O projeto ficou estruturado da seguinte forma:

![Estrutura](https://imgur.com/0UEswxN.jpg)

Na pasta _integration_ estão localizadas as features criadas para o projeto.

Para cada uma das features foi criada uma pasta com o mesmo nome, onde estão localizados os arquivos contendo os passos que serão executados conforme os cenários escritos nas features.

Na pasta _support/pages_ estão localizados os arquivos contendo o mapeamento dos elementos e as ações realizadas.

---

## Relatório de execução

Também foi utilizado nesse projeto um pacote node que gera um relatório de execução.

<!--sec data-title="Prompt: OS X and Linux" data-id="OSX_Linux_prompt" data-collapse=true ces-->

Para gerar o relatório, basta executar o seguinte comando:

    $ yarn report

<!--endsec-->

Após executar o comando, o relatório será gerado na pasta _reports_.

Nesse repositório foi salvo um report de exemplo, mas a pasta está sendo ignorada pelo arquivo .gitignore a fim de não gerar um volume excessivo de arquivos.

---

Assim está finalizado o fluxo de todas as atividades propostas no início deste projeto. Faça as devidas referências caso utilize este projeto.

Dúvidas estou à disposição. Valeu!
