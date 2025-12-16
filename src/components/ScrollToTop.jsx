import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname, hash } = useLocation();
  const isFirstLoad = useRef(true);

  useEffect(() => {
    // 👉 If URL has hash (#section), let browser handle it
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        return;
      }
    }

    // 👉 Respect reduced motion (accessibility)
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    window.scrollTo({
      top: 0,
      left: 0,
      behavior:
        prefersReducedMotion || isFirstLoad.current ? "auto" : "smooth",
    });

    isFirstLoad.current = false;
  }, [pathname, hash]);

  return null;
}
