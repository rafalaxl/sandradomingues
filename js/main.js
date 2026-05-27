/* js/main.js */
import { initNavigation } from './modules/navigation.js';
import { initCounters } from './modules/counters.js';
import { initServices } from './modules/services.js';
import { initResults } from './modules/results.js';
import { initCustomCursor } from './modules/cursor.js';
import { initBookingForm } from './modules/booking.js';
import { initExpandable } from './modules/expandable.js';
import { initFaq } from './modules/faq.js';

document.addEventListener('DOMContentLoaded', () => {
  // Inicialização de módulos
  initNavigation();
  initCounters();
  initServices();
  initResults();
  initCustomCursor();
  initBookingForm();
  initExpandable();
  initFaq();

  // Efeito de Reveal (fade-in com subida suave) ao scroll
  const reveals = document.querySelectorAll('.reveal');
  
  if (reveals.length > 0) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal--active');
          observer.unobserve(entry.target); // Roda apenas uma vez por elemento
        }
      });
    }, {
      root: null,
      threshold: 0.1, // Começa a revelar quando 10% do elemento está na tela
      rootMargin: '0px'
    });

    reveals.forEach(el => revealObserver.observe(el));
  }
});
