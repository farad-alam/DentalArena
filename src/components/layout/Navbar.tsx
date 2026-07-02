import Link from 'next/link';
import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <header className={styles.navbar}>
      <div className={`container ${styles.container}`}>
        <Link href="/" className={styles.logo}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v4h4v2h-4v4h-2v-4H7v-2h4V7z" fill="var(--color-primary)"/>
          </svg>
          DentalArena
        </Link>
        
        <nav className={styles.navLinks}>
          <Link href="/root-canal-treatment" className={styles.navLink}>Root Canal</Link>
          <Link href="/dental-implants" className={styles.navLink}>Implants</Link>
          <Link href="/clear-aligners-diastema-closure" className={styles.navLink}>Aligners & Diastema</Link>
          <Link href="/pricing" className={styles.navLink}>Pricing</Link>
          <Link href="/doctors" className={styles.navLink}>Doctors</Link>
          <Link href="/faq" className={styles.navLink}>FAQ</Link>
        </nav>

        <div className={styles.actions}>
          <a href="tel:01773597365" className={styles.phone}>📞 01773-597365</a>
          <Link href="/contact" className="btn btn-primary">Book Appointment</Link>
          <button className={styles.mobileMenuBtn} aria-label="Menu">
            ☰
          </button>
        </div>
      </div>
    </header>
  );
}
