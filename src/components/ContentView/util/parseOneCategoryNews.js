export default function parseOneCategoryNews(newsData, category) {
  if (!newsData || !newsData[category]) return []; // ✅ null 방어
  const parsedNewsArr = newsData[category].map((item) => {
    const pressId = item.pid;
    const name = item.name;
    const logoDark = item.logoDark;
    const logoLight = item.logoLight;
    const regDate = item.regDate;
    const materials = item.materials.map((material) => {
      const title = material.title;
      const url = material.url;
      const image = material.image ? material.image.url : null;
      const materialObj = { title, url, image };
      return materialObj;
    });
    return { pressId, name, logoDark, logoLight, regDate, materials };
  });
  return parsedNewsArr;
}
