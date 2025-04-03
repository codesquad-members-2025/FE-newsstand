import { SubscribedContext } from "./SubscribedContext";
import { useState, useMemo } from "react";

export default function SubscribedProvider({ children }) {
  const [subscribed, setsubscribed] = useState([]);

  function toggleSubscribed(pressId) {
    setsubscribed((prev) => {
      return prev.includes(pressId)
        ? prev.filter((pid) => pid !== pressId)
        : [...prev, pressId];
    });
  }

  const value = useMemo(
    () => ({
      subscribed,
      toggleSubscribed,
    }),
    [subscribed, toggleSubscribed]
  );

  return (
    <SubscribedContext.Provider value={value}>
      {children}
    </SubscribedContext.Provider>
  );
}
