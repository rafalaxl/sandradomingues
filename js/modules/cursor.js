/* js/modules/cursor.js */

export function initCustomCursor() {
  // Desativa em dispositivos móveis/telas menores ou se o usuário prefere redução de movimento
  if (window.innerWidth < 1025 || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  // Adiciona a classe que oculta o cursor nativo no CSS
  document.documentElement.classList.add('has-custom-cursor');

  // Cria a marcação do cursor e adiciona ao body
  const cursor = document.createElement('div');
  cursor.classList.add('custom-cursor');
  document.body.appendChild(cursor);

  // Variáveis de posição suave (lerp)
  let mouseX = 0;
  let mouseY = 0;
  let cursorX = 0;
  let cursorY = 0;
  const speed = 0.15; // Velocidade do lag suave do cursor

  // Atualiza coordenadas do mouse reais
  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  // Loop de animação simples e leve
  const animate = () => {
    // Interpolação Linear (Lerp) para atraso elegante
    cursorX += (mouseX - cursorX) * speed;
    cursorY += (mouseY - cursorY) * speed;

    cursor.style.left = `${cursorX}px`;
    cursor.style.top = `${cursorY}px`;

    requestAnimationFrame(animate);
  };
  requestAnimationFrame(animate);

  // Efeitos de Hover
  const hoverElements = 'a, button, select, input, textarea, .service-card, .before-after__slider, .testimonials__dot';
  
  document.addEventListener('mouseover', (e) => {
    if (e.target.closest(hoverElements)) {
      cursor.classList.add('custom-cursor--hover');
    }
  });

  document.addEventListener('mouseout', (e) => {
    if (!e.target.closest(hoverElements)) {
      cursor.classList.remove('custom-cursor--hover');
    }
  });

  // Efeitos de Clique
  document.addEventListener('mousedown', () => {
    cursor.classList.add('custom-cursor--click');
  });

  document.addEventListener('mouseup', () => {
    cursor.classList.remove('custom-cursor--click');
  });
}
