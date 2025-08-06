import { fadeIn } from './reusable/fade-in.js';

//Essa variavel e usada para fade-in.
const animationPresen = document.querySelectorAll(".aparecer");
const newClass ="fade-in";
const time = 200

//function animação fade-in para apresentação.
document.addEventListener("DOMContentLoaded", () => {
  fadeIn(animationPresen,newClass,time);
});

//Apresentação//

//Essa function troca as imagens de acordo com a largura da tela
// Se a largura for maior que 810px, troca as imagens para 'strategia1.png' e 'MULHER1.png'
// Se a largura for menor que 810px, troca as imagens para 'HOMEM2.png' e 'MULHER2.png'
function trocarImagensPorLargura() {
  const imgMen = document.querySelector('.homem');
  const imgWomen = document.querySelector('.mulher');
// Verifica se as imagens existem antes de tentar trocar
// Se não existirem, a função não faz nada
  if (!imgMen || !imgWomen) return;
// Troca as imagens de acordo com a largura da tela
  if (window.matchMedia("(min-width: 810px)").matches) {
    imgMen.src = 'assets/img/strategia1.png';
    imgWomen.src = 'assets/img/MULHER1.png';
  } else {
    // Se a largura for menor que 810px, troca as imagens para 'HOMEM2.png' e 'MULHER2.png'
    imgMen.src = 'assets/img/HOMEM2.png';
    imgWomen.src = 'assets/img/MULHER2.png';
  }
}
// Adiciona os eventos de resize e load para chamar a função de troca de imagens
window.addEventListener('resize', trocarImagensPorLargura);
window.addEventListener('load', trocarImagensPorLargura);

//Fim da apresentação//
