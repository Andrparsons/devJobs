import styles from "./JobCard.module.css";

const JobCard = ({
  job: { company_logo, created_at, type, title, company, location },
}) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardContainer}>
        <img className={styles.companyLogo} src={company_logo} />
        <div className={styles.subtitle}>
          <p>{created_at}</p>
          <p>{type}</p>
        </div>
        <h3>{title}</h3>
        <p>{company}</p>
        <p>{location}</p>
      </div>
    </div>
  );
};

export default JobCard;
