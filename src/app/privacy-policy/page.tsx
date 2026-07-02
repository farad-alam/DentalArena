import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy for DentalArena Rajshahi.',
};

export default function PrivacyPolicyPage() {
  return (
    <div style={{ padding: '4rem 0', backgroundColor: 'var(--color-surface)', minHeight: '100vh' }}>
      <div className="container" style={{ maxWidth: '800px', backgroundColor: 'var(--color-white)', padding: '3rem', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-sm)' }}>
        <h1 style={{ color: 'var(--color-primary)', marginBottom: '2rem' }}>Privacy Policy</h1>
        
        <div style={{ lineHeight: 1.6, color: 'var(--color-text-primary)' }}>
          <p style={{ marginBottom: '1.5rem' }}>
            At DentalArena, we take your privacy seriously. This Privacy Policy explains how we collect, use, and protect your personal information when you use our website or visit our clinic.
          </p>

          <h2 style={{ color: 'var(--color-primary)', marginTop: '2rem', marginBottom: '1rem', fontSize: '1.5rem' }}>1. Information We Collect</h2>
          <p style={{ marginBottom: '1rem' }}>We only collect information that you voluntarily provide to us when booking an appointment or contacting us:</p>
          <ul style={{ paddingLeft: '2rem', marginBottom: '1.5rem' }}>
            <li style={{ marginBottom: '0.5rem' }}>Name</li>
            <li style={{ marginBottom: '0.5rem' }}>Phone number</li>
            <li style={{ marginBottom: '0.5rem' }}>Requested treatment or reason for visit</li>
            <li style={{ marginBottom: '0.5rem' }}>Any message or details you include in your form submission</li>
          </ul>

          <h2 style={{ color: 'var(--color-primary)', marginTop: '2rem', marginBottom: '1rem', fontSize: '1.5rem' }}>2. How We Use Your Information</h2>
          <p style={{ marginBottom: '1rem' }}>The information collected is used solely for the following purposes:</p>
          <ul style={{ paddingLeft: '2rem', marginBottom: '1.5rem' }}>
            <li style={{ marginBottom: '0.5rem' }}>To contact you and confirm your appointment</li>
            <li style={{ marginBottom: '0.5rem' }}>To understand your dental needs before your visit</li>
            <li style={{ marginBottom: '0.5rem' }}>To answer any questions you submit via our contact form</li>
          </ul>

          <h2 style={{ color: 'var(--color-primary)', marginTop: '2rem', marginBottom: '1rem', fontSize: '1.5rem' }}>3. Data Protection</h2>
          <p style={{ marginBottom: '1.5rem' }}>
            Your contact information is kept strictly confidential. We do not sell, rent, or share your personal information with third parties for marketing purposes.
          </p>

          <h2 style={{ color: 'var(--color-primary)', marginTop: '2rem', marginBottom: '1rem', fontSize: '1.5rem' }}>4. Medical Privacy</h2>
          <p style={{ marginBottom: '1.5rem' }}>
            Any medical information discussed during your consultation or treatment is protected by standard doctor-patient confidentiality. We will never share photos (like before/after pictures) on our website or social media without your explicit, written consent.
          </p>

          <h2 style={{ color: 'var(--color-primary)', marginTop: '2rem', marginBottom: '1rem', fontSize: '1.5rem' }}>5. Contact Us</h2>
          <p style={{ marginBottom: '1.5rem' }}>
            If you have any questions about how we handle your data, please contact us at 01773-597365 or visit the clinic in person.
          </p>

          <div style={{ marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid var(--color-surface)' }}>
            <Link href="/" className="btn btn-secondary">← Back to Home</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
