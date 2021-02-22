import React, { useState, useEffect, useCallback } from "react";

// Hook
export const useWindowScroll = () => {
  const isClient = typeof window === "object";

  const getScroll = useCallback(() => {
    return document.documentElement.scrollTop;
  }, [isClient]);

  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    if (!isClient) {
      return false;
    }

    const handleScroll = () => {
      setScroll(getScroll());
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      return window.removeEventListener("scroll", handleScroll);
    };
  }, [getScroll, isClient]);

  return scroll;
};
