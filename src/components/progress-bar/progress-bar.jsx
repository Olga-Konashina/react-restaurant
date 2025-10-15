import { useEffect, useState } from "react";

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

  const containerStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "5px",
    backgroundColor: "fff",
    zIndex: 9999,
  };

  const progressStyle = {
    height: "100%",
    width: `${scrollPercent}%`,
    backgroundColor: "red",
    transition: "width 0.25s ease-out",
  };

  return (
    <div style={containerStyle}>
      <div style={progressStyle} />
    </div>
  );
};
