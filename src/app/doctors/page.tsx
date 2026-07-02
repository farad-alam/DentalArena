import type { Metadata } from 'next';
import Link from 'next/link';
import styles from './page.module.css';
import SectionHero from '@/components/sections/SectionHero';

export const metadata: Metadata = {
  title: 'Our Specialist Doctors',
  description: 'Meet Dr. Fahim and Dr. Suma. BMDC registered oral and dental surgeons in Rajshahi offering specialized treatment in a strictly sterilized environment.',
};

export default function DoctorsPage() {
  return (
    <div className={styles.page}>
      <SectionHero 
        title="Two Specialists. One Standard of Care."
        subtitle="We believe you deserve treatment from doctors specifically trained in the procedure you need, not just general dentistry."
      />

      <section className={styles.section}>
        <div className="container">
          <div className={styles.profileGrid}>
            {/* Dr. Fahim */}
            <div className={styles.profileCard}>
              <div className={styles.header}>
                <div className={styles.avatar}>👨‍⚕️</div>
                <div className={styles.info}>
                  <h2>Dr. Md. Fahim Faisal</h2>
                  <p className={styles.credentials}>BDS (RMU), Oral & Dental Surgeon</p>
                  <p className={styles.bmdc}>BMDC Reg: 17155</p>
                </div>
              </div>
              
              <div className={styles.specialization}>
                Specialist in Root Canal Treatment & Aesthetic Tooth Restoration
              </div>
              
              <div className={styles.details}>
                <p><span>📞</span> <strong>Direct Phone:</strong> 01627-525270</p>
                <p><span>🕒</span> <strong>Availability:</strong> Sat–Thu 10AM–10PM (Fri by appointment only)</p>
                <p><span>🎯</span> <strong>Focus:</strong> Dr. Fahim is dedicated to saving natural teeth through painless, precision root canal therapy and restoring smiles with aesthetic fillings and crowns.</p>
              </div>
              
              <Link href="/root-canal-treatment" className="btn btn-secondary" style={{ marginTop: 'auto' }}>
                View Root Canal Services →
              </Link>
            </div>

            {/* Dr. Suma */}
            <div className={styles.profileCard}>
              <div className={styles.header}>
                <div className={styles.avatar}>👩‍⚕️</div>
                <div className={styles.info}>
                  <h2>Dr. Hasna Akter Suma</h2>
                  <p className={styles.credentials}>BDS (RMU), Oral & Dental Surgeon</p>
                  <p className={styles.bmdc}>BMDC Reg: 17322</p>
                </div>
              </div>
              
              <div className={styles.specialization}>
                Specialist in Dental Implants, Clear Aligners & Diastema Closure
              </div>
              
              <div className={styles.details}>
                <p><span>📞</span> <strong>Direct Phone:</strong> 01946-164121</p>
                <p><span>🕒</span> <strong>Availability:</strong> Sat–Thu 10AM–10PM (Fri by appointment only)</p>
                <p><span>🎯</span> <strong>Focus:</strong> Dr. Suma focuses on permanent, natural-looking tooth replacement through implants, and invisible orthodontic correction for a confident smile.</p>
              </div>
              
              <div style={{ display: 'flex', gap: '0.5rem', marginTop: 'auto', flexWrap: 'wrap' }}>
                <Link href="/dental-implants" className="btn btn-secondary" style={{ flexGrow: 1 }}>
                  Implants →
                </Link>
                <Link href="/clear-aligners-diastema-closure" className="btn btn-secondary" style={{ flexGrow: 1 }}>
                  Aligners →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BMDC Verification */}
      <section className={`${styles.section} ${styles.bgSurface}`}>
        <div className="container">
          <div className={styles.verificationBox}>
            <h3>How to Verify Our BMDC Registration</h3>
            <p style={{ marginBottom: '1.5rem', color: 'var(--color-text-muted)' }}>
              In Bangladesh, every practicing dentist must be registered with the Bangladesh Medical & Dental Council (BMDC). You can verify our credentials yourself instantly via SMS:
            </p>
            
            <div className={styles.verificationSteps}>
              <p><strong>To verify Dr. Fahim:</strong> Open your SMS app and type <strong>BMDC 17155</strong>. Send to <strong>16321</strong>.</p>
              <p><strong>To verify Dr. Suma:</strong> Open your SMS app and type <strong>BMDC 17322</strong>. Send to <strong>16321</strong>.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Hygiene & Sterilization Standards */}
      <section id="hygiene" className={styles.section}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 style={{ textAlign: 'center', color: 'var(--color-primary)', marginBottom: '3rem' }}>Our Hygiene & Sterilization Standards</h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', alignItems: 'center' }}>
            <div>
              <p style={{ fontSize: '1.1rem', marginBottom: '1rem' }}>We know that cross-infection is a serious concern for patients. We take it just as seriously.</p>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li style={{ paddingLeft: '1.5rem', position: 'relative', marginBottom: '1rem' }}>
                  <span style={{ position: 'absolute', left: 0, color: 'var(--color-accent)' }}>✓</span>
                  <strong>Autoclave Sterilization:</strong> All non-disposable instruments are sterilized in a medical-grade autoclave at high pressure and temperature to kill 100% of bacteria and viruses.
                </li>
                <li style={{ paddingLeft: '1.5rem', position: 'relative', marginBottom: '1rem' }}>
                  <span style={{ position: 'absolute', left: 0, color: 'var(--color-accent)' }}>✓</span>
                  <strong>Single-Use Items:</strong> Needles, suction tips, gloves, and bibs are strictly single-use and disposed of safely after every patient.
                </li>
                <li style={{ paddingLeft: '1.5rem', position: 'relative', marginBottom: '1rem' }}>
                  <span style={{ position: 'absolute', left: 0, color: 'var(--color-accent)' }}>✓</span>
                  <strong>Surface Disinfection:</strong> The dental chair and surrounding surfaces are chemically disinfected between every single appointment.
                </li>
              </ul>
            </div>
            
            <div style={{ backgroundColor: 'var(--color-primary-light)', borderRadius: 'var(--radius-lg)', padding: '3rem', textAlign: 'center' }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🛡️</div>
              <p style={{ fontWeight: 600, color: 'var(--color-primary)' }}>Your safety is guaranteed.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={`${styles.section} ${styles.bgSurface}`} style={{ textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ color: 'var(--color-primary)', marginBottom: '1.5rem' }}>Ready to get started?</h2>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="tel:01773597365" className="btn btn-primary">Call Clinic: 01773-597365</a>
            <Link href="/contact" className="btn btn-secondary">Book Appointment Online</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
