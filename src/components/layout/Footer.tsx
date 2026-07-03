import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container`}>
        <div className={styles.grid}>
          {/* Column 1 */}
          <div className={styles.col}>
            <div className={styles.brandContainer}>
              <div className={styles.logoIcon}>🦷</div>
              <h3 className={styles.brandTitle}>DentalArena.</h3>
            </div>
            <p className={styles.textMuted}>
              76, Bospara, Bazar–Talaimari Road<br/>
              Rajshahi (near Shah Makhdoom College)<br/>
              Sat–Thu 10AM–10PM, Fri by appointment
            </p>
            <div className={styles.socials}>
              <span>f</span>
              <span>in</span>
              <span>x</span>
            </div>
            <p className={styles.appointmentText}>
              Appointment: <strong>01773-597365</strong>
            </p>
          </div>
          
          {/* Column 2 */}
          <div className={styles.col}>
            <h4 className={styles.heading}>Services</h4>
            <div className={styles.links}>
              <Link href="/root-canal-treatment" className={styles.link}>Root Canal Treatment</Link>
              <Link href="/dental-implants" className={styles.link}>Dental Implants</Link>
              <Link href="/clear-aligners-diastema-closure" className={styles.link}>Clear Aligners</Link>
              <Link href="/clear-aligners-diastema-closure" className={styles.link}>Diastema Closure</Link>
              <Link href="/pricing" className={styles.link}>Pricing Guide</Link>
            </div>
          </div>
          
          {/* Column 3 */}
          <div className={styles.col}>
            <h4 className={styles.heading}>Clinic</h4>
            <div className={styles.links}>
              <Link href="/doctors" className={styles.link}>Our Doctors</Link>
              <Link href="/faq" className={styles.link}>FAQ</Link>
              <Link href="/contact" className={styles.link}>Contact Us</Link>
            </div>
            
            <div className={styles.bmdc}>
              <p>BMDC Registration:</p>
              <p>Dr. Fahim: 17155 | Dr. Suma: 17322</p>
              <p>Verify by texting number to 16321</p>
            </div>
          </div>

          {/* Column 4 - Contact Form (matching design) */}
          <div className={styles.col}>
             <h4 className={styles.heading}>Contact us from</h4>
             <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
               <input type="text" placeholder="Full name" className={styles.input} />
               <input type="text" placeholder="Enter email or phone" className={styles.input} />
               <textarea placeholder="Message" className={styles.textarea} rows={4}></textarea>
               <button type="button" className={styles.submitBtn}>Send message</button>
             </form>
          </div>
        </div>
        
        <div className={styles.bottom}>
          <p>&copy; {new Date().getFullYear()} DentalArena Rajshahi. All rights reserved.</p>
          <div className={styles.bottomLinks}>
            <Link href="/privacy-policy" className={styles.link}>Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
