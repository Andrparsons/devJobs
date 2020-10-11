import styles from "./Toggle.module.css";

const Toggle = ({ checked, setChecked }) => {
  return (
    <label className={styles.toggle}>
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
      />
      <span className={styles.slider}></span>
    </label>
  );
};

export default Toggle;
