'use client';

import Image from 'next/image';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import styles from './InstagramSection.module.css';

const IG_HANDLE  = 'milanoviajes.ok';
const IG_URL     = `https://instagram.com/${IG_HANDLE}`;

const photos = [
  { src: '/images/instagram/1.jpg', alt: 'Atardecer tropical en la playa' },
  { src: '/images/instagram/2.jpg', alt: 'Arrecife de coral visto desde el aire' },
  { src: '/images/instagram/3.jpg', alt: 'Senderismo en la Patagonia' },
  { src: '/images/instagram/4.jpg', alt: 'Callecita romana al atardecer' },
  { src: '/images/instagram/5.jpg', alt: 'Viñedos de Mendoza' },
  { src: '/images/instagram/6.jpg', alt: 'Santorini, Grecia' },
  { src: '/images/instagram/7.jpg', alt: 'Selva amazónica desde el aire' },
  { src: '/images/instagram/8.jpg', alt: 'Crucero por fiordos noruegos' },
];

export function InstagramSection() {
  return (
    <section
      id="instagram"
      className={styles.section}
      aria-labelledby="instagram-title"
    >
      {/* Header */}
      <div className={`section-container ${styles.header}`}>
        <ScrollReveal animation="fadeIn">
          <span className="section-label">Instagram</span>
        </ScrollReveal>

        <ScrollReveal delay={80}>
          <h2 id="instagram-title" className="section-title">
            Seguinos en Instagram
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={140} animation="fadeIn">
          <a
            href={IG_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.handle}
            aria-label={`Ver @${IG_HANDLE} en Instagram`}
          >
            @{IG_HANDLE}
          </a>
        </ScrollReveal>

        <ScrollReveal delay={180} animation="fadeIn">
          <div className="section-divider" />
        </ScrollReveal>
      </div>

      {/* Photo grid */}
      <div className={`section-container ${styles.grid}`} role="list">
        {photos.map((photo, i) => (
          <ScrollReveal key={i} delay={i * 80} animation="fadeIn">
            <a
              href={IG_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.photoItem}
              role="listitem"
              aria-label={photo.alt}
            >
              <div className={styles.imageWrapper}>
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className={styles.image}
                  loading="lazy"
                />

                {/* Hover overlay with Instagram icon */}
                <div className={styles.overlay} aria-hidden="true">
                  {/* Instagram icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className={styles.igIcon}
                    aria-hidden="true"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </div>
              </div>
            </a>
          </ScrollReveal>
        ))}
      </div>

      {/* Bottom CTA — icon only circular button */}
      <div className={styles.cta}>
        <ScrollReveal animation="fadeIn" delay={400}>
          <a
            href={IG_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.igButton}
            aria-label="Ver perfil de Instagram de Milano Viajes"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
}
