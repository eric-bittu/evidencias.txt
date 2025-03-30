import { gameStates } from './modules/gameState.js';

// Aplica o tema salvo no localStorage
const savedTheme = localStorage.getItem('theme') || 'dark';
document.body.className = savedTheme + '-mode';

document.addEventListener("DOMContentLoaded", () => {
    const themeToggleButton = document.getElementById('theme-toggle');
    if (themeToggleButton) {
        themeToggleButton.addEventListener('click', function () {
            document.body.classList.toggle('light-mode');
            document.body.classList.toggle('dark-mode');

            const currentTheme = document.body.classList.contains('light-mode') ? 'light' : 'dark';
            localStorage.setItem('theme', currentTheme);
        });
    }

    const startButton = document.getElementById('start-btn');
    if (startButton) {
        startButton.addEventListener('click', function () {
            window.location.href = "jogo.html";
        });
    }

    let currentState = localStorage.getItem("gameState") || "start";

    function updateGameState() {
        console.log("Estado atual:", currentState);
        const state = gameStates[currentState];
        console.log("Estado carregado:", state);
    
        if (!state) {
            console.error("Estado não encontrado:", currentState);
            return;
        }
    
        const titleElement = document.querySelector("h1");
        titleElement.textContent = state.title;
    
        const subtitleElement = document.querySelector(".subtitle");
        subtitleElement.textContent = state.subtitle;
    
        const descriptionElement = document.querySelector(".case-intro p");
        descriptionElement.textContent = state.description;
    
        const buttonsContainer = document.querySelector(".settings");
        buttonsContainer.innerHTML = ""; // Limpa os botões anteriores
    
        state.buttons.forEach(button => {
            console.log("Criando botão:", button);
            const btn = document.createElement("button");
            btn.id = button.id;
            btn.className = "btn";
            btn.textContent = button.text;
            btn.addEventListener("click", () => {
                console.log("Botão clicado:", button.id);
                currentState = button.nextState;
                localStorage.setItem("gameState", currentState);
                updateGameState();
            });
            buttonsContainer.appendChild(btn);
        });
    }
    if (window.location.pathname.includes("jogo.html")) {
        updateGameState();
    }
});