Feature: Robos Ranking Modo Simulado

    Background: Fazer login no site Ranking
        Given faço login no site Ranking

    Scenario: Copiar robo Heitor Villa-Lobos
        When acesso a pagina de ranking
        And clico no botao copiar robo Heitor Villa-Lobos
        And clico no botao Modo Simulado
        And clico no botao Próxima Etapa
        Then devo visualizar mensagem de sucesso
    
    Scenario: Executar robo previamente copiado
        And copio robo Heitor Villa-Lobos
        When clico em Iniciar
        Then devo visualizar mensagem de execução