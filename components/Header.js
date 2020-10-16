import { useState, useEffect } from "react";

import styles from "./Header.module.css";
import Container from "../components/Container";
import Toggle from "../components/Toggle";
import SearchInput from "../components/SearchInput";
import Button from "../components/Button";

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
          <SearchInput
            placeholder="Filter by Title"
            value={search}
            setValue={setSearch}
          />
          <SearchInput
            placeholder="Filter by Place"
            value={place}
            setValue={setPlace}
          />
          <Button btnStyle="primary">Search</Button>
        </div>
      </Container>
    </header>
  );
}
