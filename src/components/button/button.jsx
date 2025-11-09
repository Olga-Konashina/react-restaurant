import { useContext } from "react";
import styles from "./button.module.css";
import { ThemeContext } from "../theme-provider";
import classNames from "classnames";

export const Button = ({
  title,
  onClick,
  disabled,
  className = "commonButton",
  type = "button",
}) => {
  const { theme } = useContext(ThemeContext);
  return (
    <button
      className={classNames(className, {
        [styles.dark]: theme === "dark",
        [styles.light]: theme === "light",
      })}
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      {title}
    </button>
  );
};
