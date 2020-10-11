import { useState, useEffect } from "react";

import styles from "./Header.module.css";
import Container from "../components/Container";
import Toggle from "../components/Toggle";

export default function Header() {
  let [darkMode, setDarkMode] = useState(false);
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
      </Container>
    </header>
  );
}
