/* js/modules/faq.js */

export function initFaq() {
  const faqItems = document.querySelectorAll('.faq__item');
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

  faqItems.forEach(item => {
    const trigger = item.querySelector('.faq__trigger');
    const panel = item.querySelector('.faq__panel');

    if (!trigger || !panel) return;

    trigger.addEventListener('click', () => {
      const isExpanded = trigger.getAttribute('aria-expanded') === 'true';

      // Fecha todos os outros itens (comportamento de sanfona exclusiva)
      faqItems.forEach(otherItem => {
        if (otherItem !== item) {
          const otherTrigger = otherItem.querySelector('.faq__trigger');
          const otherPanel = otherItem.querySelector('.faq__panel');
          if (otherTrigger && otherPanel) {
            otherTrigger.setAttribute('aria-expanded', 'false');
            otherPanel.setAttribute('aria-hidden', 'true');
            if (prefersReducedMotion.matches) {
              otherPanel.style.maxHeight = '0px';
            } else {
              otherPanel.style.maxHeight = null;
            }
          }
        }
      });

      // Abre/fecha o item clicado
      trigger.setAttribute('aria-expanded', !isExpanded);
      panel.setAttribute('aria-hidden', isExpanded);

      if (isExpanded) {
        // Se estava aberto, fecha
        if (prefersReducedMotion.matches) {
          panel.style.maxHeight = '0px';
        } else {
          panel.style.maxHeight = null;
        }
      } else {
        // Se estava fechado, abre
        if (prefersReducedMotion.matches) {
          panel.style.maxHeight = 'none';
        } else {
          panel.style.maxHeight = panel.scrollHeight + 'px';
        }
      }
    });

    // Se o usuário redimensionar a tela com o item aberto, recalculamos a altura máxima
    window.addEventListener('resize', () => {
      const isExpanded = trigger.getAttribute('aria-expanded') === 'true';
      if (isExpanded && !prefersReducedMotion.matches) {
        panel.style.maxHeight = panel.scrollHeight + 'px';
      }
    });
  });
}
