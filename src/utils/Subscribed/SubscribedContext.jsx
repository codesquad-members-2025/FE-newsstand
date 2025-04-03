import { createContext } from "react";

export const SubscribedContext = createContext({
  subscribed: [],
  toggleSubscribed() {
    () => {};
  },
});
