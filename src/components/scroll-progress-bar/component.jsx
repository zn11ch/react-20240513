import { useCallback, useEffect, useRef } from "react";

export const ScrollProgressBar = () => {
  const elementRef = useRef(null);

  const onScroll = useCallback(() => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
    const scrolled = (scrollTop / (scrollHeight - clientHeight)) * 100;
    elementRef.current.style.width = scrolled + "%";
  }, []);

  useEffect(() => {
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [onScroll]);

  return (
    <div className="scroll-progress-bar">
      <div className="progress-bar" ref={elementRef}></div>
    </div>
  );
};
