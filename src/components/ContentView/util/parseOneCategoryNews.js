function parseOneCategoryNews(newsData, category) {
  if (!newsData || !newsData[category]) return []; // ✅ null 방어
  const parsedNewsArr = newsData[category].map((item) => {
    const pressId = item.pid;
    const name = item.name;
    const logo = item.logoLight;
    const regDate = item.regDate;
    const materials = item.materials.map((material) => {
      const title = material.title;
      const url = material.url;
      const image = material.image ? material.image.url : null;
      const materialObj = { title, url, image };
      return materialObj;
    });
    return { pressId, name, logo, regDate, materials };
  });
  return parsedNewsArr;
}
