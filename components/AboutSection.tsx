'use client';

import Image from 'next/image';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { AnimatedCounter } from '@/components/ui/AnimatedCounter';
import styles from './AboutSection.module.css';

export function AboutSection() {
  return (
    <section
      id="sobre-nosotros"
      className={styles.section}
      aria-labelledby="about-title"
    >
      <div className={`section-container ${styles.grid}`}>
        {/* Left: text */}
        <div className={styles.textCol}>
          <ScrollReveal animation="fadeIn">
            <span className="section-label">Sobre Nosotros</span>
          </ScrollReveal>

          <ScrollReveal delay={80}>
            <h2 id="about-title" className="section-title">
              Tu confianza,<br />nuestro compromiso
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={160} animation="fadeIn">
            <div className="section-divider" />
          </ScrollReveal>

          <ScrollReveal delay={240} animation="fadeIn">
            <p className={styles.body}>
              En Milano Viajes llevamos más de tres décadas creando experiencias
              de viaje únicas e inolvidables. Cada destino que recomendamos lo
              hemos vivido de primera mano, con el mismo entusiasmo que sentís
              vos al imaginar tu próxima aventura.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={300} animation="fadeIn">
            <p className={styles.body}>
              Trabajamos con las mejores aerolíneas, hoteles y operadores locales
              para que tu viaje sea exactamente como lo soñaste.
            </p>
          </ScrollReveal>

          {/* Trust indicators */}
          <div className={styles.trustGrid}>
            <ScrollReveal delay={360}>
              <div className={styles.trustItem}>
                <span className={styles.trustNumber}>
                  <AnimatedCounter target={25} suffix="+" />
                </span>
                <p className={styles.trustLabel}>Años de experiencia</p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={440}>
              <div className={styles.trustItem}>
                <span className={styles.trustIconWrapper} aria-hidden="true">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.trustIcon}>
                    <circle cx="12" cy="12" r="10" />
                    <line x1="2" y1="12" x2="22" y2="12" />
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                  </svg>
                </span>
                <p className={styles.trustLabel}>Destinos nacionales<br />e internacionales</p>
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* Right: image */}
        <ScrollReveal animation="slideRight" delay={200} className={styles.imageCol}>
          <div className={styles.imageWrapper}>
            <Image
              src="/images/about/about.jpg"
              alt="Oficina de Milano Viajes — espacio de consulta cálido y profesional"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className={styles.image}
              loading="lazy"
            />
            {/* Copper accent border */}
            <div className={styles.copperAccent} aria-hidden="true" />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
