const fs = require('fs');

const keyRenameMap = {
  '스포츠/연예': 'sportsEntertainment',
  '종합/경제': 'generalEconomy',
  '매거진/전문지': 'magazineSpecial',
  IT: 'itTech',
  '방송/통신': 'broadcastMedia',
  지역: 'localNews',
  영자지: 'englishPress',
};

const cleanMaterial = (material) => {
  const { '@type': _, gdid, aid, image, ...rest } = material;

  let newImage = null;

  if (image && typeof image === 'object' && 'url' in image) {
    newImage = image.url;
  }

  return {
    ...rest,
    imageUrl: newImage,
  };
};

const processData = (data) => {
  const result = {};

  Object.entries(data).forEach(([key, value]) => {
    const newKey = keyRenameMap[key] || key;

    if (Array.isArray(value)) {
      result[newKey] = value.map((item) => {
        if (Array.isArray(item.materials)) {
          item.materials = item.materials.map(cleanMaterial);
        }
        return item;
      });
    } else {
      result[newKey] = value;
    }
  });

  return result;
};

// 예시: 원본 JSON 불러오기
const rawData = fs.readFileSync('input.json', 'utf-8');
const originalData = JSON.parse(rawData);

// 처리된 결과
const updatedData = processData(originalData);

// 저장하기
fs.writeFileSync('output.json', JSON.stringify(updatedData, null, 2), 'utf-8');

console.log('✅ 저장 완료: output.json');
