export default function transformNewsData(newsData) {
  return Object.entries(newsData).reduce((acc, [category, categoryNews]) => {
    const categoryNewsObj = categoryNews.reduce((acc, newsObj) => {
      const pressId = newsObj.pid;
      acc[pressId] = newsObj;
      return acc;
    }, {});
    acc[category] = categoryNewsObj;
    return acc;
  }, {});
}
