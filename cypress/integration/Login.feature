Feature: Login site Ranking

    Background: Acessar o site Ranking
        Given acesso o site Ranking
        And acesso a pagina de login

    Scenario: Fazer login com sucesso
        And preencho os dados de login
        When clico no botao Acessar
        Then devo acessar o sistema

    Scenario: Realizar login com dados inválidos
        And preencho os dados de login incorretamente
        When clico no botao Acessar
        Then devo visualizar mensagem de erro do sistema