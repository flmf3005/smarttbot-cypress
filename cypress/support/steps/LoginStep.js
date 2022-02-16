/* global Given, Then, When */

import LoginPage from "../pages/LoginPage";
const loginPage = new LoginPage();

Given("acesso o site Ranking", () => {
  loginPage.acessarSite();
});

When("acesso a pagina de login", () => {
  loginPage.clicarBotaoPaginaLogin();
});

And("preencho os dados de login", () => {
  loginPage.preencherDadosLogin(Cypress.env("user"), Cypress.env("pwd"))
});

And("preencho os dados de login incorretamente", () => {
  loginPage.preencherDadosLogin("qateste", "teste")
});

And("clico no botao Acessar", () => {
  loginPage.clicarBotaoLogin();
});

Then("devo visualizar botao de recuperar senha esquecida", () => {
  loginPage.visualizarBotaoRecuperarSenha();
});

Then("devo acessar o sistema", () => {
  loginPage.visualizarBotaoUsuario(); 
})

Then("devo visualizar mensagem de erro do sistema", () => {
  loginPage.visualizarMensagemErroLogin();
})
