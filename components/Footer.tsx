import Image from 'next/image';
import styles from './Footer.module.css';

const WA_NUMBER = '5499999999999';
const WA_MESSAGE = encodeURIComponent('Hola! Me interesa consultar por un viaje');
const IG_URL = 'https://instagram.com/milanoviajes.ok';

const navLinks = [
  { href: '#destinos', label: 'Destinos' },
  { href: '#sobre-nosotros', label: 'Sobre Nosotros' },
  { href: '#instagram', label: 'Instagram' },
];

export function Footer() {
  return (
    <footer className={styles.footer} role="contentinfo">
      <div className={`section-container ${styles.grid}`}>
        {/* Left: Logo + tagline */}
        <div className={styles.col}>
          <a href="#" aria-label="Milano Viajes — ir al inicio" className={styles.logoLink}>
            <Image
              src="/images/logo.png"
              alt="Milano Viajes"
              width={250}
              height={150}
              className={styles.logo}
            />
          </a>
        </div>

        {/* Center: Quick links */}
        <nav className={styles.col} aria-label="Navegación del pie de página">
          <h3 className={styles.colTitle}>Navegación</h3>
          <ul className={styles.linkList}>
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className={styles.footerLink}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Right: Social icons */}
        <div className={styles.col}>
          <h3 className={styles.colTitle}>Seguinos</h3>
          <div className={styles.socialIcons}>
            {/* Instagram */}
            <a
              href={IG_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialIcon}
              aria-label="Milano Viajes en Instagram"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>

            {/* WhatsApp */}
            <a
              href={`https://wa.me/${WA_NUMBER}?text=${WA_MESSAGE}`}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialIcon}
              aria-label="Milano Viajes en WhatsApp"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21h.01c5.46 0 9.91-4.45 9.91-9.91C21.96 6.45 17.5 2 12.04 2zm0 18.16c-1.49 0-2.94-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.31 8.31 0 0 1-1.28-4.39c0-4.61 3.75-8.36 8.37-8.36 2.24 0 4.34.87 5.92 2.46a8.32 8.32 0 0 1 2.45 5.9c0 4.61-3.75 8.36-8.37 8.36v-.01zm4.59-6.25c-.25-.13-1.47-.73-1.7-.81-.23-.08-.39-.13-.56.13-.16.25-.64.81-.78.97-.15.17-.29.19-.54.06-.25-.13-1.06-.39-2.01-1.25-.74-.66-1.24-1.48-1.39-1.73-.15-.25-.02-.38.11-.51.12-.11.25-.29.38-.44.13-.14.17-.25.25-.41.08-.16.04-.31-.02-.44-.06-.13-.56-1.34-.76-1.84-.2-.48-.41-.42-.56-.43l-.48-.01c-.16 0-.43.06-.65.31-.22.25-.86.84-.86 2.05 0 1.2.88 2.37 1.01 2.54.13.16 1.73 2.64 4.19 3.7.59.25 1.04.4 1.4.52.59.19 1.12.16 1.54.1.47-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.06-.11-.23-.17-.48-.29z" />
              </svg>
            </a>

            {/* Facebook placeholder */}
            <a
              href="#"
              className={styles.socialIcon}
              aria-label="Milano Viajes en Facebook"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className={styles.bottomBar}>
        <div className="section-container">
          <p className={styles.copyright}>
            © 2026 Milano Viajes. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
