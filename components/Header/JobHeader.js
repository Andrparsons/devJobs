import styles from "./Header.module.css";

export default function JobHeader({ headerData: {company, company_logo, company_url }}) {
  return (
    <div className={styles.jobHeader}>
      <img className={styles.companyLogo} src={company_logo} />
      <div className={styles.jobHeaderContainer}>
        <h2>{company}</h2>
        <p>{company_url}</p>
      </div>
    </div>
  );
}
