import styles from "./Header.module.css";
import Container from "../components/Container";

export default function Header() {
  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.logoContainer}>
          <img src="./desktop/logo.svg" alt="devjobs Logo" />
          <div className="toggle">Toggle</div>
        </div>
      </Container>
    </header>
  );
}
