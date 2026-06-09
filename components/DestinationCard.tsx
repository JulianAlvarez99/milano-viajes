'use client';

import Image from 'next/image';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import type { Destination } from '@/data/destinations';
import styles from './DestinationCard.module.css';

interface DestinationCardProps {
  destination: Destination;
  index: number;
}

export function DestinationCard({ destination, index }: DestinationCardProps) {
  return (
    <ScrollReveal delay={index * 100} animation="fadeUp">
      <article className={styles.card} aria-label={`Destino: ${destination.name}`}>
        {/* Image */}
        <div className={styles.imageWrapper}>
          <Image
            src={destination.image}
            alt={`${destination.name}, ${destination.country}`}
            fill
            sizes="(max-width: 768px) 80vw, (max-width: 1024px) 50vw, 33vw"
            className={styles.image}
            loading="lazy"
          />

          {/* Hover overlay */}
          <div className={styles.imageOverlay} aria-hidden="true" />
        </div>

        {/* Category badge */}
        <span
          className={`${styles.badge} ${
            destination.category === 'nacional' ? styles.badgeTeal : styles.badgeNavy
          }`}
        >
          {destination.category === 'nacional' ? 'Nacional' : 'Internacional'}
        </span>

        {/* Name */}
        <div className={styles.nameBar}>
          <p className={styles.country}>{destination.country}</p>
          <h3 className={styles.name}>{destination.name}</h3>
        </div>
      </article>
    </ScrollReveal>
  );
}
