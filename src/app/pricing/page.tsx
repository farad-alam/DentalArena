import type { Metadata } from 'next';
import styles from './page.module.css';
import PricingTable from '@/components/sections/PricingTable';
import FaqAccordion from '@/components/sections/FaqAccordion';
import CtaSection from '@/components/sections/CtaSection';

export const metadata: Metadata = {
  title: 'Pricing Guide & Costs',
  description: 'Honest, transparent pricing for root canal treatment, dental implants, and clear aligners in Rajshahi. No hidden fees.',
};

export default function PricingPage() {
  const pricingItems = [
    {
      id: "consult",
      name: "Specialist Consultation",
      description: "Initial examination and treatment planning.",
      priceRange: "BDT 500 - 1,000",
      note: "Often applied toward treatment cost."
    },
    {
      id: "rct",
      name: "Root Canal Treatment",
      description: "Removal of infected pulp, cleaning, and sealing.",
      priceRange: "BDT 4,000 - 8,000",
      note: "Crown not included. Varies by tooth (front vs. molar).",
      badge: "Most Common"
    },
    {
      id: "implant",
      name: "Dental Implant (Single)",
      description: "Titanium fixture placement.",
      priceRange: "BDT 35,000 - 65,000",
      note: "Crown included. Varies by implant brand.",
      badge: "Permanent Solution"
    },
    {
      id: "aligners",
      name: "Clear Aligners",
      description: "Full invisible orthodontic treatment.",
      priceRange: "BDT 80,000 - 150,000+",
      note: "Total cost depends on treatment duration and complexity."
    },
    {
      id: "diastema",
      name: "Midline Diastema Closure",
      description: "Closing the gap between front teeth.",
      priceRange: "BDT 5,000 - 15,000",
      note: "Varies depending on composite bonding vs. veneers."
    },
    {
      id: "aesthetic",
      name: "Aesthetic Tooth Restoration",
      description: "Tooth-colored fillings and aesthetic improvements.",
      priceRange: "BDT 1,500 - 4,000",
      note: "Per tooth."
    }
  ];

  const faqs = [
    {
      question: "Is there a payment or installment option?",
      answer: "We understand that major procedures like implants or aligners are a significant investment. Please discuss payment structures with us during your consultation; we often split the cost across your treatment visits."
    },
    {
      question: "Why do implant prices vary so much?",
      answer: "The cost depends largely on the brand and origin of the titanium implant used (e.g., Korean vs. European/American brands). We will explain the options and help you choose what fits your budget and needs."
    },
    {
      question: "Is the consultation fee applied toward treatment?",
      answer: "In many major treatment cases, the initial consultation fee is adjusted against your final treatment bill. We will confirm this with you upfront."
    },
    {
      question: "Do prices differ between Dr. Fahim and Dr. Suma?",
      answer: "No, clinic pricing is standardized for the procedures. The doctors handle different specialties, but the cost for a specific procedure is consistent."
    }
  ];

  return (
    <div className={styles.page}>
      <section className={styles.section}>
        <div className="container">
          {/* 1. Page Header */}
          <div className={styles.header}>
            <h1>Honest Pricing. No Surprises.</h1>
            <p>We believe you have the right to know what your treatment will cost before you sit in the chair. Because every mouth is different, some costs are presented as ranges based on case complexity. <strong>We will always give you a final, exact quote before any treatment begins.</strong></p>
          </div>

          {/* 2. Treatment Price Table */}
          <PricingTable items={pricingItems} />
        </div>
      </section>

      {/* 3. What's NOT Included */}
      <section className={`${styles.section} ${styles.bgSurface}`}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <div className={styles.notIncluded}>
            <h2>What Might Add to Your Cost?</h2>
            <p style={{ marginBottom: '1.5rem' }}>We want to be perfectly clear about what is typically charged separately so you aren't caught off guard:</p>
            <ul>
              <li><strong>Crowns after Root Canals:</strong> The price of a root canal does not include the protective crown placed afterward. Crowns range in price depending on the material (e.g., Zirconia, PFM).</li>
              <li><strong>X-Rays and 3D Imaging:</strong> If specific diagnostic scans are needed (especially for implants), these are usually billed separately by the imaging center.</li>
              <li><strong>Bone Grafting:</strong> If your jawbone is too thin to support an implant, a bone grafting procedure will be required at an additional cost.</li>
              <li><strong>Retainers:</strong> After clear aligner therapy is finished, you will need retainers to keep your teeth in place. This is sometimes a separate cost from the active aligners.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 4. FAQs About Cost */}
      <section className={styles.section}>
        <div className="container">
          <h2 style={{ textAlign: 'center', marginBottom: '3rem', color: 'var(--color-primary)' }}>Frequently Asked Questions About Cost</h2>
          <FaqAccordion items={faqs} />
        </div>
      </section>

      {/* 5. Final CTA */}
      <CtaSection 
        title="Get your exact quote."
        subtitle="Book a consultation. We'll examine your teeth and give you a final, transparent price before you decide anything."
        primaryCtaText="Book a Free Consultation for Your Exact Quote"
        primaryCtaLink="/contact"
      />
    </div>
  );
}
