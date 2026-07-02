import styles from './TrustBar.module.css';

export default function TrustBar() {
  return (
    <div className={styles.trustBar}>
      <div className={`container ${styles.container}`}>
        <div className={styles.item}>
          <span className={styles.icon}>🩺</span>
          <div>
            <span className={styles.text}>BMDC Registered</span>
            <span className={styles.subtext}>(Text 17155 or 17322 to 16321)</span>
          </div>
        </div>
        
        <div className={styles.item}>
          <span className={styles.icon}>👨‍⚕️</span>
          <div>
            <span className={styles.text}>Two Specialist Surgeons</span>
          </div>
        </div>
        
        <div className={styles.item}>
          <span className={styles.icon}>🕒</span>
          <div>
            <span className={styles.text}>Sat–Thu 10AM–10PM</span>
            <span className={styles.subtext}>(Fri by appt)</span>
          </div>
        </div>
      </div>
    </div>
  );
}
