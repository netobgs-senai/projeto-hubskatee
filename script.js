// 1. Mapeamento de Elementos do DOM
const botaoMenu = document.getElementById('btn-menu');
const menuNavegacao = document.getElementById('navegacao');

// 2. Escuta de Evento (Event Listener)
botaoMenu.addEventListener('click', function() {
   
    // 3. Lógica de Alternância (Toggle)
    // Se a classe existir, o JS remove. Se não existir, ele adiciona.
    menuNavegacao.classList.toggle('menu-escondido');
   
    // 4. Atualização de Acessibilidade (Tratamento de Estado)
    const menuAberto = !menuNavegacao.classList.contains('menu-escondido');
    botaoMenu.setAttribute('aria-expanded', menuAberto);
});

// LOGICA DO BOTÃO DO TEMA
const botaoTema = document.getElementById('btn-tema');

// 1. Checa se o usuário já havia escolhido o tema antes
if (localStorage.getItem('tema-preferido') === 'escuro') {
    document.body.classList.add('tema-escuro');
    botaoTema.textContent = '☀️';
}

botaoTema.addEventListener('click', function() {
    // 2. Alterna a classe no HTML
    document.body.classList.toggle('tema-escuro');
   
    // 3. Verifica o estado atual e salva no Navegador
    if (document.body.classList.contains('tema-escuro')) {
        botaoTema.textContent = '☀️';
        localStorage.setItem('tema-preferido', 'escuro'); // Salva a escolha
    } else {
        botaoTema.textContent = '🌙';
        localStorage.setItem('tema-preferido', 'claro'); // Salva a escolha
    }
});

/* --- LÓGICA DE ROLAGEM (BOTÃO TOPO E BARRA DE PROGRESSO) --- */
const botaoTopo = document.getElementById('btn-topo');
const barraProgresso = document.getElementById('barra-progresso');

// Escuta a rolagem (scroll) da janela inteira
window.addEventListener('scroll', function() {
   
    // 1. Controle do Botão Topo (Aparece após 200px)
    if (window.scrollY > 200) {
        botaoTopo.classList.remove('escondido');
    } else {
        botaoTopo.classList.add('escondido');
    }

// 2. Cálculo da Barra de Progresso de Leitura
    // Pegamos a altura total do site e diminuímos o tamanho da tela do usuário
    let alturaTotal = document.body.scrollHeight - window.innerHeight;
    // Calculamos a porcentagem (regra de três básica)
    let porcentagem = (window.scrollY / alturaTotal) * 100;
   
    // Injetamos a porcentagem calculada diretamente no CSS da barra
    barraProgresso.style.width = porcentagem + '%';
});

// Ação de clicar e voltar para cima
botaoTopo.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Faz a rolagem ser suave
    });
});

/* --- LÓGICA DA JANELA MODAL --- */
const btnAbrirModal = document.getElementById('btn-abrir-modal');
const fundoModal = document.getElementById('fundo-modal');
const btnFecharModal = document.getElementById('btn-fechar-modal');

// Função para abrir o modal
btnAbrirModal.addEventListener('click', function() {
    fundoModal.classList.remove('escondido');
});

// Função para fechar o modal no botão X
btnFecharModal.addEventListener('click', function() {
    fundoModal.classList.add('escondido');
});

// BÔNUS DE UX: Fechar o modal ao clicar fora da caixa branca (no fundo escuro)
fundoModal.addEventListener('click', function(evento) {
    // Se o elemento clicado for EXATAMENTE o fundo escuro, ele fecha
    if (evento.target === fundoModal) {
        fundoModal.classList.add('escondido');
    }
});

// BÔNUS DE ACESSIBILIDADE: Fechar apertando a tecla "Esc" do teclado
window.addEventListener('keydown', function(evento) {
    if (evento.key === 'Escape') {
        fundoModal.classList.add('escondido');
    }
});