const headerMenu = document.getElementById('menu-button');
const menu = document.getElementById('menu');
const icon = headerMenu.querySelector('span');
const headerContainer = document.getElementById('header');

// Variaveis para ajustar a altura do wrapper
const header = document.getElementById('header');
const wrapper = document.querySelector('.header-wrapper');

// Alterna a classe do elemento entre 'hidden' e 'open'
// Se o elemento já tiver a classe 'hidden', troca por 'open' e vice-versa.
function alternarClasse(elemento, classeA, classeB) {
  if (elemento.classList.contains(classeA)) {
    elemento.classList.replace(classeA, classeB);
  } else if (elemento.classList.contains(classeB)) {
    elemento.classList.replace(classeB, classeA);
  } else {
    elemento.classList.add(classeA); // Adiciona a classe 'hidden' se nenhuma das classes estiver presente
  }
}
// Adiciona um evento de clique ao botão do menu
headerMenu.addEventListener('click', () => {
  alternarClasse(menu, 'hidden', 'open');

  const menuAberto = menu.classList.contains('open');

  icon.textContent = menuAberto ? 'close' : 'menu';

  headerContainer.classList.remove('header-open', 'header-hidden');
  headerContainer.classList.add(menuAberto ? 'header-open' : 'header-hidden');
});

// Ajusta a altura do wrapper para a altura do header
function ajustarAlturaWrapper() {
  wrapper.style.height = header.offsetHeight + 'px';
}

window.addEventListener('load', ajustarAlturaWrapper);
window.addEventListener('resize', ajustarAlturaWrapper);

// Detecta o scroll da página e adiciona/remover classes ao header

detectscroll()