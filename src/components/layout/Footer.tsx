import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container`}>
        <div className={styles.grid}>
          <div className={styles.brand}>
            <h3>DentalArena</h3>
            <p>76, Bospara, Bazar–Talaimari Road</p>
            <p>Rajshahi (near Shah Makhdoom College)</p>
            <p>Sat–Thu 10AM–10PM, Fri by appointment</p>
            <p style={{ marginTop: '1rem', color: 'var(--color-white)' }}>
              <strong>Appointment: 01773-597365</strong>
            </p>
          </div>
          
          <div>
            <h4 className={styles.heading}>Services</h4>
            <div className={styles.links}>
              <Link href="/root-canal-treatment" className={styles.link}>Root Canal Treatment</Link>
              <Link href="/dental-implants" className={styles.link}>Dental Implants</Link>
              <Link href="/clear-aligners-diastema-closure" className={styles.link}>Clear Aligners</Link>
              <Link href="/clear-aligners-diastema-closure" className={styles.link}>Diastema Closure</Link>
              <Link href="/pricing" className={styles.link}>Pricing Guide</Link>
            </div>
          </div>
          
          <div>
            <h4 className={styles.heading}>Clinic</h4>
            <div className={styles.links}>
              <Link href="/doctors" className={styles.link}>Our Doctors</Link>
              <Link href="/faq" className={styles.link}>FAQ</Link>
              <Link href="/contact" className={styles.link}>Contact Us</Link>
            </div>
            
            <div style={{ marginTop: '1.5rem' }}>
              <p style={{ fontSize: '0.85rem', opacity: 0.8 }}>BMDC Registration:</p>
              <p style={{ fontSize: '0.85rem', opacity: 0.8 }}>Dr. Fahim: 17155 | Dr. Suma: 17322</p>
              <p style={{ fontSize: '0.85rem', opacity: 0.8 }}>Verify by texting number to 16321</p>
            </div>
          </div>
        </div>
        
        <div className={styles.bottom}>
          <p>&copy; {new Date().getFullYear()} DentalArena Rajshahi. All rights reserved.</p>
          <Link href="/privacy-policy" className={styles.link}>Privacy Policy</Link>
        </div>
      </div>
    </footer>
  );
}
