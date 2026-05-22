/* js/modules/services.js */

export function initServices() {
  const searchInput = document.querySelector('.services__search');
  const tabButtons = document.querySelectorAll('.services__tab-btn');
  const serviceCards = document.querySelectorAll('.service-card');
  const modal = document.querySelector('.modal');
  const modalWrapper = document.querySelector('.modal__wrapper');
  const modalOverlay = document.querySelector('.modal__overlay');
  const modalClose = document.querySelector('.modal__close');
  const modalTitle = document.querySelector('.modal__title');
  const modalDesc = document.querySelector('.modal__desc');
  const modalIcon = document.querySelector('.modal__icon');
  const modalBookBtn = document.querySelector('.modal__book-btn');

  let activeCategory = 'all';
  let searchQuery = '';
  let lastFocusedElement = null;

  // Normalização de acentos e case para busca
  const normalizeText = (text) => {
    return text
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '');
  };

  // 1. Filtragem de Cards (Tabs + Busca)
  const filterServices = () => {
    serviceCards.forEach(card => {
      const cardCategory = card.getAttribute('data-category');
      const cardTitle = card.querySelector('.service-card__title').textContent;
      const cardDesc = card.querySelector('.service-card__desc').textContent;
      
      const normalizedTitle = normalizeText(cardTitle);
      const normalizedDesc = normalizeText(cardDesc);
      const normalizedQuery = normalizeText(searchQuery);

      const matchesCategory = activeCategory === 'all' || cardCategory === activeCategory;
      const matchesSearch = normalizedTitle.includes(normalizedQuery) || normalizedDesc.includes(normalizedQuery);

      if (matchesCategory && matchesSearch) {
        card.style.display = '';
        // Animação sutil de aparecimento
        card.style.opacity = '1';
        card.style.transform = 'scale(1)';
      } else {
        card.style.display = 'none';
        card.style.opacity = '0';
        card.style.transform = 'scale(0.95)';
      }
    });
  };

  // Evento da barra de pesquisa
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value;
      filterServices();
    });
  }

  // Evento das abas de categorias
  tabButtons.forEach(button => {
    button.addEventListener('click', () => {
      tabButtons.forEach(btn => btn.classList.remove('services__tab-btn--active'));
      button.classList.add('services__tab-btn--active');
      
      activeCategory = button.getAttribute('data-tab');
      filterServices();
    });
  });

  // 2. Sistema de Modais Acessíveis
  const openModal = (card) => {
    lastFocusedElement = document.activeElement; // Salva o elemento focado para restaurar depois

    const title = card.querySelector('.service-card__title').textContent;
    const desc = card.getAttribute('data-full-desc') || card.querySelector('.service-card__desc').textContent;
    const iconSVG = card.querySelector('.service-card__icon').innerHTML;

    // Atualiza conteúdo do modal
    modalTitle.textContent = title;
    modalDesc.textContent = desc;
    modalIcon.innerHTML = iconSVG;

    // Vincula link de agendamento ou whatsapp
    if (modalBookBtn) {
      modalBookBtn.setAttribute('href', '#agendar');
      modalBookBtn.addEventListener('click', (e) => {
        closeModal();
        const bookingSelect = document.getElementById('booking-service');
        if (bookingSelect) {
          // Procura a opção correspondente ao título do serviço e a seleciona
          for (let i = 0; i < bookingSelect.options.length; i++) {
            if (bookingSelect.options[i].value === title) {
              bookingSelect.selectedIndex = i;
              break;
            }
          }
        }
      });
    }

    // Abre o modal
    modal.classList.add('modal--open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';

    // Foca no botão fechar do modal por acessibilidade
    if (modalClose) {
      setTimeout(() => modalClose.focus(), 100);
    }

    // Habilita Focus Trap
    document.addEventListener('keydown', trapFocus);
  };

  const closeModal = () => {
    modal.classList.remove('modal--open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';

    // Restaura o foco para o elemento original
    if (lastFocusedElement) {
      lastFocusedElement.focus();
    }

    // Remove o Focus Trap
    document.removeEventListener('keydown', trapFocus);
  };

  // Focus Trap Logic (Acessibilidade)
  const trapFocus = (e) => {
    if (e.key === 'Tab') {
      const focusableElements = modalWrapper.querySelectorAll('button, [href], input, select, textarea, [tabindex="0"]');
      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (e.shiftKey) { // Shift + Tab
        if (document.activeElement === firstElement) {
          lastElement.focus();
          e.preventDefault();
        }
      } else { // Tab
        if (document.activeElement === lastElement) {
          firstElement.focus();
          e.preventDefault();
        }
      }
    } else if (e.key === 'Escape') {
      closeModal();
    }
  };

  // Event Listeners para Modais
  serviceCards.forEach(card => {
    const btn = card.querySelector('.service-card__btn');
    if (btn) {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        openModal(card);
      });
    }
  });

  if (modalClose) modalClose.addEventListener('click', closeModal);
  if (modalOverlay) modalOverlay.addEventListener('click', closeModal);
}
