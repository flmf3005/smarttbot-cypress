/* global Given, Then, When */

import LoginPage from "../pages/LoginPage";
const loginPage = new LoginPage();

Given("acesso o site Ranking", () => {
  loginPage.acessarSite();
});

When("acesso a pagina de login", () => {
  loginPage.clicarBotaoPaginaLogin();
});

Then("devo visualizar botao de recuperar senha esquecida", () => {
  loginPage.visualizarBotaoRecuperarSenha();
});
