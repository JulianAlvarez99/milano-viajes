'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Navbar.module.css';

const WA_NUMBER = '5499999999999';
const WA_MESSAGE = encodeURIComponent('Hola! Me interesa consultar por un viaje');

const navLinks = [
  { href: '#destinos', label: 'Destinos' },
  { href: '#sobre-nosotros', label: 'Sobre Nosotros' },
  { href: '#instagram', label: 'Instagram' },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 80);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on route/anchor click
  const handleLinkClick = () => setMenuOpen(false);

  return (
    <header
      id="navbar"
      className={`${styles.navbar} ${isScrolled ? styles.solid : ''}`}
      role="banner"
    >
      <div className={styles.inner}>
        {/* Logo */}
        <a href="#" className={styles.logo} aria-label="Milano Viajes — inicio">
          <Image
            src="/images/logo.png"
            alt="Milano Viajes"
            width={150}
            height={90}
            priority
            className={styles.logoImg}
          />
        </a>

        {/* Desktop nav */}
        <nav className={styles.desktopNav} aria-label="Navegación principal">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={styles.navLink}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <a
          href={`https://wa.me/${WA_NUMBER}?text=${WA_MESSAGE}`}
          target="_blank"
          rel="noopener noreferrer"
          className={`${styles.ctaBtn} btn-primary`}
          id="navbar-cta"
        >
          Consultá Ahora
        </a>

        {/* Hamburger */}
        <button
          className={styles.hamburger}
          aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className={`${styles.bar} ${menuOpen ? styles.barOpen1 : ''}`} />
          <span className={`${styles.bar} ${menuOpen ? styles.barOpen2 : ''}`} />
          <span className={`${styles.bar} ${menuOpen ? styles.barOpen3 : ''}`} />
        </button>
      </div>

      {/* Mobile menu drawer */}
      <nav
        id="mobile-menu"
        className={`${styles.mobileMenu} ${menuOpen ? styles.mobileMenuOpen : ''}`}
        aria-label="Menú móvil"
        aria-hidden={!menuOpen}
      >
        {navLinks.map((link, i) => (
          <a
            key={link.href}
            href={link.href}
            className={styles.mobileLink}
            style={{ transitionDelay: menuOpen ? `${i * 60}ms` : '0ms' }}
            onClick={handleLinkClick}
          >
            {link.label}
          </a>
        ))}
        <a
          href={`https://wa.me/${WA_NUMBER}?text=${WA_MESSAGE}`}
          target="_blank"
          rel="noopener noreferrer"
          className={`${styles.mobileCta} btn-primary`}
          style={{ transitionDelay: menuOpen ? '180ms' : '0ms' }}
          onClick={handleLinkClick}
        >
          Consultá Ahora
        </a>
      </nav>
    </header>
  );
}
