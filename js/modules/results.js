/* js/modules/results.js */

export function initResults() {
  // 1. Controle Comparativo Antes/Depois (Slider Deslizante)
  const beforeAfterContainers = document.querySelectorAll('.before-after');

  beforeAfterContainers.forEach(container => {
    const slider = container.querySelector('.before-after__slider');
    const beforeImg = container.querySelector('.before-after__image--before');
    const handle = container.querySelector('.before-after__handle');

    if (!slider || !beforeImg || !handle) return;

    const updateSlider = () => {
      const value = slider.value;
      
      // Ajusta a exibição da imagem 'antes' (por recorte)
      beforeImg.style.clipPath = `inset(0 ${100 - value}% 0 0)`;
      
      // Move a linha divisória dourada
      handle.style.left = `${value}%`;
    };

    // Escuta tanto input (arrastando) quanto change (clique final)
    slider.addEventListener('input', updateSlider);
    slider.addEventListener('change', updateSlider);
    
    // Inicialização da posição no meio (50%)
    slider.value = 50;
    updateSlider();
  });

  // 2. Carrossel de Depoimentos (Testimonial Carousel)
  const track = document.querySelector('.testimonials__track');
  const slides = document.querySelectorAll('.testimonial-card');
  const btnPrev = document.querySelector('.testimonials__btn--prev');
  const btnNext = document.querySelector('.testimonials__btn--next');
  const dotsContainer = document.querySelector('.testimonials__dots');

  if (!track || slides.length === 0) return;

  let currentIndex = 0;
  let startX = 0;
  let isSwiping = false;

  // Cria bolinhas indicadoras dinamicamente
  slides.forEach((_, idx) => {
    const dot = document.createElement('button');
    dot.classList.add('testimonials__dot');
    if (idx === 0) dot.classList.add('testimonials__dot--active');
    dot.setAttribute('aria-label', `Ir para depoimento ${idx + 1}`);
    dot.addEventListener('click', () => {
      goToSlide(idx);
    });
    dotsContainer.appendChild(dot);
  });

  const dots = document.querySelectorAll('.testimonials__dot');

  const updateDots = () => {
    dots.forEach((dot, idx) => {
      if (idx === currentIndex) {
        dot.classList.add('testimonials__dot--active');
      } else {
        dot.classList.remove('testimonials__dot--active');
      }
    });
  };

  const goToSlide = (index) => {
    if (index < 0) {
      currentIndex = slides.length - 1;
    } else if (index >= slides.length) {
      currentIndex = 0;
    } else {
      currentIndex = index;
    }

    track.style.transform = `translateX(-${currentIndex * 100}%)`;
    updateDots();
  };

  // Eventos de clique nos botões
  if (btnPrev) {
    btnPrev.addEventListener('click', (e) => {
      e.preventDefault();
      goToSlide(currentIndex - 1);
    });
  }

  if (btnNext) {
    btnNext.addEventListener('click', (e) => {
      e.preventDefault();
      goToSlide(currentIndex + 1);
    });
  }

  // Suporte a gestos de arrasto (Swipe) no celular
  track.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
    isSwiping = true;
    track.style.transition = 'none'; // Desliga transição enquanto arrasta
  }, { passive: true });

  track.addEventListener('touchmove', (e) => {
    if (!isSwiping) return;
    const currentX = e.touches[0].clientX;
    const diffX = currentX - startX;
    
    // Mover o track levemente baseado no arrasto
    const offset = -(currentIndex * 100) + (diffX / track.offsetWidth) * 100;
    track.style.transform = `translateX(${offset}%)`;
  }, { passive: true });

  track.addEventListener('touchend', (e) => {
    if (!isSwiping) return;
    isSwiping = false;
    track.style.transition = 'transform 300ms ease'; // Devolve a transição suave
    
    const endX = e.changedTouches[0].clientX;
    const diffX = endX - startX;
    const threshold = 50; // Quantidade de pixels mínima para mudar de slide

    if (diffX > threshold) {
      goToSlide(currentIndex - 1); // Deslizar para direita -> anterior
    } else if (diffX < -threshold) {
      goToSlide(currentIndex + 1); // Deslizar para esquerda -> próximo
    } else {
      goToSlide(currentIndex); // Cancela o deslize e mantém no atual
    }
  });
}
