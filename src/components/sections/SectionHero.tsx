import Link from 'next/link';
import styles from './SectionHero.module.css';

interface SectionHeroProps {
  title: string;
  subtitle: string;
  primaryCtaText?: string;
  primaryCtaLink?: string;
  primaryCtaUrgent?: boolean;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
}

export default function SectionHero({
  title,
  subtitle,
  primaryCtaText,
  primaryCtaLink,
  primaryCtaUrgent = false,
  secondaryCtaText,
  secondaryCtaLink
}: SectionHeroProps) {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay}></div>
      <div className={`container ${styles.content} animate-fade-in-up`}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.subtitle}>{subtitle}</p>
        
        <div className={styles.actions}>
          {primaryCtaText && primaryCtaLink && (
            primaryCtaLink.startsWith('tel:') ? (
              <a href={primaryCtaLink} className={`btn ${primaryCtaUrgent ? 'btn-urgent' : 'btn-primary'}`}>
                {primaryCtaText}
              </a>
            ) : (
              <Link href={primaryCtaLink} className={`btn ${primaryCtaUrgent ? 'btn-urgent' : 'btn-primary'}`}>
                {primaryCtaText}
              </Link>
            )
          )}
          
          {secondaryCtaText && secondaryCtaLink && (
            <Link href={secondaryCtaLink} className="btn glass">
              {secondaryCtaText}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
