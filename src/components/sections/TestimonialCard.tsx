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
      <div className={styles.avatar}>{initial}</div>
      <div className={styles.info}>
        <h4 className={styles.name}>{name}</h4>
        <p className={styles.treatment}>{treatment}</p>
      </div>
      <p className={styles.quote}>{quote}</p>
    </div>
  );
}
