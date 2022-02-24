/// <reference types="Cypress" />

//Elements
const botaoCopiarHVL =
  "//span[contains(text(),'Heitor Villa-Lobos')]/parent::div/following-sibling::div[2]/div/button[2]";
const botaoModoSimulado = "[id='create-instance-simulated']";
const botaoProximaEtapa = "[id='next-step-button']";
const mensagem = '.notification-message';
const botaoIniciar = "//button[contains(@id, 'simulado_robo_iniciar')]";
const botaoRecusarNotificoes = '#pushActionRefuse';

//Global Variables
const urlRanking = 'https://app.smarttbot.com/private/ranking';

//Actions
class SimuladoPage {
  acessarRanking() {
    cy.visit(urlRanking);
    cy.wait(3000);
  }

  clicarCopiarHeitorVillaLobos() {
    cy.xpath(botaoCopiarHVL).click();
  }

  clicarModoSimulado() {
    cy.get(botaoModoSimulado).click();
  }

  clicarProximaEtapa() {
    cy.get(botaoProximaEtapa).click();
  }

  visualizarMensagemSucesso() {
    cy.get(mensagem).then((mensagem) => {
      expect(mensagem).to.exist;
      expect(mensagem).to.contain('Novo robô criado com sucesso');
    });
    cy.get(mensagem).click();
  }

  copiarRobo() {
    this.acessarRanking();
    this.clicarCopiarHeitorVillaLobos();
    this.clicarModoSimulado();
    this.clicarProximaEtapa();
    this.visualizarMensagemSucesso();
    cy.contains('Ok').click();
    cy.get(botaoRecusarNotificoes).click();
  }

  clicarIniciar() {
    cy.xpath(botaoIniciar).click();
  }

  visualizarMensagemExecucao() {
    cy.get(mensagem).then((mensagem) => {
      expect(mensagem).to.exist;
      expect(mensagem).to.contain('está executando');
    });
  }
}

export default SimuladoPage;
