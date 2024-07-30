import { Link } from "react-router-dom";
import styles from "./landingPage.module.css";

export default function LandingPage() {
  return (
    <div className={styles.landingPage}>
      <div className={styles.top}>
        <div style={{textAlign: "center", marginRight:'20px'}}>
          <div className={styles.tytul}>WITAMY W SYSTEMIE</div>
          <div className={styles.tytul}>INWENTARYZACYJNYM</div>
        </div>
        <div className={styles.telephoners} />
      </div>
      <button className={styles.przycisk}>Logowanie</button>
      <button className={styles.przycisk}>Rejestracja</button>
      <button className={styles.przycisk}>Strona Koła</button>
      Landing Page
      <Link to="/loginPage">login page</Link>
    </div>
  );
}
