import styles from './TrustBar.module.css';

export default function TrustBar() {
  return (
    <div className={styles.trustBar}>
      <div className="container">
        <div className={styles.items}>
          <div className={styles.item}>
            <span className={styles.icon}>🏥</span> 
            <span>BMDC Verified Surgeons</span>
          </div>
          <div className={styles.item}>
            <span className={styles.icon}>🛡️</span> 
            <span>100% Sterile Environment</span>
          </div>
          <div className={styles.item}>
            <span className={styles.icon}>✨</span> 
            <span>Pain-Free Guarantee</span>
          </div>
        </div>
      </div>
    </div>
  );
}
