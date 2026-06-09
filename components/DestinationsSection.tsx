import { destinations } from '@/data/destinations';
import { DestinationCard } from '@/components/DestinationCard';
import { DestinationsCarousel } from '@/components/DestinationsCarousel';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import styles from './DestinationsSection.module.css';

export function DestinationsSection() {
  return (
    <section
      id="destinos"
      className={styles.section}
      aria-labelledby="destinos-title"
    >
      {/* Section header */}
      <div className={`section-container ${styles.header}`}>
        <ScrollReveal animation="fadeIn">
          <span className="section-label">Destinos</span>
        </ScrollReveal>

        <ScrollReveal delay={80}>
          <h2 id="destinos-title" className="section-title">
            Destinos Destacados
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={160} animation="fadeIn">
          <p className="section-subtitle">
            Los mejores paquetes para tu próximo viaje
          </p>
        </ScrollReveal>

        <ScrollReveal delay={200} animation="fadeIn">
          <div className="section-divider" />
        </ScrollReveal>
      </div>

      {/* Desktop grid — hidden on mobile */}
      <div className={`section-container ${styles.desktopGrid}`}>
        {destinations.map((dest, i) => (
          <DestinationCard key={dest.id} destination={dest} index={i} />
        ))}
      </div>

      {/* Mobile carousel — hidden on desktop */}
      <div className={styles.mobileCarousel}>
        <DestinationsCarousel destinations={destinations} />
      </div>
    </section>
  );
}
