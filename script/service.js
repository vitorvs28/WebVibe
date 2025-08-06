import { animarAoScroll } from './reusable/fade-in.js';

// Seleciona os elementos que terão a animação
const elementos = document.querySelectorAll('.aparecer-servico');
const newClass = "fade-in-logo";
const time = 300

// Ativa a animação ao rolar ou carregar a página
window.addEventListener('scroll', () => animarAoScroll(elementos, newClass,time));
window.addEventListener('load', () => animarAoScroll(elementos, newClass,time));

// Seleciona os elementos que terão a animação
const elementos2 = document.querySelectorAll('.aparecer-servico-2');

// Ativa a animação ao rolar ou carregar a página
window.addEventListener('scroll', () => animarAoScroll(elementos2, newClass,time));
window.addEventListener('load', () => animarAoScroll(elementos2, newClass,time));