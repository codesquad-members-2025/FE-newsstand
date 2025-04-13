// 구독 상태를 포함한 데이터를 준비
const getPressDataWithSubscription = (pressList, subscribedPress) => {
  return pressList.map((press) => ({
    ...press,
    isSubscribed: subscribedPress.includes(press.pid),
  }));
};

//필터 함수
const filterSubscribedPressData = (pressDataWithSubscription) => {
  return pressDataWithSubscription.filter((press) => press.isSubscribed);
};

//데이터 자르는 함수
const getSlicedData = (data, startIndex, endIndex) => {
  return data.slice(startIndex, endIndex);
};

export {
  getPressDataWithSubscription,
  filterSubscribedPressData,
  getSlicedData,
};
