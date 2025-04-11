import { createContext } from "react";

export const SubscribedModalContext = createContext({
  isModalOpen: false,
  targetPress: null,
  isSubscribed: false,
  tartgetPid: null,
  clickSubscribedModal() {
    () => {};
  },
});
