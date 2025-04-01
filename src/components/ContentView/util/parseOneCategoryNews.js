export default function parseOneCategoryNews(newsData, category) {
  if (!newsData || !newsData[category]) return []; // ✅ null 방어
  const parsedNewsArr = newsData[category].map(
    ({
      pid: pressId,
      name,
      logoDark,
      logoLight,
      regDate,
      materials: rowMaterials,
    }) => {
      const materials = rowMaterials.map(({ title, url, image }) => ({
        title,
        url,
        image: image ? image.url : null,
      }));
      return { pressId, name, logoDark, logoLight, regDate, materials };
    }
  );
  return parsedNewsArr;
}
