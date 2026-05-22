/* js/modules/counters.js */

export function initCounters() {
  const counters = document.querySelectorAll('.counter');
  
  if (counters.length === 0) return;

  const animateCounter = (counter) => {
    const target = parseInt(counter.getAttribute('data-target'), 10);
    
    // Se prefere redução de movimento, pula a animação
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      counter.textContent = target;
      return;
    }

    const duration = 1500; // Tempo total da animação em milissegundos
    const startTime = performance.now();

    const updateCount = (currentTime) => {
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / duration, 1);
      
      // Easing funcional para desacelerar no final (easeOutQuad)
      const easeProgress = progress * (2 - progress);
      const currentValue = Math.floor(easeProgress * target);

      counter.textContent = currentValue;

      if (progress < 1) {
        requestAnimationFrame(updateCount);
      } else {
        counter.textContent = target; // Garante o valor exato no fim
      }
    };

    requestAnimationFrame(updateCount);
  };

  // Observer para ativar os contadores somente quando a seção estiver visível
  const observerOptions = {
    root: null,
    threshold: 0.5, // Ativa quando 50% da seção estiver visível
    rootMargin: '0px'
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        observer.unobserve(entry.target); // Roda a animação apenas uma vez
      }
    });
  }, observerOptions);

  counters.forEach(counter => observer.observe(counter));
}
