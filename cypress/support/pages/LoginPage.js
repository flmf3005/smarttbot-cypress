/// <reference types="Cypress" />

//Elements
const botaoLogin = ":nth-child(2) > a";
const botaoRecuperarSenha = ".jss13";

//Global Consts
const url = Cypress.config("baseUrl");

//Actions
class LoginPage {
  acessarSite() {
    cy.visit(url);
  }

  clicarBotaoPaginaLogin() {
    cy.get(botaoLogin).click();
  }

  visualizarBotaoRecuperarSenha() {
    expect(
      cy.get(botaoRecuperarSenha).should(
      "contain",
      "Esqueceu a senha?"
    )).to.exist;
  }
}

export default LoginPage;
