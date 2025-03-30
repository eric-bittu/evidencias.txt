// Verifica preferência salva
const savedTheme = localStorage.getItem('theme') || 'dark';
document.body.className = savedTheme + '-mode';

// Atualiza texto do botão
updateButtonText();

// Alternador de tema
document.getElementById('theme-toggle').addEventListener('click', function() {
    document.body.classList.toggle('light-mode');
    document.body.classList.toggle('dark-mode');
    
    const currentTheme = document.body.classList.contains('light-mode') ? 'light' : 'dark';
    localStorage.setItem('theme', currentTheme);
    
    updateButtonText();
});

function updateButtonText() {
    const isDark = document.body.classList.contains('dark-mode');
    document.getElementById('theme-toggle').textContent = 
        isDark ? 'MODO CLARO ☀️' : 'MODO ESCURO 🌙';
}

// Inicia o jogo
document.getElementById('start-btn').addEventListener('click', function() {
    window.location.href = "jogo.html";
});

// Efeito de máquina de escrever
const subtitle = document.querySelector('.subtitle');
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