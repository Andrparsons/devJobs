import { useState, useEffect } from "react";

import styles from "./Header.module.css";
import Container from "../Container/Container";
import Toggle from "../Toggle/Toggle";
import SearchInput from "../SearchInput/SearchInput";
import Button from "../Button/Button";
import Icon from "../Icon/Icon";

export default function Header() {
  const [search, setSearch] = useState("");
  const [place, setPlace] = useState("");
  const [darkMode, setDarkMode] = useState(false);
  const onChangeMode = (checked) => {
    setDarkMode(checked);
  };
  useEffect(() => {
    document.body.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.logoContainer}>
          <img src="./desktop/logo.svg" alt="devjobs Logo" />
          <div className={styles.toggleContainer}>
            <img className={styles.sun} src="./desktop/icon-sun.svg" alt="" />
            <Toggle checked={darkMode} setChecked={onChangeMode} />
            <img className={styles.moon} src="./desktop/icon-moon.svg" alt="" />
          </div>
        </div>
        <div className={styles.inputGroup}>
          <Icon iconSvg={"./desktop/icon-search.svg"} />
          <SearchInput
            placeholder="Filter by Title"
            value={search}
            setValue={setSearch}
          />
          <div className={styles.divider} />
          <Icon iconSvg={"./desktop/icon-location.svg"} />
          <SearchInput
            placeholder="Filter by Place"
            value={place}
            setValue={setPlace}
          />
          <div className={styles.divider} />

          <label className={styles.checkLabel}>
            <input
              type="checkbox"
              name="full-time"
              className={styles.checkbox}
            />
            Full Time Only
          </label>
          <Button btnStyle="primary">Search</Button>
        </div>
      </Container>
    </header>
  );
}
