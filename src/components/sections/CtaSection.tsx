import Link from 'next/link';
import styles from './CtaSection.module.css';

interface CtaSectionProps {
  title: string;
  subtitle: string;
  primaryCtaText: string;
  primaryCtaLink: string;
  primaryCtaUrgent?: boolean;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
}

export default function CtaSection({
  title,
  subtitle,
  primaryCtaText,
  primaryCtaLink,
  primaryCtaUrgent = false,
  secondaryCtaText,
  secondaryCtaLink
}: CtaSectionProps) {
  const words = title.split(' ');
  const lastWord = words.pop();
  const restOfTitle = words.join(' ');

  return (
    <section className={styles.sectionWrapper}>
      <div className={`container ${styles.container}`}>
        <div className={styles.card}>
          <h2 className={styles.title}>
            {restOfTitle} <span className={styles.highlight}>{lastWord}</span>
          </h2>
          <p className={styles.subtitle}>{subtitle}</p>
          
          <div className={styles.actions}>
            {primaryCtaLink.startsWith('tel:') ? (
              <a 
                href={primaryCtaLink} 
                className={`${styles.btn} ${styles.btnPrimary}`}
              >
                <span className={styles.icon}>📞</span> {primaryCtaText}
              </a>
            ) : (
              <Link 
                href={primaryCtaLink} 
                className={`${styles.btn} ${styles.btnPrimary}`}
              >
                {primaryCtaText}
              </Link>
            )}
            
            {secondaryCtaText && secondaryCtaLink && (
              <Link 
                href={secondaryCtaLink} 
                className={`${styles.btn} ${styles.btnSecondary}`}
              >
                📅 {secondaryCtaText}
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
