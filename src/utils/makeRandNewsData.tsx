import { newsItemTypes, pressTypes } from "../types/pressDataTypes";

const makeRandNewsData = (newsData: pressTypes | null) => {
  const allNewsData: newsItemTypes = [];
  const rightNewsData: newsItemTypes = [];
  const leftNewsData: newsItemTypes = [];

  if (!newsData) return { allNewsData, leftNewsData, rightNewsData };

  for (const [, category] of Object.entries(newsData)) {
    for (const [, press] of Object.entries(category)) {
      for (const material of press.materials) {
        allNewsData.push({
          "@type": material["@type"],
          gdid: material.gdid,
          title: material.title,
          url: material.url,
          aid: material.aid,
          image: material.image,
          _id: material._id,
        });
      }
    }
  }

  // Fisher-Yates Shuffle 알고리즘을 사용하여 배열을 무작위로 섞기
  for (let i = allNewsData.length - 1; i > 0; i--) {
    // 0부터 i 사이의 임의의 인덱스 j 선택
    const j = Math.floor(Math.random() * (i + 1));
    // 배열의 요소 교환
    [allNewsData[i], allNewsData[j]] = [allNewsData[j], allNewsData[i]];
  }

  // 각 뉴스 아이템을 랜덤하게 왼쪽과 오른쪽으로 나누기
  for (let i = 0; i < 5; i++) {
    if (allNewsData[i]) {
      leftNewsData.push(allNewsData[i]);
    }
  }

  for (let i = 5; i < 10; i++) {
    if (allNewsData[i]) {
      rightNewsData.push(allNewsData[i]);
    }
  }

  return {
    allNewsData: allNewsData,
    leftNewsData: leftNewsData,
    rightNewsData: rightNewsData,
  };
};

export default makeRandNewsData;
