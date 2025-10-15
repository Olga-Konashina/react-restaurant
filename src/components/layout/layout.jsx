import { Children } from "react";
import { ProgressBar } from "../progress-bar/progress-bar";
import styles from "./layout.module.css";

export const Layout = ({ children }) => {
  return (
    <div>
      <ProgressBar />
      <header className={styles.header}>HEADER</header>
      {children}
      <footer className={styles.footer}>FOOTER</footer>
    </div>
  );
};
