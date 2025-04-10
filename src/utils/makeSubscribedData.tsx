import { pressTypes } from "../types/pressDataTypes";
import { useSubscribedState } from "../contexts/SubscribedContext";
import { pressType } from "../types/pressDataTypes";

const useSubscribedData = (): pressTypes => {
  const { subscriptions } = useSubscribedState();
  const subscribedData: pressTypes = subscriptions.map((press: pressType) => ({
    pid: press.pid,
    name: press.name,
    regDate: press.regDate,
    materials: press.materials,
    logoDark: press.logoDark,
    logoLight: press.logoLight,
  }));

  return subscribedData;
};

export default useSubscribedData;
