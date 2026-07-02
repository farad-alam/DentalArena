import type { Metadata } from 'next';
import Link from 'next/link';
import styles from '../service.module.css';
import SectionHero from '@/components/sections/SectionHero';
import DoctorCard from '@/components/sections/DoctorCard';
import FaqAccordion from '@/components/sections/FaqAccordion';
import CtaSection from '@/components/sections/CtaSection';
import BeforeAfterGallery from '@/components/sections/BeforeAfterGallery';

export const metadata: Metadata = {
  title: 'Dental Implants',
  description: 'Restore your smile permanently with natural-looking dental implants in Rajshahi. Expert care by specialist oral surgeons.',
};

export default function DentalImplantsPage() {
  const galleryItems = [
    { id: "1", caption: "Single Missing Front Tooth Restored", beforeImage: "/images/before_smile.png", afterImage: "/images/after_smile.png" },
    { id: "2", caption: "Missing Molar Replaced with Implant", beforeImage: "/images/before_smile.png", afterImage: "/images/after_smile.png" }
  ];

  const faqs = [
    {
      question: "Is getting a dental implant painful?",
      answer: "The procedure is performed under local anesthesia, so you will not feel pain during the placement. Most patients report that the discomfort afterward is similar to, or even less than, a tooth extraction, easily managed with over-the-counter pain medication."
    },
    {
      question: "How long do implants last?",
      answer: "With proper care (brushing, flossing, and regular dental checkups), the titanium implant itself can last a lifetime. The crown placed on top usually lasts 10 to 15 years before needing replacement due to normal wear."
    },
    {
      question: "Why choose local treatment in Rajshahi over travelling to Dhaka?",
      answer: "Implant treatment requires multiple visits over several months (consultation, placement, checkups, and crown fitting). Choosing a specialist locally means no stressful travel, easier follow-up care, and seeing the same doctor throughout the entire process."
    },
    {
      question: "What if I need a bone graft?",
      answer: "If your jawbone isn't thick enough to support an implant, a bone graft may be necessary. We will assess this during your initial consultation using a 3D scan and discuss it with you upfront."
    }
  ];

  return (
    <div className={styles.page}>
      {/* 1. Hero */}
      <SectionHero 
        title="Restore Your Natural Smile."
        subtitle="Permanent, natural-looking tooth replacement. Eat, speak, and smile with confidence again."
        primaryCtaText="Book a Consultation"
        primaryCtaLink="/contact"
        secondaryCtaText="See Pricing"
        secondaryCtaLink="#pricing"
      />

      {/* 2 & 3. What an Implant Is & Who It's For */}
      <section className={styles.section}>
        <div className="container">
          <div className={styles.grid}>
            <div className={styles.textContent}>
              <h2>What is a Dental Implant?</h2>
              <p>A dental implant is the closest you can get to a healthy, natural tooth. It involves a small titanium post that is gently placed into the jawbone, acting as a replacement for the tooth's root. Once healed, a custom-made crown is attached to the post.</p>
              <p>Unlike dentures, implants don't slip or click when you talk or eat. And unlike bridges, they don't require altering the healthy teeth next to the gap.</p>
            </div>
            
            <div className={styles.textContent}>
              <h2>Is an Implant Right for You?</h2>
              <p>Dental implants are generally the best solution if you:</p>
              <ul style={{ paddingLeft: '1.5rem', marginTop: '1rem', marginBottom: '1rem' }}>
                <li style={{ marginBottom: '0.5rem' }}>Have one or more missing teeth</li>
                <li style={{ marginBottom: '0.5rem' }}>Have a tooth that is severely damaged and cannot be saved</li>
                <li style={{ marginBottom: '0.5rem' }}>Want a permanent, non-removable solution</li>
                <li style={{ marginBottom: '0.5rem' }}>Want to prevent the jawbone loss that happens when teeth are missing</li>
              </ul>
              <p>A consultation will confirm if your gums and jawbone are healthy enough to support the implant.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Meet Dr. Suma */}
      <section className={`${styles.section} ${styles.bgSurface}`}>
        <div className="container">
          <h2 style={{ textAlign: 'center', marginBottom: '2rem', color: 'var(--color-primary)' }}>Your Implant Specialist</h2>
          <div style={{ maxWidth: '400px', margin: '0 auto' }}>
            <DoctorCard 
              name="Dr. Hasna Akter Suma"
              credentials="BDS (RMU)"
              bmdc="17322"
              specialization="Implants & Clear Aligners"
            />
          </div>
        </div>
      </section>

      {/* 5. Before & After Results */}
      <section className={styles.section}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 style={{ textAlign: 'center', color: 'var(--color-primary)' }}>Real Results</h2>
          <p style={{ textAlign: 'center', color: 'var(--color-text-muted)', marginBottom: '3rem' }}>See how we've helped patients restore their smiles.</p>
          <BeforeAfterGallery items={galleryItems} />
        </div>
      </section>

      {/* 6. The Implant Process */}
      <section className={`${styles.section} ${styles.bgSurface}`}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <h2 style={{ textAlign: 'center', marginBottom: '3rem', color: 'var(--color-primary)' }}>The Process, Step by Step</h2>
          
          <ul className={styles.stepList}>
            <li className={styles.step}>
              <div className={styles.stepNumber}>1</div>
              <div className={styles.stepContent}>
                <h4>Consultation & Imaging</h4>
                <p>We thoroughly examine your mouth and take necessary x-rays or 3D scans to assess bone density and plan the exact placement of the implant.</p>
              </div>
            </li>
            <li className={styles.step}>
              <div className={styles.stepNumber}>2</div>
              <div className={styles.stepContent}>
                <h4>Implant Placement</h4>
                <p>Under local anesthesia, the titanium implant post is precisely placed into your jawbone. The procedure is typically quick and comfortable.</p>
              </div>
            </li>
            <li className={styles.step}>
              <div className={styles.stepNumber}>3</div>
              <div className={styles.stepContent}>
                <h4>Healing Period (Osseointegration)</h4>
                <p>Over the next few months, the implant fuses securely with your natural jawbone. We will provide a temporary tooth replacement during this time if needed.</p>
              </div>
            </li>
            <li className={styles.step}>
              <div className={styles.stepNumber}>4</div>
              <div className={styles.stepContent}>
                <h4>Crown Placement</h4>
                <p>Once fully healed, we attach an abutment and your final, custom-made crown. You leave with a fully restored smile.</p>
              </div>
            </li>
          </ul>
        </div>
      </section>

      {/* 7. Honest Price Range */}
      <section id="pricing" className={styles.section}>
        <div className="container" style={{ maxWidth: '700px' }}>
          <div className={styles.priceCallout}>
            <h3>Dental Implant Cost</h3>
            <p className={styles.priceValue}>BDT 35,000 - 65,000</p>
            <p className={styles.priceNote}>*Per tooth. The starting price covers the implant fixture and placement. Variables include the brand of implant chosen, the type of crown, and whether bone grafting or x-rays are needed.</p>
            <Link href="/pricing" className="btn btn-secondary">See Full Pricing Guide →</Link>
          </div>
        </div>
      </section>

      {/* 8. FAQs */}
      <section className={`${styles.section} ${styles.bgSurface}`}>
        <div className="container">
          <h2 style={{ textAlign: 'center', marginBottom: '3rem', color: 'var(--color-primary)' }}>Frequently Asked Questions</h2>
          <FaqAccordion items={faqs} />
        </div>
      </section>

      {/* 9. Final CTA */}
      <CtaSection 
        title="Ready to restore your smile?"
        subtitle="Book a consultation to see if dental implants are right for you. No pressure, just clear answers."
        primaryCtaText="Book a Consultation"
        primaryCtaLink="/contact"
      />
    </div>
  );
}
