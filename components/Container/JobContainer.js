import styles from "./Container.module.css";

export default function JobContainer({ children }) {
  return <div className={styles.jobContainer}>{children}</div>;
}