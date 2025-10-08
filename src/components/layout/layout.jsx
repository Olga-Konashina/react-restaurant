import { Children } from "react";

export const Layout = ({ children }) => {
  return (
    <div>
      <header>HEADER</header>
      {children}
      <footer>FOOTER</footer>
    </div>
  );
};
