import styles from "./Icon.module.css";

const Icon = ({ iconSvg }) => {
  return <img src={iconSvg} className={styles.icon} />;
};

export default Icon;
