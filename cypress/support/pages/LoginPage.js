/// <reference types="Cypress" />

//Elements
const botaoLogin = ":nth-child(2) > a";
const botaoRecuperarSenha = ".jss13";
const textUsername = "[id=login-username]";
const textSenha = "[id=login-password]";
const botaoAcessar = "[id=login-button]";
const botaoUsuario = ".jss126";
const mensagemErro = ".notifications-tr"

//Global Variables
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

  clicarBotaoLogin(){
    cy.get(botaoAcessar).click();
  }

  preencherDadosLogin(user, pwd) {
    cy.get(textUsername).type(user);
    cy.get(textSenha).type(pwd);
  }

  visualizarBotaoUsuario() {
    expect(cy.get(botaoUsuario)).to.exist;
  }

  visualizarMensagemErroLogin() {
    expect(cy.get(mensagemErro)).to.exist;
  }
}

export default LoginPage;
