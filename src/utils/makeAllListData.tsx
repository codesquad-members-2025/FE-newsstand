import { pressTypes, pressType } from "../types/pressDataTypes";

/*
•	함수는 Object.keys(newsData)를 사용해 각 카테고리를 순회합니다.
•	각 카테고리 배열에 있는 press item들에 대해, 스프레드 연산자({ ...item, category })를 이용하여 기존 속성은 그대로 복사하고, 현재 카테고리명을 category라는 새 필드로 추가합니다.
•	이렇게 변환된 press item들을 모두 하나의 배열로 concat 연산을 통해 합칩니다.
*/

const makeAllListData = (newsData: {
  [category: string]: pressType[];
}): pressTypes => {
  let listData: pressTypes = [];
  Object.keys(newsData).forEach((category) => {
    const items = newsData[category].map((item) => ({ ...item, category }));
    listData = listData.concat(items);
  });
  return listData;
};

export default makeAllListData;

/*
< 반환된 데이터 형태 >

[
  {
    "pid": "108",
    "name": "스타뉴스",
    "regDate": "20250326 17:00:08",
    "logoDark": "https://s.pstatic.net/...",
    "logoLight": "https://s.pstatic.net/...",
    "materials": [ ... ],
    "category": "스포츠/연예"  // 원래 이 press item이 포함되었던 카테고리
  },
  {
    "pid": "109",
    "name": "OSEN",
    "regDate": "20250326 08:20:57",
    "logoDark": "https://s.pstatic.net/...",
    "logoLight": "https://s.pstatic.net/...",
    "materials": [ ... ],
    "category": "스포츠/연예"
  },
  {
    "pid": "120",
    "name": "EBN",
    "regDate": "20250326 16:52:41",
    "logoDark": "https://s.pstatic.net/...",
    "logoLight": "https://s.pstatic.net/...",
    "materials": [ ... ],
    "category": "종합/경제"
  }
  // 기타 press item 객체들이 이어짐...
]

 */
