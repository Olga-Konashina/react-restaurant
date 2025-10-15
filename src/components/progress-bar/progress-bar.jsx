import { useEffect, useState } from "react";
import styles from "./progress-bar.module.css";

export const ProgressBar = () => {
  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrolled = (scrollTop / scrollHeight) * 100;
      setScrollPercent(scrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const progressStyle = {
    width: `${scrollPercent}%`,
  };

  return (
    <div className={styles.containerStyle}>
      <div className={styles.progressStyle} style={progressStyle} />
    </div>
  );
};
