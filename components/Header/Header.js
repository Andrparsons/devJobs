import { useContext } from "react";
import styles from "./Header.module.css";
import Container from "../Container/Container";
import Toggle from "../Toggle/Toggle";

import { SearchContext } from "../../context/SearchContext";

export default function Header({ children }) {
  const { darkMode, onChangeMode } = useContext(SearchContext);

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
        {children}
      </Container>
    </header>
  );
}
