/* js/modules/expandable.js */

export function initExpandable() {
  const toggleButtons = document.querySelectorAll('[data-expand-target]');

  toggleButtons.forEach(button => {
    const targetSelector = button.getAttribute('data-expand-target');
    const target = document.querySelector(targetSelector);

    if (!target) return;

    const collapsedClass = button.getAttribute('data-expand-collapsed-class');
    const labelMore = button.getAttribute('data-expand-label-more') || 'Ver mais';
    const labelLess = button.getAttribute('data-expand-label-less') || 'Ver menos';
    const textSpan = button.querySelector('.expand-btn__text');
    const iconSvg = button.querySelector('.expand-btn__icon');

    // Inicia colapsado no mobile
    target.classList.add(collapsedClass);
    button.setAttribute('aria-expanded', 'false');

    button.addEventListener('click', () => {
      const isCollapsed = target.classList.contains(collapsedClass);

      if (isCollapsed) {
        target.classList.remove(collapsedClass);
        button.setAttribute('aria-expanded', 'true');
        if (textSpan) textSpan.textContent = labelLess;
        if (iconSvg) iconSvg.style.transform = 'rotate(180deg)';
      } else {
        target.classList.add(collapsedClass);
        button.setAttribute('aria-expanded', 'false');
        if (textSpan) textSpan.textContent = labelMore;
        if (iconSvg) iconSvg.style.transform = 'rotate(0deg)';

        // Scroll suave de volta ao topo da seção ao colapsar
        const section = target.closest('section');
        if (section) {
          section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    });

    // Oculta o botão em desktop via media query listener
    const mediaQuery = window.matchMedia('(min-width: 769px)');

    const handleScreenChange = (e) => {
      if (e.matches) {
        // Desktop: remove collapse e esconde botão
        target.classList.remove(collapsedClass);
        button.style.display = 'none';
      } else {
        // Mobile: reaplica collapse e mostra botão
        target.classList.add(collapsedClass);
        button.setAttribute('aria-expanded', 'false');
        if (textSpan) textSpan.textContent = labelMore;
        if (iconSvg) iconSvg.style.transform = 'rotate(0deg)';
        button.style.display = '';
      }
    };

    // Checa no carregamento
    handleScreenChange(mediaQuery);
    mediaQuery.addEventListener('change', handleScreenChange);
  });
}
