'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import styles from './Hero.module.css';

const WA_NUMBER = '5492236998278';
const WA_MESSAGE = encodeURIComponent('Hola! Me interesa consultar por un viaje');

export function Hero() {
  const [scrollY, setScrollY] = useState(0);
  const [visible, setVisible] = useState(false);
  const imageRef = useRef<HTMLDivElement>(null);

  // Entrance animation trigger
  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // Parallax — throttled with RAF
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setScrollY(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Disable parallax on mobile for performance
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  const parallaxY = isMobile ? 0 : scrollY * 0.35;

  const headline = 'Tu próxima aventura comienza aquí';
  const words = headline.split(' ');

  return (
    <section className={styles.hero} id="inicio" aria-label="Banner principal">
      {/* Parallax background image */}
      <div
        className={styles.bgWrapper}
        style={{ transform: `translateY(${parallaxY}px)` }}
        ref={imageRef}
        aria-hidden="true"
      >
        <Image
          src="/images/hero/hero.jpg"
          alt=""
          fill
          priority
          quality={90}
          className={styles.bgImage}
          sizes="100vw"
        />
        {/* Cinematic gradient overlay */}
        <div className={styles.overlay} />
      </div>

      {/* Content */}
      <div className={styles.content}>
        <div className={styles.inner}>
          {/* Label */}
          <p
            className={`${styles.label} ${visible ? styles.labelVisible : ''}`}
            aria-hidden="true"
          >
            Agencia de Viajes
          </p>

          {/* Headline — word-by-word animation */}
          <h1 className={styles.headline} aria-label={headline}>
            {words.map((word, i) => (
              <span
                key={i}
                className={`${styles.word} ${visible ? styles.wordVisible : ''}`}
                style={{ animationDelay: visible ? `${0.1 + i * 0.08}s` : '0s' }}
                aria-hidden="true"
              >
                {word}
              </span>
            ))}
          </h1>

          {/* Subtitle */}
          <p
            className={`${styles.subtitle} ${visible ? styles.subtitleVisible : ''}`}
          >
            Destinos nacionales e internacionales para todos
          </p>

          {/* CTA */}
          <div className={`${styles.ctaGroup} ${visible ? styles.ctaVisible : ''}`}>
            <a
              href="#destinos"
              className={`btn-primary ${styles.ctaExplore}`}
              id="hero-cta-explore"
            >
              Explorar Destinos
            </a>
            <a
              href={`https://wa.me/${WA_NUMBER}?text=${WA_MESSAGE}`}
              target="_blank"
              rel="noopener noreferrer"
              className={`btn-outline ${styles.ctaWa}`}
              id="hero-cta-whatsapp"
            >
              Consultá por WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className={styles.scrollIndicator} aria-hidden="true">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </div>
    </section>
  );
}
