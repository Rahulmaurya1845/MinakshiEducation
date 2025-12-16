import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./PageWrapper.css";

export default function PageWrapper({ children }) {
  const { pathname } = useLocation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(false);

    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, 40); // small delay to trigger animation

    return () => clearTimeout(timeout);
  }, [pathname]);

  return (
    <div className={`page-wrapper ${isVisible ? "enter" : "exit"}`}>
      {children}
    </div>
  );
}
