import Link from 'next/link';
import styles from './DoctorCard.module.css';

interface DoctorCardProps {
  name: string;
  credentials: string;
  bmdc: string;
  specialization: string;
  linkHref?: string;
}

export default function DoctorCard({
  name,
  credentials,
  bmdc,
  specialization,
  linkHref = "/doctors"
}: DoctorCardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <div className={styles.avatar}>👨‍⚕️</div>
        <div className={styles.info}>
          <h3>{name}</h3>
          <p className={styles.credentials}>{credentials}</p>
          <p className={styles.credentials}>BMDC Reg: {bmdc}</p>
        </div>
      </div>
      
      <div className={styles.specialization}>
        Specializes in: {specialization}
      </div>
      
      <Link href={linkHref} className={styles.link}>
        View Full Profile <span>→</span>
      </Link>
    </div>
  );
}
