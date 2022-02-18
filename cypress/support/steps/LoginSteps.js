import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps';

import LoginPage from "../pages/LoginPage";
const loginPage = new LoginPage();

Given("acesso o site Ranking", () => {
  loginPage.acessarSite();
});

And("acesso a pagina de login", () => {
  loginPage.clicarBotaoPaginaLogin();
});

And("preencho os dados de login", () => {
  loginPage.preencherDadosLogin(Cypress.env("user"), Cypress.env("pwd"))
});

And("preencho os dados de login incorretamente", () => {
  loginPage.preencherDadosLogin(Cypress.env("user"), "teste")
});

When("clico no botao Acessar", () => {
  loginPage.clicarBotaoLogin();
});

Then("devo acessar o sistema", () => {
  loginPage.visualizarBotaoUsuario(); 
})

Then("devo visualizar mensagem de erro do sistema", () => {
  loginPage.visualizarMensagemErroLogin();
})
