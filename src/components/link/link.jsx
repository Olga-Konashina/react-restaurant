import { NavLink } from "react-router";
import styles from "./link.module.css";
import classNames from "classnames";

export const Link = ({ children, ...props }) => {
  return (
    <NavLink
      {...props}
      className={({ isActive }) =>
        classNames(props.className, styles.link, { [styles.active]: isActive })
      }
    >
      {children}
    </NavLink>
  );
};
