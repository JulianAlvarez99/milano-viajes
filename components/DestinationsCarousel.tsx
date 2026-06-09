'use client';

import Image from 'next/image';
import type { Destination } from '@/data/destinations';
import styles from './DestinationsCarousel.module.css';

interface DestinationsCarouselProps {
  destinations: Destination[];
}

export function DestinationsCarousel({ destinations }: DestinationsCarouselProps) {
  return (
    <div className={styles.carousel} role="region" aria-label="Carrusel de destinos">
      {destinations.map((dest) => (
        <article
          key={dest.id}
          className={styles.card}
          aria-label={`Destino: ${dest.name}`}
        >
          <div className={styles.imageWrapper}>
            <Image
              src={dest.image}
              alt={`${dest.name}, ${dest.country}`}
              fill
              sizes="80vw"
              className={styles.image}
              loading="lazy"
            />
            <div className={styles.nameBar}>
              <p className={styles.country}>{dest.country}</p>
              <h3 className={styles.name}>{dest.name}</h3>
            </div>
            <span
              className={`${styles.badge} ${
                dest.category === 'nacional' ? styles.badgeTeal : styles.badgeNavy
              }`}
            >
              {dest.category === 'nacional' ? 'Nacional' : 'Internacional'}
            </span>
          </div>
        </article>
      ))}
    </div>
  );
}
