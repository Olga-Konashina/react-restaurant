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

  const progress = {
    width: `${scrollPercent}%`,
  };

  return (
    <div className={styles.container}>
      <div className={styles.progress} style={progress} />
    </div>
  );
};
