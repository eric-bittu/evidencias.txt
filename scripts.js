document.addEventListener("DOMContentLoaded", () => {
    // Verifica preferência salva
    const savedTheme = localStorage.getItem('theme') || 'dark';
    document.body.className = savedTheme + '-mode';

    // Atualiza texto do botão
    updateButtonText();

    // Alternador de tema
    const themeToggleButton = document.getElementById('theme-toggle');
    if (themeToggleButton) {
        themeToggleButton.addEventListener('click', function () {
            document.body.classList.toggle('light-mode');
            document.body.classList.toggle('dark-mode');

            const currentTheme = document.body.classList.contains('light-mode') ? 'light' : 'dark';
            localStorage.setItem('theme', currentTheme);

            updateButtonText();
        });
    }

    function updateButtonText() {
        const isDark = document.body.classList.contains('dark-mode');
        const themeToggleButton = document.getElementById('theme-toggle');
        if (themeToggleButton) {
            themeToggleButton.textContent = isDark ? 'MODO CLARO ☀️' : 'MODO ESCURO 🌙';
        }
    }

    // Inicia o jogo
    const startButton = document.getElementById('start-btn');
    if (startButton) {
        startButton.addEventListener('click', function () {
            window.location.href = "jogo.html";
        });
    }

    // Efeito de máquina de escrever
    const subtitle = document.querySelector('.subtitle');
    if (subtitle) {
        const originalText = subtitle.textContent;
        subtitle.textContent = '';

        let i = 0;
        const typeWriter = setInterval(() => {
            if (i < originalText.length) {
                subtitle.textContent += originalText.charAt(i);
                i++;
            } else {
                clearInterval(typeWriter);
            }
        }, 50);
    }

    if (window.location.pathname.includes("jogo.html")) {
        const gameStates = {
            start: {
                title: "Ligação",
                subtitle: "Prólogo",
                description: "Você recebe uma ligação do delegado Vinicius no meio da madrugada. Ele informa, com urgência, sobre o assassinato de Breno, um empresário influente encontrado morto em seu escritório. A cena do crime é estranha, as pistas são escassas, e sua presença na sede da Altaris Corp é requisitada imediatamente.",
                buttons: [
                    { id: "acao1-btn", text: "Ir para a cena do crime", nextState: "crimeScene" },
                    { id: "acao2-btn", text: "Investigar antecedentes de Breno", nextState: "backgroundCheck" }
                ]
            },
            crimeScene: {
                title: "Chegada ao Local do Crime",
                subtitle: "Capítulo 1",
                description: "O detetive Bruno Marroquino chega ao escritório de Breno. O ambiente está marcado pela luta. O corpo de Breno está caído perto de sua mesa, e a cena mostra evidências de que algo foi encoberto.",
                buttons: [
                    { id: "acao1-btn", text: "Examinar a cena do crime", nextState: "examineScene" },
                    { id: "acao2-btn", text: "Interrogar testemunhas", nextState: "interrogateWitnesses" },
                    { id: "acao3-btn", text: "Verificar câmeras de segurança", nextState: "checkCameras" }
                ]
            },
            examineScene: {
                title: "Examinando a Cena do Crime",
                subtitle: "Capítulo 2",
                description: "Você encontra várias pistas: uma garrafa de uísque quebrada com sangue, uma carta parcialmente queimada, pegadas próximas à janela, e o anel de Felipe no chão.",
                buttons: [
                    { id: "acao1-btn", text: "Investigar Felipe", nextState: "investigateFelipe" },
                    { id: "acao2-btn", text: "Analisar o histórico de chamadas", nextState: "callHistory" }
                ]
            },
            interrogateWitnesses: {
                title: "Interrogando Testemunhas",
                subtitle: "Capítulo 2",
                description: "Uma testemunha menciona que Marcos foi visto perto do escritório de Breno na noite do crime.",
                buttons: [
                    { id: "acao1-btn", text: "Investigar Marcos", nextState: "investigateMarcos" },
                    { id: "acao2-btn", text: "Procurar mais testemunhas", nextState: "findMoreWitnesses" }
                ]
            },
            checkCameras: {
                title: "Verificando Câmeras de Segurança",
                subtitle: "Capítulo 2",
                description: "As imagens foram apagadas, indicando que alguém tentou esconder evidências. Melina, que tem acesso ao sistema, se torna suspeita.",
                buttons: [
                    { id: "acao1-btn", text: "Investigar Melina", nextState: "investigateMelina" },
                    { id: "acao2-btn", text: "Tentar recuperar as imagens", nextState: "recoverFootage" }
                ]
            },
            backgroundCheck: {
                title: "Investigando Antecedentes de Breno",
                subtitle: "Capítulo 1",
                description: "Você decide investigar o passado de Breno. Conversando com pessoas próximas e analisando registros, você descobre que ele tinha segredos que podem ser cruciais para o caso.",
                buttons: [
                    { id: "acao1-btn", text: "Conversar com o pai de Breno", nextState: "talkToFather" },
                    { id: "acao2-btn", text: "Investigar negócios suspeitos", nextState: "shadyBusiness" }
                ]
            },
            talkToFather: {
                title: "Conversa com o Pai de Breno",
                subtitle: "Capítulo 2",
                description: "O pai de Breno revela que ele mudou nos últimos anos, afastando-se da família e se envolvendo em negócios obscuros. Ele também menciona uma antiga briga com Felipe.",
                buttons: [
                    { id: "acao1-btn", text: "Investigar a briga com Felipe", nextState: "felipeConflict" },
                    { id: "acao2-btn", text: "Explorar negócios sombrios", nextState: "shadyBusiness" }
                ]
            },
            felipeConflict: {
                title: "A Briga com Felipe",
                subtitle: "Capítulo 3",
                description: "Você descobre que Felipe, antigo amigo de Breno, nunca superou uma briga do passado. Isso gerou ressentimento e ciúmes que podem ter motivado o crime.",
                buttons: [
                    { id: "acao1-btn", text: "Confrontar Felipe", nextState: "investigateFelipe" },
                    { id: "acao2-btn", text: "Investigar mais sobre a amizade", nextState: "friendshipDetails" }
                ]
            },
            investigateFelipe: {
                title: "Investigando Felipe",
                subtitle: "Capítulo 3",
                description: "Felipe, o melhor amigo de Breno, parece perturbado. Ele tem um álibi fraco e evita olhar nos olhos do detetive.",
                buttons: [
                    { id: "acao1-btn", text: "Pressionar Felipe", nextState: "pressFelipe" },
                    { id: "acao2-btn", text: "Investigar o celular de Felipe", nextState: "felipePhone" }
                ]
            },
            pressFelipe: {
                title: "Pressionando Felipe",
                subtitle: "Capítulo 4",
                description: "Felipe revela que descobriu sobre o caso de Breno com Bruno Coreano e admite que se sentia rejeitado, mas nega envolvimento no crime.",
                buttons: [
                    { id: "acao1-btn", text: "Confrontar Felipe com o anel", nextState: "confrontFelipe" },
                    { id: "acao2-btn", text: "Investigar mais sobre Bruno Coreano", nextState: "investigateBrunoCoreano" }
                ]
            },
            investigateMarcos: {
                title: "Investigando Marcos",
                subtitle: "Capítulo 3",
                description: "Marcos, sócio de Breno, está visivelmente desconfortável. Ele foi visto saindo da empresa na noite do crime e pode ter um álibi falso.",
                buttons: [
                    { id: "acao1-btn", text: "Investigar registros financeiros", nextState: "financialRecords" },
                    { id: "acao2-btn", text: "Verificar o álibi de Marcos", nextState: "verifyMarcosAlibi" }
                ]
            },
            investigateMelina: {
                title: "Investigando Melina",
                subtitle: "Capítulo 3",
                description: "Melina, sócia de Breno, tem acesso ao sistema de câmeras e pode estar tentando esconder algo.",
                buttons: [
                    { id: "acao1-btn", text: "Investigar sistema de câmeras", nextState: "cameraSystem" },
                    { id: "acao2-btn", text: "Confrontar Melina sobre os desvios financeiros", nextState: "confrontMelina" }
                ]
            },
            finalConfrontation: {
                title: "Confrontação Final",
                subtitle: "Capítulo 5",
                description: "Com base nas suas escolhas, você agora pode confrontar o principal suspeito e resolver o caso.",
                buttons: [
                    { id: "acao1-btn", text: "Acusar Felipe", nextState: "felipeEnding" },
                    { id: "acao2-btn", text: "Acusar Marcos", nextState: "marcosEnding" },
                    { id: "acao3-btn", text: "Acusar Melina", nextState: "melinaEnding" }
                ]
            },
            felipeEnding: {
                title: "Final: Felipe é o Assassino",
                subtitle: "Desfecho",
                description: "Felipe, consumido pelo ciúme e ressentimento, confessa o crime. Você resolve o caso com sucesso.",
                buttons: [
                    { id: "acao1-btn", text: "Início", nextState: "start" }
                ]
            },
            
            marcosEnding: {
                title: "Final: Marcos Não é o Assassino",
                subtitle: "Desfecho",
                description: "Após confrontar Marcos, você descobre que ele estava envolvido em desvios financeiros, mas não teve envolvimento no assassinato de Breno. Ele é inocentado.",
                buttons: [
                    { id: "acao1-btn", text: "Início", nextState: "start" }
                ]
            },
            
            melinaEnding: {
                title: "Final: Melina Não é a Assassina",
                subtitle: "Desfecho",
                description: "Melina admite ter apagado as imagens para proteger a empresa, mas não teve envolvimento no assassinato de Breno. Ela é inocentada.",
                buttons: [
                    { id: "acao1-btn", text: "Início", nextState: "start" }
                ]
            },
            wrongAccusation: {
                title: "Final: Acusação Errada",
                subtitle: "Desfecho",
                description: "Você acusou a pessoa errada. O verdadeiro culpado escapa, e o caso permanece sem solução.",
                buttons: [{ id: "acao1-btn", text: "Início", nextState: "start" }]
            },
            detectiveDeath: {
                title: "Final: O Detetive Morre",
                subtitle: "Desfecho",
                description: "Durante a investigação, você comete um erro fatal e é morto pelo verdadeiro culpado.",
                buttons: [{ id: "acao1-btn", text: "Início", nextState: "start" }]
            },
            // Fase: Analisar o Histórico de Chamadas
            callHistory: {
                title: "Analisando o Histórico de Chamadas",
                subtitle: "Capítulo 2",
                description: "Você analisa o histórico de chamadas no telefone de Breno e descobre ligações frequentes para Felipe e Bruno Coreano. Isso pode ser uma pista importante.",
                buttons: [
                    { id: "acao1-btn", text: "Investigar Felipe", nextState: "investigateFelipe" },
                    { id: "acao2-btn", text: "Investigar Bruno Coreano", nextState: "investigateBrunoCoreano" }
                ]
            },

            // Fase: Procurar Mais Testemunhas
            findMoreWitnesses: {
                title: "Procurando Mais Testemunhas",
                subtitle: "Capítulo 2",
                description: "Você conversa com mais funcionários da empresa e descobre que Melina foi vista entrando no escritório de Breno na noite do crime.",
                buttons: [
                    { id: "acao1-btn", text: "Investigar Melina", nextState: "investigateMelina" },
                    { id: "acao2-btn", text: "Verificar câmeras de segurança", nextState: "checkCameras" }
                ]
            },

            // Fase: Recuperar as Imagens
            recoverFootage: {
                title: "Tentando Recuperar as Imagens",
                subtitle: "Capítulo 3",
                description: "Você tenta recuperar as imagens apagadas do sistema de segurança, mas descobre que apenas alguém com acesso administrativo poderia ter feito isso.",
                buttons: [
                    { id: "acao1-btn", text: "Confrontar Melina", nextState: "confrontMelina" },
                    { id: "acao2-btn", text: "Investigar sistema de câmeras", nextState: "cameraSystem" }
                ]
            },

            // Fase: Investigar o Celular de Felipe
            felipePhone: {
                title: "Investigando o Celular de Felipe",
                subtitle: "Capítulo 4",
                description: "Você encontra mensagens de texto no celular de Felipe que mostram ciúmes e raiva em relação a Breno. Isso pode ser uma pista importante.",
                buttons: [
                    { id: "acao1-btn", text: "Confrontar Felipe", nextState: "confrontFelipe" },
                    { id: "acao2-btn", text: "Investigar mais sobre Bruno Coreano", nextState: "investigateBrunoCoreano" }
                ]
            },

            // Fase: Verificar o Álibi de Marcos
            verifyMarcosAlibi: {
                title: "Verificando o Álibi de Marcos",
                subtitle: "Capítulo 4",
                description: "Você descobre que o álibi de Marcos não se sustenta. Ele mentiu sobre onde estava na noite do crime.",
                buttons: [
                    { id: "acao1-btn", text: "Confrontar Marcos", nextState: "confrontMarcos" },
                    { id: "acao2-btn", text: "Investigar registros financeiros", nextState: "financialRecords" }
                ]
            },

            // Fase: Confrontar Marcos
            confrontMarcos: {
                title: "Confrontando Marcos",
                subtitle: "Capítulo 5",
                description: "Marcos admite que estava em dificuldades financeiras e que Breno estava prestes a afastá-lo da empresa. Ele nega envolvimento no crime, mas suas motivações são suspeitas.",
                buttons: [
                    { id: "acao1-btn", text: "Acusar Marcos", nextState: "marcosEnding" },
                    { id: "acao2-btn", text: "Investigar mais registros financeiros", nextState: "financialRecords" }
                ]
            },

            // Fase: Sistema de Câmeras
            cameraSystem: {
                title: "Investigando o Sistema de Câmeras",
                subtitle: "Capítulo 4",
                description: "Você descobre que Melina acessou o sistema de câmeras na noite do crime e apagou as imagens. Isso a torna uma suspeita chave.",
                buttons: [
                    { id: "acao1-btn", text: "Confrontar Melina", nextState: "confrontMelina" },
                    { id: "acao2-btn", text: "Investigar mais sobre Melina", nextState: "investigateMelina" }
                ]
            },

            // Fase: Investigar Bruno Coreano
            investigateBrunoCoreano: {
                title: "Investigando Bruno Coreano",
                subtitle: "Capítulo 4",
                description: "Bruno Coreano, um antigo parceiro de negócios de Breno, tinha motivos para querer sua morte. Ele estava envolvido em um esquema de corrupção que Breno ameaçou expor.",
                buttons: [
                    { id: "acao1-btn", text: "Confrontar Bruno Coreano", nextState: "confrontBrunoCoreano" },
                    { id: "acao2-btn", text: "Investigar mais sobre os negócios", nextState: "shadyBusiness" }
                ]
            },

            // Fase: Confrontar Bruno Coreano
            confrontBrunoCoreano: {
                title: "Confrontando Bruno Coreano",
                subtitle: "Capítulo 5",
                description: "Bruno Coreano admite que estava sendo chantageado por Breno, mas nega envolvimento no assassinato. Ele sugere que Melina pode estar envolvida.",
                buttons: [
                    { id: "acao1-btn", text: "Investigar Melina", nextState: "investigateMelina" },
                    { id: "acao2-btn", text: "Acusar Bruno Coreano", nextState: "wrongAccusation" }
                ]
            },

            // Fase: Confrontar Melina
            confrontMelina: {
                title: "Confrontando Melina",
                subtitle: "Capítulo 5",
                description: "Melina admite que apagou as imagens, mas afirma que foi para proteger a empresa. Ela nega envolvimento no assassinato, mas suas motivações são suspeitas.",
                buttons: [
                    { id: "acao1-btn", text: "Acusar Melina", nextState: "melinaEnding" },
                    { id: "acao2-btn", text: "Investigar mais sobre Melina", nextState: "investigateMelina" }
                ]
            },

            // Fase: Registros Financeiros
            financialRecords: {
                title: "Investigando Registros Financeiros",
                subtitle: "Capítulo 4",
                description: "Você encontra transações suspeitas que mostram que Marcos desviou dinheiro da empresa. Isso pode ser uma pista importante.",
                buttons: [
                    { id: "acao1-btn", text: "Confrontar Marcos", nextState: "confrontMarcos" },
                    { id: "acao2-btn", text: "Investigar mais sobre os desvios", nextState: "shadyBusiness" }
                ]
            },
            // Fase: Investigar Mais Sobre a Amizade
            friendshipDetails: {
                title: "Investigando Mais Sobre a Amizade",
                subtitle: "Capítulo 3",
                description: "Você descobre que a amizade entre Breno e Felipe foi marcada por altos e baixos, com momentos de confiança e traição. Felipe parece guardar ressentimentos profundos.",
                buttons: [
                    { id: "acao1-btn", text: "Confrontar Felipe", nextState: "investigateFelipe" },
                    { id: "acao2-btn", text: "Investigar mais sobre o passado de Breno", nextState: "backgroundCheck" }
                ]
            },

            // Fase: Explorar Negócios Sombrios
            shadyBusiness: {
                title: "Explorando Negócios Sombrios",
                subtitle: "Capítulo 3",
                description: "Você descobre que Breno estava envolvido em negócios arriscados e possivelmente ilegais. Isso pode ter gerado inimigos perigosos.",
                buttons: [
                    { id: "acao1-btn", text: "Investigar empresas suspeitas", nextState: "businessInvestigation" },
                    { id: "acao2-btn", text: "Conversar com antigos parceiros", nextState: "partnerInterviews" }
                ]
            },

            // Fase: Investigar Empresas Suspeitas
            businessInvestigation: {
                title: "Investigando Empresas Suspeitas",
                subtitle: "Capítulo 4",
                description: "Você encontra contratos e documentos que ligam Breno a figuras do submundo financeiro. Isso pode ser uma pista importante.",
                buttons: [
                    { id: "acao1-btn", text: "Investigar figuras do submundo", nextState: "underworldFigures" },
                    { id: "acao2-btn", text: "Confrontar Melina sobre os negócios", nextState: "confrontMelina" }
                ]
            },

            // Fase: Conversar com Antigos Parceiros
            partnerInterviews: {
                title: "Conversando com Antigos Parceiros",
                subtitle: "Capítulo 4",
                description: "Você conversa com antigos parceiros de Breno e descobre que ele estava sendo pressionado por dívidas e ameaças de figuras perigosas.",
                buttons: [
                    { id: "acao1-btn", text: "Investigar figuras do submundo", nextState: "underworldFigures" },
                    { id: "acao2-btn", text: "Investigar registros financeiros", nextState: "financialRecords" }
                ]
            },

            // Fase: Investigar Figuras do Submundo
            underworldFigures: {
                title: "Investigando Figuras do Submundo",
                subtitle: "Capítulo 5",
                description: "Você descobre que Breno estava sendo ameaçado por figuras perigosas do submundo financeiro. Isso pode ter levado ao seu assassinato.",
                buttons: [
                    { id: "acao1-btn", text: "Confrontar suspeitos", nextState: "finalConfrontation" },
                    { id: "acao2-btn", text: "Investigar mais pistas", nextState: "crimeScene" }
                ]
            },

            // Fase: Confrontar Felipe com o Anel
            confrontFelipe: {
                title: "Confrontando Felipe com o Anel",
                subtitle: "Capítulo 5",
                description: "Você apresenta o anel encontrado na cena do crime. Felipe fica nervoso e começa a se contradizer, levantando ainda mais suspeitas.",
                buttons: [
                    { id: "acao1-btn", text: "Acusar Felipe", nextState: "felipeEnding" },
                    { id: "acao2-btn", text: "Investigar mais sobre Bruno Coreano", nextState: "investigateBrunoCoreano" }
                ]
            },

            // Fase: Investigar Mais Sobre Melina
            investigateMelina: {
                title: "Investigando Mais Sobre Melina",
                subtitle: "Capítulo 4",
                description: "Você descobre que Melina tinha acesso privilegiado ao sistema de segurança e estava envolvida em desvios financeiros. Isso a torna uma suspeita chave.",
                buttons: [
                    { id: "acao1-btn", text: "Confrontar Melina", nextState: "confrontMelina" },
                    { id: "acao2-btn", text: "Investigar registros financeiros", nextState: "financialRecords" }
                ]
            },
        };

       // Carrega o estado salvo ou começa no estado inicial
        let currentState = localStorage.getItem("gameState") || "start";

        function updateGameState() {
            const state = gameStates[currentState];

            const titleElement = document.querySelector("h1");
            titleElement.textContent = state.title;

            const subtitleElement = document.querySelector(".subtitle");
            subtitleElement.textContent = state.subtitle;

            const descriptionElement = document.querySelector(".case-intro p");
            descriptionElement.textContent = state.description;

            const buttonsContainer = document.querySelector(".settings");
            buttonsContainer.innerHTML = "";

            state.buttons.forEach(button => {
                const btn = document.createElement("button");
                btn.id = button.id;
                btn.className = "btn";
                btn.textContent = button.text;
                btn.addEventListener("click", () => {
                    currentState = button.nextState;
                    localStorage.setItem("gameState", currentState); // Salva o estado atual no localStorage
                    updateGameState();
                });
                buttonsContainer.appendChild(btn);
            });
}

// Chama a função para atualizar o estado inicial
updateGameState();
}});