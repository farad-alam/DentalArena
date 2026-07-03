import Link from 'next/link';
import styles from './page.module.css';
import TrustBar from '@/components/sections/TrustBar';
import DoctorCard from '@/components/sections/DoctorCard';
import TestimonialCard from '@/components/sections/TestimonialCard';
import CtaSection from '@/components/sections/CtaSection';

export default function Home() {
  return (
    <div className={styles.main}>
      {/* 1. Hero */}
      <section className={styles.hero}>
        <div className={styles.heroOverlay}></div>
        
        <div className="container" style={{ position: 'relative', width: '100%', zIndex: 2 }}>
          {/* Left Content */}
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>
              Expert Dental Care<br />in Rajshahi
            </h1>
            <p className={styles.heroSubtitle}>
              Modern dentistry specializing in root canal treatment, aesthetic restoration, implants, and clear aligners. 
              Two dedicated oral & dental surgeons under one roof.
            </p>
            
            <Link href="/contact" className={styles.heroButton}>
              Book a Appointment
              <span className={styles.heroButtonIcon}>→</span>
            </Link>
          </div>

          {/* Right Tags */}
          <div className={styles.servicesTags}>
            <span className={`${styles.tag} ${styles.tagActive}`}>Root Canal</span>
            <span className={styles.tag}>Implants</span>
            <span className={styles.tag}>Clear Aligners</span>
            <span className={styles.tag}>Diastema Closure</span>
            <span className={styles.tag}>Aesthetic Restorations</span>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={styles.bottomBar}>
          <div className="container">
            <span>Your Teeth Our Science</span>
          </div>
        </div>
      </section>

      {/* 2. Trust & Credentials Bar */}
      <TrustBar />

      {/* 3. Core Specialties (Redesigned) */}
      <section className="section" id="services" style={{ backgroundColor: '#f7fbfc' }}>
        <div className={`container ${styles.specialtiesLayout}`}>
          {/* Left: Image Collage */}
          <div className={styles.specialtiesImages}>
            <div className={styles.imageShape}></div>
            <img src="/images/hero_patient.png" alt="Patient Care" className={styles.imageMain} />
            <img src="/images/doctor_male.png" alt="Dentist" className={styles.imageSecondary} />
            <div className={styles.experienceBadge}>
              <strong>15+</strong>
              <span>Year Of Experiences</span>
            </div>
            <div className={styles.circularBadge}>
              <svg viewBox="0 0 100 100" className={styles.rotatingText}>
                 <path id="curve" d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" fill="transparent"/>
                 <text><textPath href="#curve">DENTAL ARENA • DENTAL ARENA • DENTAL ARENA • </textPath></text>
              </svg>
              <div className={styles.badgeIcon}>🦷</div>
            </div>
          </div>

          {/* Right: Content */}
          <div className={styles.specialtiesContent}>
            <span className={styles.specialtiesSubtitle}>DentalArena Specialties</span>
            <h2 className={styles.specialtiesTitle}>WHY CHOOSE DENTAL ARENA.</h2>
            <p className={styles.specialtiesDesc}>
              At DentalArena, we treat our patients like family. We believe your oral health is deeply connected to your overall well-being, and our practice is built on strong, long-term relationships and expert care.
            </p>
            <ul className={styles.specialtiesList}>
              <li>
                <span className={styles.checkIcon}>✔</span>
                <span>Our care is built on a foundation of well-being, balance and integrity.</span>
              </li>
              <li>
                <span className={styles.checkIcon}>✔</span>
                <span>Our team values supporting one another to maintain a positive environment.</span>
              </li>
              <li>
                <span className={styles.checkIcon}>✔</span>
                <span>As a community-focused practice, we emphasize genuine connections with our patients.</span>
              </li>
            </ul>
            <div className={styles.specialtiesActions}>
              <Link href="/contact" className={`btn btn-primary ${styles.btnPill}`}>Schedule Appointment ↗</Link>
              <div className={styles.callContact}>
                <div className={styles.callIcon}>📞</div>
                <div>
                  <span className={styles.callLabel}>Call Us Now:</span>
                  <a href="tel:01773597365" className={styles.callNumber}>+8801773-597365</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Two-Path Problem Statement */}
      <section className={styles.section}>
        <div className="container">
          <div className={styles.routingGrid}>
            <div className={styles.routeCard}>
              <h3>In pain right now?</h3>
              <p>Sharp tooth pain, infection, or fear of losing a tooth? We prioritize gentle care and can often provide same-day relief.</p>
              <Link href="/root-canal-treatment" className="btn btn-primary">See Root Canal Treatment →</Link>
            </div>
            <div className={styles.routeCard}>
              <h3>Thinking about your smile?</h3>
              <p>Self-conscious about a gap, missing tooth, or misalignment? Get specialist care for lasting, natural results.</p>
              <Link href="/dental-implants" className="btn btn-secondary" style={{ marginRight: '1rem' }}>Implants</Link>
              <Link href="/clear-aligners-diastema-closure" className="btn btn-secondary">Aligners & Diastema</Link>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Meet Your Doctors */}
      <section className={styles.teamSection}>
        <div className={styles.teamBackground}>
           <div className={styles.bgCircleTopLeft}></div>
           <div className={styles.bgCircleBottomRight}></div>
        </div>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <h2 className={styles.teamTitle}>Our Team</h2>
          <div className={styles.doctorsGrid}>
            <DoctorCard 
              name="Dr. Md. Fahim Faisal"
              credentials="BDS (RMU)"
              bmdc="17155"
              specialization="Root Canal & Aesthetic Restoration"
              imageUrl="/images/doctor_male_bw.png"
            />
            <DoctorCard 
              name="Dr. Hasna Akter Suma"
              credentials="BDS (RMU)"
              bmdc="17322"
              specialization="Implants & Clear Aligners"
              imageUrl="/images/doctor_female_bw.png"
            />
          </div>
        </div>
      </section>

      {/* 6. Hygiene & Safety Snapshot */}
      <section className={styles.hygieneSection}>
        <div className="container">
          <div className={styles.hygieneGrid}>
            <div className={styles.hygieneContent}>
              <h2>Strict Sterilization Standards</h2>
              <p>Your safety is our top priority. We use strict autoclave sterilization protocols for all instruments, ensuring a 100% safe, cross-infection-free environment for every single patient.</p>
              <Link href="/doctors#hygiene" style={{ color: 'var(--color-primary-light)', textDecoration: 'underline' }}>Read about our hygiene protocols</Link>
            </div>
            <div className={styles.hygieneImage}>
              <img src="/images/hygiene.png" alt="Sterile dental equipment" />
            </div>
          </div>
        </div>
      </section>

      {/* 7. Honest Pricing Teaser */}
      <section className={styles.pricingTeaser}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Honest Pricing, No Surprises</h2>
          <p style={{ maxWidth: '600px', margin: '0 auto 2rem' }}>We believe you should know what treatment costs before you commit. Here are starting estimates for our core treatments.</p>
          <div className={styles.pricingCards}>
            <div className={styles.pricingCard}>
              <h4>Root Canal Treatment</h4>
              <p className={styles.price}>BDT 4,000 - 8,000*</p>
              <p style={{ fontSize: '0.8rem', opacity: 0.8 }}>*Crown separate</p>
            </div>
            <div className={styles.pricingCard}>
              <h4>Dental Implant</h4>
              <p className={styles.price}>BDT 35,000 - 65,000*</p>
              <p style={{ fontSize: '0.8rem', opacity: 0.8 }}>*Per tooth</p>
            </div>
          </div>
          <Link href="/pricing" className="btn btn-primary">See Full Pricing Guide →</Link>
        </div>
      </section>

      {/* 8. Patient Testimonials */}
      <section className={styles.section}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Real Patient Stories</h2>
          <div className={styles.testimonialsGrid}>
            <TestimonialCard 
              quote="Came in with severe pain from a molar. Dr. Fahim did a root canal in two visits, and I felt absolutely no pain during or afterward. Highly recommend!"
              name="Rakibul H."
              location="Rajshahi"
              treatment="Root Canal Treatment"
            />
            <TestimonialCard 
              quote="I was always self-conscious about the gap in my front teeth. Dr. Suma explained the diastema closure perfectly and fixed it beautifully. Looks so natural!"
              name="Nusrat Jahan"
              location="Rajshahi"
              treatment="Midline Diastema Closure"
            />
            <TestimonialCard 
              quote="Very professional and clean clinic. The transparent pricing guide was exactly what I ended up paying, no hidden fees. Best dental experience I've had."
              name="Arif M."
              location="Rajshahi"
              treatment="Dental Implant"
            />
          </div>
        </div>
      </section>

      {/* 9. Final CTA */}
      <CtaSection 
        title="Ready to get started?"
        subtitle="Consultation and clear pricing provided before any treatment begins."
        primaryCtaText="Call Now"
        primaryCtaLink="tel:01773597365"
        primaryCtaUrgent={true}
        secondaryCtaText="Book Appointment Online"
        secondaryCtaLink="/contact"
      />
    </div>
  );
}
