Feature: Login site Ranking

    Background: Acessar o site Ranking
        Given acesso o site Ranking

    @login
    Scenario: Fazer login com sucesso
        When acesso a pagina de login
        And preencho os dados de login
        And clico no botao Acessar
        Then devo acessar o sistema

    @loginFalha
    Scenario: Realizar login com dados inválidos
        When acesso a pagina de login
        And preencho os dados de login incorretamente
        And clico no botao Acessar
        Then devo visualizar mensagem de erro do sistema

    @recuperarSenha
    Scenario: Visualizar opção de recuperar senha esquecida
        When acesso a pagina de login
        Then devo visualizar botao de recuperar senha esquecida
        