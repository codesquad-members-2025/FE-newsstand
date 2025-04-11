import { pressType } from "../types/pressDataTypes";

/**
 * newsData 객체의 각 키(카테고리)에 대해 pressType 객체 배열을 순회합니다.
 * 각 press item에 현재 카테고리 이름을 category 프로퍼티로 추가하여
 * 모든 press item을 단일 배열로 합쳐 반환합니다.
 *
 * 매개변수 newsData - 카테고리별로 pressType 배열을 가진 객체
 * 반환값 pressType에 category가 추가된 단일 배열
 */
const makeAllListData = (newsData: {
  [category: string]: pressType[];
}): Array<pressType & { category: string }> => {
  // reduce를 사용해 각 카테고리별 press item에 category 필드를 추가하고 합칩니다.
  return Object.keys(newsData).reduce<Array<pressType & { category: string }>>(
    (acc, category) => {
      const items = newsData[category].map((item) => ({ ...item, category }));
      return acc.concat(items);
    },
    []
  );
};

export default makeAllListData;
