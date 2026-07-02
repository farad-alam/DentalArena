import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Appointment Request Received',
  robots: {
    index: false,
    follow: false,
  },
};

export default function ThankYouPage() {
  return (
    <div style={{ padding: '6rem 0', backgroundColor: 'var(--color-surface)', minHeight: '80vh', display: 'flex', alignItems: 'center' }}>
      <div className="container" style={{ maxWidth: '600px', textAlign: 'center', backgroundColor: 'var(--color-white)', padding: '4rem', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-md)' }}>
        
        <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>✅</div>
        <h1 style={{ color: 'var(--color-primary)', marginBottom: '1rem' }}>Request Received!</h1>
        
        <p style={{ fontSize: '1.1rem', color: 'var(--color-text-primary)', marginBottom: '2rem', lineHeight: 1.6 }}>
          Thank you for reaching out to DentalArena. We have received your appointment request. 
          <strong> Our team will call you shortly on the phone number provided to confirm the exact time and date.</strong>
        </p>

        <div style={{ backgroundColor: 'var(--color-primary-light)', padding: '2rem', borderRadius: 'var(--radius-md)', marginBottom: '2rem' }}>
          <h3 style={{ color: 'var(--color-primary)', marginBottom: '0.5rem', fontSize: '1.1rem' }}>In Pain or In a Hurry?</h3>
          <p style={{ fontSize: '0.9rem', marginBottom: '1rem' }}>You don't have to wait for our callback. Call us directly right now:</p>
          <a href="tel:01773597365" className="btn btn-urgent">Call Now: 01773-597365</a>
        </div>

        <Link href="/" className="btn btn-secondary">
          Return to Homepage
        </Link>
      </div>
    </div>
  );
}
