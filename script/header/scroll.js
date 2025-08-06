function detectscroll() {
    // Define uma variável para armazenar a posição anterior do scroll
    let ultimoScroll = 0;

    // Seleciona o elemento com o id 'header' (geralmente o cabeçalho do site)
    const header = document.getElementById('header');

    // Adiciona um ouvinte de evento que será acionado sempre que a página for rolada
    window.addEventListener('scroll', () => {
        // Pega a posição atual do scroll na vertical
        const atualScroll = window.scrollY;

        // Verifica se o scroll atual é maior que o último (ou seja, se está rolando para baixo)
        if (atualScroll > ultimoScroll) {
            // Usuário está rolando para baixo
            header.classList.add('scroll-down');    // Adiciona a classe 'scroll-down' ao header
            header.classList.remove('scroll-up');   // Remove a classe 'scroll-up' do header
        } else {
            // Usuário está rolando para cima
            header.classList.remove('scroll-down'); // Remove a classe 'scroll-down' do header
            header.classList.add('scroll-up');      // Adiciona a classe 'scroll-up' ao header
        }

        // Atualiza o valor de último scroll com a posição atual
        ultimoScroll = atualScroll;
    });
}