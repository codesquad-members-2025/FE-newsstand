function getSubscribedNews(newsData, pressIdArr) {
  return pressIdArr.reduce((acc, pressId) => {
    const oneCategoryNews = Object.values(newsData).find(
      (oneCategoryNewsObj) => {
        return Object.hasOwn(oneCategoryNewsObj, pressId);
      }
    );
    acc[pressId] = onePressNews ? oneCategoryNews[pressId] : null;
    return acc;
  }, {});
}
