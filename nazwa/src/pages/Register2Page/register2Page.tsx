import { Link } from "react-router-dom";
import styles from "./register2Page.module.css";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';

export default function LoginPage() {
  // const [clicker,setClicker] = useState<number>(0);
  const [user, setUser] = useState({ mail: "" });

  let navigate = useNavigate();
  const handleClick = () => {
    navigate('/register3'); // Wstaw docelowy URL ścieżki
  };
  return (
    <div className={styles.loginPage}>
      <div className={styles.background}>
        <div className={styles.naglowek}>FORMULARZ</div>
        <div className={styles.naglowek}>KONTAKTOWY</div>
        <div className={styles.loginSquare}>
          <div className={styles.info}>Podaj swoje dane osobowe</div>
          <div className={styles.dane}>Imię</div>
          <input
            placeholder="Imię"
            maxLength={45}
            onChange={(e) =>
              setUser((prevUser) => ({ ...prevUser, name: e.target.value }))
            }
            className={styles.inputLogin}
          />

          <div className={styles.dane}>Nazwisko</div>
          <input
            placeholder="Nazwisko"
            maxLength={45}
            onChange={(e) =>
              setUser((prevUser) => ({ ...prevUser, surname: e.target.value }))
            }
            className={styles.inputLogin}
          />

          <div className={styles.dane}>Numer indeksu</div>
          <input
            placeholder="000000"
            maxLength={6}
            onChange={(e) =>
              setUser((prevUser) => ({ ...prevUser, indeks: e.target.value }))
            }
            className={styles.inputLogin}
          />

          <div className={styles.dane}>Stanowisko</div>

          <select 
            id="stanowisko"
            name="stanowisko"
            className={styles.opcje}
          >
            <option value="azbestan">wybierz stanowisko</option>
            <option value="australia">Australia</option>
            <option value="canada">Canada</option>
            <option value="usa">USA</option>
          </select>

          <div className={styles.dane}>Hasło</div>

          <input
            placeholder="Hasło"
            type="password"
            maxLength={45}
            onChange={(e) =>
              setUser((prevUser) => ({
                ...prevUser,
                password1: e.target.value,
              }))
            }
            className={styles.inputLogin}
          />
          <input
            placeholder="Potwierdź hasło"
            type="password"
            maxLength={45}
            onChange={(e) =>
              setUser((prevUser) => ({
                ...prevUser,
                password2: e.target.value,
              }))
            }
            className={styles.inputLogin}
          />
          <button className={styles.przycisk} onClick={handleClick}>Kontynuuj</button>
          <div className={styles.linkiDolne}>
            <Link to="/loginPage" className={styles.linkDolnyLogin}>
              Logowanie
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
