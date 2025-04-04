const fs = require('fs');

const extractUniquePressList = (data) => {
  const pressMap = new Map();

  Object.values(data).forEach((pressArray) => {
    if (Array.isArray(pressArray)) {
      pressArray.forEach((press) => {
        const { pid, name, logoDark, logoLight } = press;

        if (!pressMap.has(pid)) {
          pressMap.set(pid, { pid, name, logoDark, logoLight });
        }
      });
    }
  });

  return Array.from(pressMap.values());
};

// JSON 파일 읽기
const rawData = fs.readFileSync('input.json', 'utf-8');
const jsonData = JSON.parse(rawData);

// 고유 언론사 리스트 추출
const uniquePressList = extractUniquePressList(jsonData);

// 파일로 저장
fs.writeFileSync(
  'pressList.json',
  JSON.stringify(uniquePressList, null, 2),
  'utf-8'
);

console.log(
  `✅ 총 ${uniquePressList.length}개의 언론사 추출 완료 (중복 제거됨)`
); // 예: ✅ 총 152개의 언론사 추출 완료
