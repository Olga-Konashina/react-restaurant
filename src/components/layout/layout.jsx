import { useContext } from "react";
import { Button } from "../button/button";
import { ProgressBar } from "../progress-bar/progress-bar";
import styles from "./layout.module.css";
import { UserContext } from "../user-provider";
import { ThemeContext } from "../theme-provider";

export const Layout = ({ children }) => {
  const { user, toggleUser } = useContext(UserContext);
  const { toggleTheme } = useContext(ThemeContext);
  return (
    <div>
      <ProgressBar />
      <header className={styles.header}>
        <Button title="Сменить тему" onClick={toggleTheme} />
        {user && <span className={styles.span}>{user}</span>}
        <Button title={user ? "Выйти" : "Войти"} onClick={toggleUser} />
      </header>
      {children}
      <footer className={styles.footer}>FOOTER</footer>
    </div>
  );
};
