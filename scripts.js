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

    // Verifica se estamos na página jogo.html
    if (window.location.pathname.includes("jogo.html")) {
        // Estados do jogo com caminhos diferentes
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
                title: "Cena do Crime",
                subtitle: "Capítulo 1",
                description: "Você chega à Altaris Corp e encontra a cena do crime. Há marcas de luta, um bilhete rasgado e uma arma no chão. O delegado Vinicius está esperando por você.",
                buttons: [
                    { id: "acao1-btn", text: "Analisar o bilhete", nextState: "analyzeNote" },
                    { id: "acao2-btn", text: "Examinar a arma", nextState: "examineWeapon" }
                ]
            },
            backgroundCheck: {
                title: "Investigação de Antecedentes",
                subtitle: "Capítulo 1",
                description: "Você descobre que Breno estava envolvido em negócios obscuros. Há registros de transações suspeitas e contatos com pessoas perigosas.",
                buttons: [
                    { id: "acao1-btn", text: "Seguir uma pista financeira", nextState: "financialTrail" },
                    { id: "acao2-btn", text: "Interrogar um contato suspeito", nextState: "interrogateContact" }
                ]
            },
            analyzeNote: {
                title: "Análise do Bilhete",
                subtitle: "Capítulo 2",
                description: "O bilhete contém uma mensagem enigmática: 'A verdade está no cofre'. Isso pode ser uma pista importante.",
                buttons: [
                    { id: "acao1-btn", text: "Procurar o cofre", nextState: "findSafe" },
                    { id: "acao2-btn", text: "Confrontar o delegado", nextState: "confrontVinicius" }
                ]
            },
            examineWeapon: {
                title: "Exame da Arma",
                subtitle: "Capítulo 2",
                description: "A arma tem impressões digitais que não correspondem a Breno. Isso levanta novas suspeitas.",
                buttons: [
                    { id: "acao1-btn", text: "Investigar as impressões digitais", nextState: "fingerprintInvestigation" },
                    { id: "acao2-btn", text: "Procurar outras pistas na cena", nextState: "searchScene" }
                ]
            }
            // Adicione mais estados conforme necessário
        };

        // Estado atual do jogo
        let currentState = "start";

        // Função para atualizar o conteúdo da página
        function updateGameState() {
            const state = gameStates[currentState];

            // Atualiza o título
            const titleElement = document.querySelector("h1");
            titleElement.textContent = state.title;

            // Atualiza o subtítulo
            const subtitleElement = document.querySelector(".subtitle");
            subtitleElement.textContent = state.subtitle;

            // Atualiza a descrição
            const descriptionElement = document.querySelector(".case-intro p");
            descriptionElement.textContent = state.description;

            // Atualiza os botões
            const buttonsContainer = document.querySelector(".settings");
            buttonsContainer.innerHTML = ""; // Limpa os botões existentes

            state.buttons.forEach(button => {
                const btn = document.createElement("button");
                btn.id = button.id;
                btn.className = "btn";
                btn.textContent = button.text;
                btn.addEventListener("click", () => {
                    currentState = button.nextState; // Atualiza o estado atual com base na escolha
                    updateGameState(); // Atualiza a interface
                });
                buttonsContainer.appendChild(btn);
            });
        }

        // Inicializa o estado inicial do jogo
        updateGameState();
    }
});