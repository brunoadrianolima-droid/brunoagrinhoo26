// Aguarda que o documento HTML esteja totalmente carregado
document.addEventListener("DOMContentLoaded", function () {
    
    // Seleciona todos os botões de curiosidades (efeito sanfona)
    const botoes = document.querySelectorAll('.btn-curiosidade');

    botoes.forEach(botao => {
        botao.addEventListener('click', function () {
            
            // Localiza o painel de texto que vem logo após o botão clicado
            const conteudo = this.nextElementSibling;
            const sinal = this.querySelector('span');
            
            // Verifica se o painel já está aberto
            if (conteudo.style.maxHeight) {
                // Se estiver aberto, fecha reduzindo a altura para zero
                conteudo.style.maxHeight = null;
                sinal.textContent = '+';
            } else {
                // Se estiver fechado, calcula a altura real do texto e abre
                conteudo.style.maxHeight = conteudo.scrollHeight + "px";
                sinal.textContent = '-';
            }
        });
    });
    
});
