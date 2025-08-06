import { animarAoScroll } from './reusable/fade-in.js';

// Seleciona os elementos que terão a animação
const elementos = document.querySelectorAll('.aparecer-parceiros');
const newClass = "fade-in-logo";
const time = 10

// Ativa a animação ao rolar ou carregar a página
window.addEventListener('scroll', () => animarAoScroll(elementos, newClass,time));
window.addEventListener('load', () => animarAoScroll(elementos, newClass,time));