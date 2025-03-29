 base-jogo
const botaoinicio = document.querySelector('#inicio');
if (botaoinicio) {
    botaoinicio.addEventListener('click', () => {
        window.location.href = 'sobre.html';
    });
}

const botaoAlterar = document.querySelector('#alterar-conteudo');
const descricao = document.querySelector('#descricao');
const container = document.querySelector('.container'); // Seleciona o container onde os botões serão adicionados

if (botaoAlterar && descricao && container) {
    botaoAlterar.addEventListener('click', () => {
        // Remove o botão original
        botaoAlterar.remove();

        // Altera o texto do parágrafo
        descricao.textContent = 'Novo conteúdo dinâmico: A investigação toma um rumo inesperado, e novas pistas surgem!';

        // Cria novos botões dinamicamente
        const novoBotao1 = document.createElement('button');
        novoBotao1.textContent = 'Novo Botão 1';
        novoBotao1.addEventListener('click', () => {
            alert('Você clicou no Novo Botão 1!');
        });

        const novoBotao2 = document.createElement('button');
        novoBotao2.textContent = 'Novo Botão 2';
        novoBotao2.addEventListener('click', () => {
            alert('Você clicou no Novo Botão 2!');
        });

        // Adiciona os novos botões ao container
        container.appendChild(novoBotao1);
        container.appendChild(novoBotao2);
    });
}


