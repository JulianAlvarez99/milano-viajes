'use client';

import styles from './WhatsAppButton.module.css';

const WA_NUMBER = '5492236998278';
const WA_MESSAGE = encodeURIComponent('Hola! Me interesa consultar por un viaje');

export function WhatsAppButton() {
  return (
    <a
      id="whatsapp-float"
      href={`https://wa.me/${WA_NUMBER}?text=${WA_MESSAGE}`}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.button}
      aria-label="Chatear por WhatsApp"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
        className={styles.icon}
      >
        <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21h.01c5.46 0 9.91-4.45 9.91-9.91C21.96 6.45 17.5 2 12.04 2zm0 18.16c-1.49 0-2.94-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.31 8.31 0 0 1-1.28-4.39c0-4.61 3.75-8.36 8.37-8.36 2.24 0 4.34.87 5.92 2.46a8.32 8.32 0 0 1 2.45 5.9c0 4.61-3.75 8.36-8.37 8.36v-.01zm4.59-6.25c-.25-.13-1.47-.73-1.7-.81-.23-.08-.39-.13-.56.13-.16.25-.64.81-.78.97-.15.17-.29.19-.54.06-.25-.13-1.06-.39-2.01-1.25-.74-.66-1.24-1.48-1.39-1.73-.15-.25-.02-.38.11-.51.12-.11.25-.29.38-.44.13-.14.17-.25.25-.41.08-.16.04-.31-.02-.44-.06-.13-.56-1.34-.76-1.84-.2-.48-.41-.42-.56-.43l-.48-.01c-.16 0-.43.06-.65.31-.22.25-.86.84-.86 2.05 0 1.2.88 2.37 1.01 2.54.13.16 1.73 2.64 4.19 3.7.59.25 1.04.4 1.4.52.59.19 1.12.16 1.54.1.47-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.06-.11-.23-.17-.48-.29z" />
      </svg>
      <span className={styles.tooltip}>¡Chateá con nosotros!</span>
    </a>
  );
}
