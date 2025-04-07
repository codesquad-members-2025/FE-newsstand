import { pressTypes } from "../types/pressDataTypes";

const makeAllPressData = (newsData: pressTypes) => {
  const allPressData: pressTypes = [];

  for (const [, category] of Object.entries(newsData)) {
    //   console.log(category);
    for (const [, press] of Object.entries(category)) {
      allPressData.push({
        pid: press.pid,
        name: press.name,
        regDate: press.regDate,
        logoDark: press.logoDark,
        logoLight: press.logoLight,
        materials: press.materials,
      });
    }
  }

  return allPressData;
};

export default makeAllPressData;
