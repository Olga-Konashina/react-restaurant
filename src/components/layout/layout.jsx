import { use, useContext } from "react";
import { Button } from "../button/button";
import { ProgressBar } from "../progress-bar/progress-bar";
import styles from "./layout.module.css";
import { AuthContext } from "../auth-provider";
import { ThemeContext } from "../theme-provider";
import { Outlet } from "react-router";

export const Layout = () => {
  const { auth, toggleAuth } = use(AuthContext);

  const { isAuthorized, name } = auth;

  const { toggleTheme } = useContext(ThemeContext);
  return (
    <div>
      <ProgressBar />
      <header className={styles.header}>
        <Button title="Сменить тему" onClick={toggleTheme} />
        {isAuthorized && <span className={styles.span}>{name}</span>}
        <Button title={isAuthorized ? "Выйти" : "Войти"} onClick={toggleAuth} />
      </header>
      <Outlet />
      <footer className={styles.footer}>FOOTER</footer>
    </div>
  );
};
