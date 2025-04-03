export default function getSubscribedNews(newsData, pressIdArr) {
  return pressIdArr.reduce((acc, pressId) => {
    const oneCategoryNews = Object.values(newsData).find(
      (oneCategoryNewsObj) => {
        return Object.hasOwn(oneCategoryNewsObj, pressId);
      }
    );
    const matchedObj = oneCategoryNews[pressId];
    acc[matchedObj.name] = { [pressId]: matchedObj };
    return acc;
  }, {});
}
