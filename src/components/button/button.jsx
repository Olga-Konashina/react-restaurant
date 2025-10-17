import styles from "./button.module.css";

export const Button = ({
  title,
  onclick,
  disabled,
  className = "formButton",
}) => {
  return (
    <button className={styles[className]} onClick={onclick} disabled={disabled}>
      {title}
    </button>
  );
};
