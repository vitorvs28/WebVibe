/// Aplica animação aos elementos em sequência
export function fadeIn(elemento, addClass,time) {
  elemento.forEach((el, i) => {
    setTimeout(() => {
      el.classList.add(addClass);
    }, i * time); // 200ms de diferença entre cada elemento
  });
}

// Anima os elementos ao rolar a página
export function animarAoScroll(elementos, newClass,time) {
  elementos.forEach(el => {
    const topo = el.getBoundingClientRect().top;
    const alturaTela = window.innerHeight;

    if (topo < alturaTela - 100) {
      fadeIn(elementos, newClass,time);
    }
  });
}

