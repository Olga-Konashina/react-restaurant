import { Children } from "react";
import { ProgressBar } from "../progress-bar/progress-bar";

export const Layout = ({ children }) => {
  return (
    <div>
      <ProgressBar />
      <header>HEADER</header>
      {children}
      <footer>FOOTER</footer>
    </div>
  );
};
