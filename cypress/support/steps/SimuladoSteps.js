import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps';

import LoginPage from "../pages/LoginPage";
import SimuladoPage from "../pages/SimuladoPage";
const loginPage = new LoginPage();
const simuladoPage = new SimuladoPage();

Given("faço login no site Ranking", () => {
    loginPage.login();
    loginPage.visualizarBotaoUsuario();
})

And("copio robo Heitor Villa-Lobos", () => {
    simuladoPage.copiarRobo();
})

When("acesso a pagina de ranking", () => {
    simuladoPage.acessarRanking();
})

And("clico no botao copiar robo Heitor Villa-Lobos", () => {
    simuladoPage.clicarCopiarHeitorVillaLobos();
})

And("clico no botao Modo Simulado", () => {
    simuladoPage.clicarModoSimulado();
})

And("clico no botao Próxima Etapa", () => {
    simuladoPage.clicarProximaEtapa();
})

When("clico em Iniciar", () => {
    simuladoPage.clicarIniciar();
})

Then("devo visualizar mensagem de sucesso", () => {
    simuladoPage.visualizarMensagemSucesso();
})

Then("devo visualizar mensagem de execução", () => {
    simuladoPage.visualizarMensagemExecucao();
})