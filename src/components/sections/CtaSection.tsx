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
  return (
    <section className={styles.section}>
      <div className={`container ${styles.container}`}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.subtitle}>{subtitle}</p>
        
        <div className={styles.actions}>
          {primaryCtaLink.startsWith('tel:') ? (
            <a 
              href={primaryCtaLink} 
              className={`btn ${primaryCtaUrgent ? 'btn-urgent' : 'btn-primary'}`}
            >
              {primaryCtaText}
            </a>
          ) : (
            <Link 
              href={primaryCtaLink} 
              className={`btn ${primaryCtaUrgent ? 'btn-urgent' : 'btn-primary'}`}
            >
              {primaryCtaText}
            </Link>
          )}
          
          {secondaryCtaText && secondaryCtaLink && (
            <Link 
              href={secondaryCtaLink} 
              className="btn btn-secondary"
            >
              {secondaryCtaText}
            </Link>
          )}
        </div>
        
        {!primaryCtaLink.startsWith('tel:') && (
          <a href="tel:01773597365" className={styles.phoneLink}>
            Or call us directly: 01773-597365
          </a>
        )}
      </div>
    </section>
  );
}
