import styles from './TestimonialCard.module.css';

interface TestimonialCardProps {
  quote: string;
  name: string;
  treatment: string;
  location?: string;
}

export default function TestimonialCard({
  quote,
  name,
  treatment,
  location
}: TestimonialCardProps) {
  const initial = name.charAt(0).toUpperCase();

  return (
    <div className={styles.card}>
      <div className={styles.watermark}>"</div>
      <div className={styles.stars}>★★★★★</div>
      <p className={styles.quote}>"{quote}"</p>
      
      <div className={styles.footer}>
        <div className={styles.avatar}>{initial}</div>
        <div className={styles.info}>
          <h4>{name}{location && ` • ${location}`}</h4>
          <p className={styles.treatment}>Treatment: {treatment}</p>
        </div>
      </div>
    </div>
  );
}
