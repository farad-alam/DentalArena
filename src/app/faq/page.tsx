import type { Metadata } from 'next';
import FaqAccordion from '@/components/sections/FaqAccordion';
import CtaSection from '@/components/sections/CtaSection';

export const metadata: Metadata = {
  title: 'Frequently Asked Questions',
  description: 'Answers to common questions about root canal, dental implants, clear aligners, costs, and clinic standards at DentalArena Rajshahi.',
};

export default function FaqPage() {
  const painFaqs = [
    { question: "Does a root canal hurt?", answer: "With modern anesthesia, the procedure itself is largely painless. You may feel some pressure, but the sharp pain of the infection will be gone." },
    { question: "Is it cheaper to extract a tooth or get a root canal?", answer: "An extraction is cheaper upfront, but replacing the tooth later (with an implant or bridge to prevent jawbone loss and shifting teeth) is much more expensive than a root canal." },
    { question: "How many visits does a root canal take?", answer: "Usually 1 to 2 visits depending on the severity of the infection." },
    { question: "What happens if I leave a cavity untreated?", answer: "A cavity will eventually reach the inner pulp of the tooth, causing severe pain, infection, and the need for a root canal or extraction." }
  ];

  const implantAlignerFaqs = [
    { question: "How long do dental implants last?", answer: "With proper care, the titanium implant can last a lifetime, while the crown may need replacement every 10-15 years." },
    { question: "Is getting an implant painful?", answer: "It's done under local anesthesia, so you won't feel pain during placement. Post-procedure soreness is usually mild and easily managed." },
    { question: "What is the difference between clear aligners and braces?", answer: "Clear aligners are removable, nearly invisible plastic trays, whereas braces are fixed metal or ceramic brackets. Aligners are more discreet and allow for easier eating and brushing." },
    { question: "How long does clear aligner treatment take?", answer: "Usually 6 to 18 months, depending on how much your teeth need to move." },
    { question: "Can gap teeth (diastema) be fixed without braces?", answer: "Yes, we can often close a midline gap in a single visit using composite resin bonding (diastema closure) without needing braces or aligners." }
  ];

  const costFaqs = [
    { question: "How much does a root canal cost?", answer: "Starting from BDT 4,000 to 8,000 depending on the tooth, not including the crown." },
    { question: "How much does a dental implant cost?", answer: "Starting from BDT 35,000 to 65,000 per tooth, depending on the brand and materials used." },
    { question: "Do you have a consultation fee?", answer: "Yes, consultation is typically BDT 500 - 1,000, which is often adjusted against your final treatment bill if you proceed." },
    { question: "Do you offer installment payments?", answer: "For major procedures, we often split the cost across your treatment visits. We can discuss options during your consultation." }
  ];

  const safetyFaqs = [
    { question: "How do I verify a dentist's BMDC registration?", answer: "You can verify any Bangladeshi dentist by texting their registration number (e.g., BMDC 17155) to 16321." },
    { question: "What are your sterilization standards?", answer: "We use strict medical-grade autoclave sterilization for all non-disposable instruments and single-use items for everything else. Your safety is our absolute priority." },
    { question: "What should I expect at my first visit?", answer: "A full examination, likely a digital x-ray, a discussion of your diagnosis, and a transparent explanation of your treatment options and costs before any work begins." }
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <section style={{ padding: '4rem 0', backgroundColor: 'var(--color-primary-light)', textAlign: 'center' }}>
        <div className="container">
          <h1 style={{ color: 'var(--color-primary)', marginBottom: '1rem' }}>Frequently Asked Questions</h1>
          <p style={{ fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto' }}>Find answers to common questions about our treatments, costs, and clinic.</p>
        </div>
      </section>

      <section style={{ padding: '4rem 0' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          
          <div style={{ marginBottom: '4rem' }}>
            <h2 style={{ color: 'var(--color-primary)', marginBottom: '2rem' }}>Root Canal & Tooth Pain</h2>
            <FaqAccordion items={painFaqs} />
          </div>
          
          <div style={{ marginBottom: '4rem' }}>
            <h2 style={{ color: 'var(--color-primary)', marginBottom: '2rem' }}>Implants & Clear Aligners</h2>
            <FaqAccordion items={implantAlignerFaqs} />
          </div>

          <div style={{ marginBottom: '4rem' }}>
            <h2 style={{ color: 'var(--color-primary)', marginBottom: '2rem' }}>Cost & Booking</h2>
            <FaqAccordion items={costFaqs} />
          </div>

          <div style={{ marginBottom: '2rem' }}>
            <h2 style={{ color: 'var(--color-primary)', marginBottom: '2rem' }}>Credentials & Safety</h2>
            <FaqAccordion items={safetyFaqs} />
          </div>

        </div>
      </section>

      <CtaSection 
        title="Still have questions?"
        subtitle="Call us during clinic hours or book a consultation to discuss your specific needs."
        primaryCtaText="Call: 01773-597365"
        primaryCtaLink="tel:01773597365"
        secondaryCtaText="Contact Us"
        secondaryCtaLink="/contact"
      />
    </div>
  );
}
