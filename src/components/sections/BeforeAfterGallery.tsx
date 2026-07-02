import styles from './BeforeAfterGallery.module.css';

interface GalleryItem {
  id: string;
  caption: string;
  beforeImage: string;
  afterImage: string;
}

interface BeforeAfterGalleryProps {
  items: GalleryItem[];
}

export default function BeforeAfterGallery({ items }: BeforeAfterGalleryProps) {
  return (
    <div className={styles.gallery}>
      {items.map((item) => (
        <div key={item.id} className={styles.item}>
          <div className={styles.imageWrapper}>
            <img src={item.beforeImage} alt={`Before ${item.caption}`} className={styles.beforeImage} />
            <img src={item.afterImage} alt={`After ${item.caption}`} className={styles.afterImage} />
            <div className={styles.divider}></div>
            <div className={`${styles.label} ${styles.labelBefore}`}>Before</div>
            <div className={`${styles.label} ${styles.labelAfter}`}>After (Hover)</div>
          </div>
          <div className={styles.caption}>
            {item.caption}
          </div>
        </div>
      ))}
    </div>
  );
}
