import styles from "./tab.module.css";
export const Tab = ({ title, onClick, isActive }) => {
  return (
    <button className={styles.tab} onClick={onClick} disabled={isActive}>
      {title}
    </button>
  );
};
