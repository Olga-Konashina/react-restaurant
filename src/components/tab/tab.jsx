import styles from "./tab.module.css";
export const Tab = ({ title, onClick, isActive }) => {
  return (
    <button className={styles.tabStyle} onClick={onClick} disabled={isActive}>
      {title}
    </button>
  );
};
