import styles from './BeforeAfterGallery.module.css';

interface GalleryItem {
  id: string;
  caption: string;
  imageUrl?: string; // Optional for now, will use placeholder if missing
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
            {item.imageUrl ? (
              // Use regular img or Next Image here later when real images are provided
              <img src={item.imageUrl} alt={item.caption} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            ) : (
              <div className={styles.placeholder}>
                📷<br/>Before/After photo<br/>(Coming Soon)
              </div>
            )}
          </div>
          <div className={styles.caption}>
            {item.caption}
          </div>
        </div>
      ))}
    </div>
  );
}
