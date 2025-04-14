import { pressTypes } from "../types/pressDataTypes";

const makeAllPressData = (newsData: pressTypes) => {
  const allPressData: pressTypes = [];

  for (const [, category] of Object.entries(newsData)) {
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

  // Fisher-Yates Shuffle 알고리즘을 사용하여 배열을 무작위로 섞기
  for (let i = allPressData.length - 1; i > 0; i--) {
    // 0부터 i 사이의 임의의 인덱스 j 선택
    const j = Math.floor(Math.random() * (i + 1));
    // 배열의 요소 교환
    [allPressData[i], allPressData[j]] = [allPressData[j], allPressData[i]];
  }

  return allPressData;
};

export default makeAllPressData;
