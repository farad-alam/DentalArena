import styles from './DoctorCard.module.css';

interface DoctorCardProps {
  name: string;
  credentials: string;
  bmdc: string;
  specialization: string;
  linkHref?: string;
  imageUrl?: string;
}

export default function DoctorCard({
  name,
  credentials,
  bmdc,
  specialization,
  linkHref = "/doctors",
  imageUrl
}: DoctorCardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.imageSection}>
        {imageUrl ? (
          <img src={imageUrl} alt={name} className={styles.image} />
        ) : (
          <div className={styles.placeholderImage}>👨‍⚕️</div>
        )}
      </div>
      <div className={styles.infoSection}>
        <h3 className={styles.name}>{name}</h3>
        <p className={styles.designation}>{credentials}</p>
        <p className={styles.description}>
          Specializing in {specialization}. BMDC Reg: {bmdc}
        </p>
        <div className={styles.socials}>
           <span>f</span>
           <span>in</span>
           <span>x</span>
        </div>
      </div>
    </div>
  );
}
