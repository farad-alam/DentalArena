import type { Metadata } from 'next';
import Link from 'next/link';
import styles from '../service.module.css';
import SectionHero from '@/components/sections/SectionHero';
import DoctorCard from '@/components/sections/DoctorCard';
import FaqAccordion from '@/components/sections/FaqAccordion';
import CtaSection from '@/components/sections/CtaSection';

export const metadata: Metadata = {
  title: 'Root Canal Treatment',
  description: 'Gentle, pain-free root canal treatment in Rajshahi. Save your infected tooth with same-day relief and transparent pricing.',
};

export default function RootCanalPage() {
  const faqs = [
    {
      question: "Will the root canal treatment hurt?",
      answer: "With modern anesthesia, the procedure itself is largely painless. You may feel some pressure, but the sharp pain of the infection will be gone. Mild soreness for a few days afterward is normal and manageable with standard pain relievers."
    },
    {
      question: "How many visits does a root canal take?",
      answer: "Most root canals are completed in 1 to 2 visits, depending on the severity of the infection and complexity of the tooth's roots. Your doctor will advise you after the first x-ray."
    },
    {
      question: "What if I need an extraction instead?",
      answer: "We always try to save your natural tooth first, as it's better for your jaw health and bite. However, if a tooth is too damaged to support a root canal and crown, we will honestly advise extraction and discuss replacement options like implants."
    },
    {
      question: "How soon can I be seen?",
      answer: "For severe tooth pain, we prioritize emergency cases and often have same-day or next-day availability. Call us immediately during clinic hours."
    }
  ];

  return (
    <div className={styles.page}>
      {/* 1. Hero */}
      <SectionHero 
        title="Relief from Severe Tooth Pain."
        subtitle="Save your infected tooth with gentle, specialized root canal treatment. Don't let fear keep you in pain."
        primaryCtaText="Call Now for Today's Availability"
        primaryCtaLink="tel:01773597365"
        primaryCtaUrgent={true}
      />

      {/* 2. What Root Canal Involves */}
      <section className={styles.section}>
        <div className="container">
          <div className={styles.grid}>
            <div className={styles.textContent}>
              <h2>Saving Your Natural Tooth</h2>
              <p>When the inner pulp of a tooth becomes infected due to deep decay or a crack, it causes severe, throbbing pain. A root canal treatment removes this infected pulp, cleans the inside of the tooth, and seals it to prevent future infection.</p>
              <p>Many patients think extracting the tooth is the easier option. But saving your natural tooth through a root canal prevents surrounding teeth from shifting, maintains your natural bite, and is often more cost-effective long-term than extracting and replacing a tooth.</p>
            </div>
            
            <div className={styles.textContent}>
              {/* 3. Does It Actually Hurt? */}
              <h2>Does It Actually Hurt?</h2>
              <p>We know this is the biggest fear. The truth is, the sharp, throbbing pain you're feeling right now is much worse than the treatment itself.</p>
              <p>With modern local anesthesia and Dr. Fahim's gentle-care approach, the procedure is largely painless. You will feel pressure, but no sharp pain. It's normal to experience mild soreness for a few days after the procedure, but this is easily managed with standard pain medication.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Meet Dr. Fahim */}
      <section className={`${styles.section} ${styles.bgSurface}`}>
        <div className="container">
          <h2 style={{ textAlign: 'center', marginBottom: '2rem', color: 'var(--color-primary)' }}>Your Specialist Doctor</h2>
          <div style={{ maxWidth: '400px', margin: '0 auto' }}>
            <DoctorCard 
              name="Dr. Md. Fahim Faisal"
              credentials="BDS (RMU)"
              bmdc="17155"
              specialization="Root Canal & Aesthetic Restoration"
            />
          </div>
        </div>
      </section>

      {/* 5. What to Expect, Visit by Visit */}
      <section className={styles.section}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <h2 style={{ textAlign: 'center', marginBottom: '3rem', color: 'var(--color-primary)' }}>What to Expect, Step by Step</h2>
          
          <ul className={styles.stepList}>
            <li className={styles.step}>
              <div className={styles.stepNumber}>1</div>
              <div className={styles.stepContent}>
                <h4>Examination & X-Ray</h4>
                <p>We take a digital x-ray to see the shape of your root canals and determine if there is an infection in the surrounding bone. We then administer local anesthesia to numb the area completely.</p>
              </div>
            </li>
            <li className={styles.step}>
              <div className={styles.stepNumber}>2</div>
              <div className={styles.stepContent}>
                <h4>Cleaning the Canal</h4>
                <p>Dr. Fahim makes a small opening in the crown of the tooth to access and remove the infected pulp. The empty canals are then cleaned, shaped, and disinfected.</p>
              </div>
            </li>
            <li className={styles.step}>
              <div className={styles.stepNumber}>3</div>
              <div className={styles.stepContent}>
                <h4>Filling and Sealing</h4>
                <p>The cleaned space is filled with a rubber-like material to seal it completely and prevent any bacteria from re-entering.</p>
              </div>
            </li>
            <li className={styles.step}>
              <div className={styles.stepNumber}>4</div>
              <div className={styles.stepContent}>
                <h4>Restoration (Crown)</h4>
                <p>A tooth that needs a root canal is often weak. In a subsequent visit, a custom crown is placed over the tooth to protect it and restore it to full function.</p>
              </div>
            </li>
          </ul>
        </div>
      </section>

      {/* 6. Honest Price Range */}
      <section className={`${styles.section} ${styles.bgSurface}`}>
        <div className="container" style={{ maxWidth: '700px' }}>
          <div className={styles.priceCallout}>
            <h3>Root Canal Treatment Cost</h3>
            <p className={styles.priceValue}>BDT 4,000 - 8,000</p>
            <p className={styles.priceNote}>*Cost varies by tooth position (front vs. molar) and complexity. This price covers the root canal procedure itself. A protective crown (if needed) is charged separately.</p>
            <Link href="/pricing" className="btn btn-secondary">See Full Pricing Guide →</Link>
          </div>
        </div>
      </section>

      {/* 7. FAQs */}
      <section className={styles.section}>
        <div className="container">
          <h2 style={{ textAlign: 'center', marginBottom: '3rem', color: 'var(--color-primary)' }}>Frequently Asked Questions</h2>
          <FaqAccordion items={faqs} />
        </div>
      </section>

      {/* 8. Final CTA */}
      <CtaSection 
        title="Get out of pain today."
        subtitle="Gentle treatment, honest pricing, and fast relief."
        primaryCtaText="Call Now for Today's Availability"
        primaryCtaLink="tel:01773597365"
        primaryCtaUrgent={true}
      />
    </div>
  );
}
