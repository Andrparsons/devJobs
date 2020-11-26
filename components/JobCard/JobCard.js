import styles from "./JobCard.module.css";
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'

dayjs.extend(relativeTime);

const JobCard = ({
  job: { company_logo, created_at, type, title, company, location },
}) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardContainer}>
        <img className={styles.companyLogo} src={company_logo} />
        <div className={styles.subtitle}>
          <p className={styles.cardText}>{dayjs(created_at).fromNow()}</p>
          <div className={styles.textDivider}>&bull;</div>
          <p className={styles.cardText}>{type}</p>
        </div>
        <h3 className={styles.jobTitle}>{title}</h3>
        <p className={styles.cardText}>{company}</p>
        <h4 className={styles.location}>{location}</h4>
      </div>
    </div>
  );
};

export default JobCard;
