import styles from "./SearchInput.module.css";

const SearchInput = ({ placeholder = "Input Text...", value, setValue }) => {
  return (
    <input
      className={styles.search}
      type="text"
      value={value}
      onChange={(e) => setValue(e.target.value)}
      placeholder={placeholder}
    ></input>
  );
};

export default SearchInput;
