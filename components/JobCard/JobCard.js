import React from 'react'
import styles from "./JobCard.module.css";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);

const JobCard = React.forwardRef(
  (
    {
      onClick,
      href,
      job: { company_logo, created_at, type, title, company, location },
    },
    ref
  ) => {
    return (
      <a className={styles.card} href={href} onClick={onClick} ref={ref}>
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
      </a>
    );
  }
);

export default JobCard;
