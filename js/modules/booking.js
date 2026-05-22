/* js/modules/booking.js */

export function initBookingForm() {
  const form = document.getElementById('whatsapp-booking-form');
  if (!form) return;

  // Define a data mínima como hoje para evitar agendamentos retroativos
  const dateInput = document.getElementById('booking-date');
  if (dateInput) {
    const today = new Date().toISOString().split('T')[0];
    dateInput.setAttribute('min', today);
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('booking-name').value.trim();
    const service = document.getElementById('booking-service').value;
    const dateVal = document.getElementById('booking-date').value;
    const period = document.getElementById('booking-period').value;

    if (!name || !service || !dateVal || !period) return;

    // Formata a data para padrão brasileiro (DD/MM/AAAA)
    const [year, month, day] = dateVal.split('-');
    const formattedDate = `${day}/${month}/${year}`;

    // Constrói a mensagem personalizada
    const baseText = `Olá Sandra! Gostaria de agendar uma avaliação estética.

Nome: ${name}
Procedimento: ${service}
Data sugerida: ${formattedDate}
Período ideal: ${period}`;

    const encodedText = encodeURIComponent(baseText);
    const whatsappUrl = `https://wa.me/5515996909896?text=${encodedText}`;

    // Abre o link do WhatsApp
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  });
}
