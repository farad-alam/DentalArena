import type { Metadata } from 'next';
import Link from 'next/link';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Contact Us & Book Appointment',
  description: 'Book an appointment at DentalArena Rajshahi. Call us directly or submit an online request.',
};

export default function ContactPage() {
  return (
    <div className={styles.page}>
      <section className={styles.section} style={{ paddingBottom: 0 }}>
        <div className="container">
          <div className={styles.header}>
            <h1>Let's get you seen.</h1>
            <p style={{ fontSize: '1.1rem', color: 'var(--color-text-muted)' }}>
              Call during clinic hours for the fastest response, or submit the form below and we'll call you back to confirm your appointment.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className="container">
          <div className={styles.grid}>
            
            {/* Direct Contacts */}
            <div className={styles.directContacts}>
              <h2 style={{ marginBottom: '1rem', color: 'var(--color-primary)' }}>Call the Right Doctor Directly</h2>
              
              <div className={styles.contactCard} style={{ borderLeftColor: 'var(--color-cta-urgent)' }}>
                <h3>For Tooth Pain or Root Canal</h3>
                <p>Speak directly with Dr. Fahim for urgent relief or restorative treatment.</p>
                <a href="tel:01627525270" className="btn btn-urgent" style={{ width: '100%' }}>Call Dr. Fahim: 01627-525270</a>
              </div>
              
              <div className={styles.contactCard}>
                <h3>For Implants, Aligners, or Diastema</h3>
                <p>Speak directly with Dr. Suma to discuss aesthetic or replacement options.</p>
                <a href="tel:01946164121" className="btn btn-primary" style={{ width: '100%' }}>Call Dr. Suma: 01946-164121</a>
              </div>

              <div className={styles.contactCard} style={{ borderLeftColor: 'var(--color-text-muted)', backgroundColor: 'var(--color-surface)' }}>
                <h3 style={{ color: 'var(--color-text-primary)' }}>General Clinic Inquiries</h3>
                <p>For general appointments, checkups, or if you're unsure who to speak with.</p>
                <a href="tel:01773597365" className="btn btn-secondary" style={{ width: '100%' }}>Call Clinic: 01773-597365</a>
              </div>
            </div>

            {/* Appointment Form */}
            <div>
              <div className={styles.formBox}>
                <h2 style={{ marginBottom: '1.5rem', color: 'var(--color-primary)' }}>Request an Appointment</h2>
                {/* Note: Using a simple form action for demonstration. In production, connect to a backend API or service. */}
                <form action="/thank-you" method="GET">
                  <div className={styles.formGroup}>
                    <label htmlFor="name">Full Name</label>
                    <input type="text" id="name" name="name" required placeholder="Your name" />
                  </div>
                  
                  <div className={styles.formGroup}>
                    <label htmlFor="phone">Phone Number</label>
                    <input type="tel" id="phone" name="phone" required placeholder="017..." />
                  </div>
                  
                  <div className={styles.formGroup}>
                    <label htmlFor="service">Preferred Service / Reason for Visit</label>
                    <select id="service" name="service" required>
                      <option value="">Select an option...</option>
                      <option value="pain">Tooth Pain / Root Canal</option>
                      <option value="implant">Dental Implant</option>
                      <option value="aligners">Clear Aligners / Gap Closure</option>
                      <option value="checkup">General Checkup / Consultation</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  
                  <div className={styles.formGroup}>
                    <label htmlFor="message">Message (Optional)</label>
                    <textarea id="message" name="message" rows={3} placeholder="Any specific details?"></textarea>
                  </div>
                  
                  <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '1rem' }}>
                    Send My Appointment Request
                  </button>
                  <p style={{ textAlign: 'center', fontSize: '0.8rem', marginTop: '1rem', color: 'var(--color-text-muted)' }}>
                    By submitting, you agree to our <Link href="/privacy-policy" style={{ textDecoration: 'underline' }}>Privacy Policy</Link>.
                  </p>
                </form>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* Location & Hours */}
      <section className={`${styles.section} ${styles.bgSurface}`}>
        <div className="container">
          <div className={styles.infoGrid}>
            <div className={styles.infoBox}>
              <h3>Location & Hours</h3>
              <div style={{ marginBottom: '2rem' }}>
                <p><strong>Address:</strong><br/>
                76, Bospara, Bazar–Talaimari Road<br/>
                Rajshahi (East end of Shah Makhdoom College)</p>
              </div>
              
              <div style={{ marginBottom: '2rem' }}>
                <p><strong>Clinic Hours:</strong></p>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  <li style={{ display: 'flex', justifyContent: 'space-between', padding: '0.5rem 0', borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
                    <span>Saturday – Thursday</span>
                    <strong>10:00 AM – 10:00 PM</strong>
                  </li>
                  <li style={{ display: 'flex', justifyContent: 'space-between', padding: '0.5rem 0' }}>
                    <span>Friday</span>
                    <strong>By Appointment Only</strong>
                  </li>
                </ul>
              </div>

              <div>
                <h4 style={{ marginBottom: '0.5rem' }}>Quick FAQs</h4>
                <p style={{ fontSize: '0.9rem', marginBottom: '0.5rem' }}><strong>Do I need to call ahead for Friday?</strong> Yes, the clinic is only open for pre-scheduled appointments on Fridays.</p>
                <p style={{ fontSize: '0.9rem', marginBottom: '0.5rem' }}><strong>Is there parking nearby?</strong> Street parking is generally available near the clinic.</p>
                <p style={{ fontSize: '0.9rem' }}><strong>What should I bring?</strong> Bring any previous dental records or x-rays if you have them.</p>
              </div>
            </div>
            
            <div className={styles.mapWrapper}>
              {/* Google Maps Embed Placeholder */}
              <div style={{ textAlign: 'center', color: 'var(--color-text-muted)', padding: '2rem' }}>
                <span style={{ fontSize: '3rem' }}>🗺️</span>
                <p>Interactive Map Placeholder</p>
                <p style={{ fontSize: '0.85rem' }}>(Requires Google Maps API Key)</p>
                <a href="https://maps.google.com/?q=Talaimari+Rajshahi" target="_blank" rel="noopener noreferrer" className="btn btn-secondary" style={{ marginTop: '1rem' }}>Open in Google Maps</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
