/// <reference types="Cypress" />

import LoginElements from "../elements/LoginElements";
const loginElements = new LoginElements();
const url = Cypress.config("baseUrl");

class LoginPage {
  // Acessa o site que será testado
  acessarSite() {
    cy.visit(url);
  }

  // Clica no botão que acessa a página de login do site
  clicarBotaoPaginaLogin() {
    cy.get(loginElements.botaoLogin());
  }

  // Verifica se o botão tem o texto "Esqueceu sua senha?"
  visualizarBotaoRecuperarSenha() {
    expect(
      cy.get(loginElements.botaoRecuperarSenha()).should(
      "contain",
      "Esqueceu a senha?"
    )).to.exist;
  }
}

export default LoginPage;
