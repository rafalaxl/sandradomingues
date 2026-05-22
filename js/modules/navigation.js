/* js/modules/navigation.js */

export function initNavigation() {
  const header = document.querySelector('.header');
  const toggleBtn = document.querySelector('.header__toggle');
  const nav = document.querySelector('.header__nav');
  const navLinks = document.querySelectorAll('.header__link');
  const sections = document.querySelectorAll('section[id]');

  // 1. Sticky Header com Backdrop Blur no Scroll
  const handleScroll = () => {
    if (window.scrollY > 50) {
      header.classList.add('header--sticky');
    } else {
      header.classList.remove('header--sticky');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll(); // Executa no carregamento inicial

  // 2. Menu Hamburguer Acessível (Mobile)
  if (toggleBtn && nav) {
    const toggleMenu = () => {
      const isOpen = nav.classList.contains('header__nav--open');
      
      if (isOpen) {
        // Fechar Menu
        nav.classList.remove('header__nav--open');
        toggleBtn.classList.remove('header__toggle--open');
        toggleBtn.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
        toggleBtn.focus();
      } else {
        // Abrir Menu
        nav.classList.add('header__nav--open');
        toggleBtn.classList.add('header__toggle--open');
        toggleBtn.setAttribute('aria-expanded', 'true');
        document.body.style.overflow = 'hidden';
        
        // Focus Trap no primeiro link quando abre
        const firstLink = nav.querySelector('.header__link');
        if (firstLink) {
          setTimeout(() => firstLink.focus(), 100);
        }
      }
    };

    toggleBtn.addEventListener('click', toggleMenu);

    // Fechar menu ao clicar em um link
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        if (nav.classList.contains('header__nav--open')) {
          toggleMenu();
        }
      });
    });

    // Fechar menu com a tecla ESC
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && nav.classList.contains('header__nav--open')) {
        toggleMenu();
      }
    });
  }

  // 3. Destacar Link Ativo no Menu de Acordo com o Scroll
  const observerOptions = {
    root: null,
    rootMargin: '-30% 0px -60% 0px', // Aciona quando a seção está no centro da tela
    threshold: 0
  };

  const observerCallback = (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          const href = link.getAttribute('href');
          if (href === `#${id}`) {
            link.classList.add('header__link--active');
            link.setAttribute('aria-current', 'page');
          } else {
            link.classList.remove('header__link--active');
            link.removeAttribute('aria-current');
          }
        });
      }
    });
  };

  const observer = new IntersectionObserver(observerCallback, observerOptions);
  sections.forEach(section => observer.observe(section));
}
