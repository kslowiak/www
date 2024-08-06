import { Link } from "react-router-dom";
import styles from "./loginPage.module.css";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';

export default function LoginPage() {
  // const [clicker,setClicker] = useState<number>(0);
  const [user, setUser] = useState({ login: "", password: "" });

  let navigate = useNavigate();
  const handleClick = () => {
    navigate('/invlist'); // Wstaw docelowy URL ścieżki
  };
  return (
    <div className={styles.loginPage}>
      <div className={styles.background}>
        <div className={styles.telephoners} />
        <div className={styles.naglowekTele}>TELEPHONERS</div>
        <div className={styles.naglowek}>LOGOWANIE</div>
        <div className={styles.loginSquare}>
          <input
            placeholder="Login..."
            maxLength={20}
            onChange={(e) =>
              setUser((prevUser) => ({ ...prevUser, login: e.target.value }))
            }
            className={styles.inputLogin}
          />
          <input
            placeholder="Hasło..."
            type="password"
            
            onChange={(e) =>
                setUser((prevUser) => ({ ...prevUser, password: e.target.value }))
              }
            className={styles.inputLogin}
          />

          <button className={styles.przycisk} onClick={handleClick}>zaloguj</button>
          <div className={styles.linkiDolne}>
            <Link to="/password" className={styles.linkDolnyLogin}>
              Nie pamiętasz hasła?
            </Link>
            <Link to="/register1" className={styles.linkDolnyLogin}>
              Utwórz konto
              {/* {user.password} */}
            </Link>
          </div>
          {/* {clicker}
            <button onClick={()=>setClicker(clicker+1)}>clickme</button> */}
        </div>
        <Link to="/" className={styles.linkDolny}>
          Strona Główna
        </Link>
      </div>
    </div>
  );
}
