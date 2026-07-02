import type { Metadata } from 'next';
import Link from 'next/link';
import styles from '../service.module.css';
import SectionHero from '@/components/sections/SectionHero';
import DoctorCard from '@/components/sections/DoctorCard';
import FaqAccordion from '@/components/sections/FaqAccordion';
import CtaSection from '@/components/sections/CtaSection';
import BeforeAfterGallery from '@/components/sections/BeforeAfterGallery';

export const metadata: Metadata = {
  title: 'Clear Aligners & Diastema Closure',
  description: 'Close gaps and straighten teeth discreetly in Rajshahi. We offer specialized midline diastema closure and clear aligner therapy.',
};

export default function ClearAlignersPage() {
  const galleryItems = [
    { id: "1", caption: "Midline Diastema Closure (Gap Fixed)", beforeImage: "/images/before_smile.png", afterImage: "/images/after_smile.png" },
    { id: "2", caption: "Clear Aligner Result (Alignment)", beforeImage: "/images/before_smile.png", afterImage: "/images/after_smile.png" }
  ];

  const faqs = [
    {
      question: "How long does clear aligner treatment take?",
      answer: "Depending on the complexity of your case, treatment typically takes between 6 to 18 months. Diastema closure with composite resin can often be done in a single visit."
    },
    {
      question: "Are clear aligners removable?",
      answer: "Yes, you remove them to eat, drink (anything other than water), brush, and floss. However, for best results, they must be worn for 20-22 hours a day."
    },
    {
      question: "Will the diastema closure look natural?",
      answer: "Absolutely. Dr. Suma carefully matches the composite resin or veneer to the exact shade and translucency of your natural teeth, so the closure blends in seamlessly."
    },
    {
      question: "Can these treatments be combined with others?",
      answer: "Yes. Many patients undergo teeth whitening or scaling before starting alignment or cosmetic closure to ensure the best possible aesthetic result."
    }
  ];

  return (
    <div className={styles.page}>
      {/* 1. Hero */}
      <SectionHero 
        title="Your Perfect Smile, Discreetly."
        subtitle="Self-conscious about a gap or misaligned teeth? Explore our modern, nearly invisible solutions to straighten and perfect your smile."
        primaryCtaText="Book a Consultation"
        primaryCtaLink="/contact"
      />

      {/* 2. Which Treatment Is Right for You? (Comparison) */}
      <section className={styles.section}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 style={{ textAlign: 'center', marginBottom: '3rem', color: 'var(--color-primary)' }}>Which Treatment is Right For You?</h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            <div style={{ padding: '2rem', backgroundColor: 'var(--color-surface)', borderRadius: 'var(--radius-lg)', borderTop: '4px solid var(--color-primary)' }}>
              <h3 style={{ color: 'var(--color-primary)', marginTop: 0 }}>Clear Aligners</h3>
              <p>Best for overall bite alignment and straightening multiple crooked teeth.</p>
              <ul style={{ paddingLeft: '1.5rem', marginTop: '1rem', color: 'var(--color-text-muted)' }}>
                <li>Corrects crookedness, crowding, and bite issues</li>
                <li>Requires wearing trays daily for several months</li>
                <li>Gradually shifts teeth into proper position</li>
                <li>A modern, invisible alternative to metal braces</li>
              </ul>
            </div>
            
            <div style={{ padding: '2rem', backgroundColor: 'var(--color-surface)', borderRadius: 'var(--radius-lg)', borderTop: '4px solid var(--color-accent)' }}>
              <h3 style={{ color: 'var(--color-accent-dark)', marginTop: 0 }}>Midline Diastema Closure</h3>
              <p>Best for targeted gap closure, usually between the front two teeth.</p>
              <ul style={{ paddingLeft: '1.5rem', marginTop: '1rem', color: 'var(--color-text-muted)' }}>
                <li>Specifically fixes visible gaps without moving the roots</li>
                <li>Often completed quickly, sometimes in one visit</li>
                <li>Uses tooth-colored composite resin or veneers</li>
                <li>More affordable and faster than full alignment</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 3 & 4. What's Included */}
      <section className={`${styles.section} ${styles.bgSurface}`}>
        <div className="container">
          <div className={styles.grid}>
            <div className={styles.textContent}>
              <h2>Clear Aligners: What to Expect</h2>
              <p>Clear aligners (like Invisalign) use a series of custom-made, clear plastic trays to gently shift your teeth into place. They are virtually invisible, making them popular for adults and teens who want to avoid metal braces.</p>
              <p>We'll take digital impressions of your teeth to create a precise treatment plan. You'll change your aligners every 1-2 weeks, visiting us periodically to monitor progress. Commitment is key—you must wear them 20-22 hours a day.</p>
            </div>
            
            <div className={styles.textContent}>
              <h2>Diastema Closure: What to Expect</h2>
              <p>If your main concern is a single gap, especially between your front teeth, full aligners might not be necessary. We can often close the gap aesthetically.</p>
              <p>This is typically done using dental bonding (composite resin) applied directly to the teeth, carefully shaped and polished to match perfectly. It's a minimally invasive procedure that provides immediate, dramatic results without the wait of orthodontics.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Meet Dr. Suma */}
      <section className={styles.section}>
        <div className="container">
          <h2 style={{ textAlign: 'center', marginBottom: '2rem', color: 'var(--color-primary)' }}>Your Aesthetic Specialist</h2>
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

      {/* 6. Before & After Results */}
      <section className={`${styles.section} ${styles.bgSurface}`}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 style={{ textAlign: 'center', color: 'var(--color-primary)' }}>Real Results</h2>
          <p style={{ textAlign: 'center', color: 'var(--color-text-muted)', marginBottom: '3rem' }}>See the difference cosmetic treatment can make.</p>
          <BeforeAfterGallery items={galleryItems} />
        </div>
      </section>

      {/* 7. Honest Price Range */}
      <section className={styles.section}>
        <div className="container" style={{ maxWidth: '700px' }}>
          <h2 style={{ textAlign: 'center', color: 'var(--color-primary)', marginBottom: '2rem' }}>Estimated Costs</h2>
          <div style={{ display: 'grid', gap: '2rem' }}>
            <div className={styles.priceCallout} style={{ margin: 0 }}>
              <h3>Midline Diastema Closure</h3>
              <p className={styles.priceValue}>BDT 5,000 - 15,000</p>
              <p className={styles.priceNote}>*Typically a lower, contained cost per gap depending on the material used (composite bonding vs. veneers).</p>
            </div>
            <div className={styles.priceCallout} style={{ margin: 0 }}>
              <h3>Clear Aligners</h3>
              <p className={styles.priceValue}>BDT 80,000 - 150,000+</p>
              <p className={styles.priceNote}>*Total treatment cost. Varies significantly based on case complexity and treatment duration.</p>
            </div>
          </div>
          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
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
        title="Find out which option is best for you."
        subtitle="Book a consultation to have your smile evaluated. We'll answer all your questions so you can decide with confidence."
        primaryCtaText="Book a Consultation"
        primaryCtaLink="/contact"
      />
    </div>
  );
}
