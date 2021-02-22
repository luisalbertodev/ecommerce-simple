import React, { useState, useEffect, useCallback } from "react";
import { getDataLocal, setDataLocal } from "../helpers";

// Hook
export const useLogin = () => {
  const isClient = typeof window === "object";

  const [currentUser, setUser] = useState(null);

  const handleSetUser = useCallback((value) => {
    setUser(value);
    setDataLocal(value);
    // if (value) {
    //   window.location = "/admin";
    // }
  }, []);

  useEffect(() => {
    if (!isClient) {
      return false;
    }

    const checkIfCurrentUser = () => {
      const currentUserLocal = getDataLocal();
      currentUserLocal && setUser(currentUserLocal);
    };

    checkIfCurrentUser();
    return () => {};
  }, [isClient]);

  return { isAuthed: !!currentUser, currentUser, handleSetUser };
};
