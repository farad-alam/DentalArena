import styles from './FaqAccordion.module.css';

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqAccordionProps {
  items: FaqItem[];
}

export default function FaqAccordion({ items }: FaqAccordionProps) {
  return (
    <div className={styles.accordion}>
      {items.map((item, index) => (
        <details key={index} className={styles.item}>
          <summary className={styles.summary}>{item.question}</summary>
          <div className={styles.content}>
            <p style={{ marginTop: '1rem', marginBottom: 0 }}>{item.answer}</p>
          </div>
        </details>
      ))}
    </div>
  );
}
