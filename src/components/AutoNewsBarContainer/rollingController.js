function timeDelay(ms) {
  return new Promise((res) => setTimeout(res, ms));
}

export async function rollinginterval(
  newsRef,
  indexRef,
  slideDelayMs,
  transitionMs,
  setCurNews,
  isHoverRef
) {
  while (true) {
    if (isHoverRef.current) {
      console.log(`111111마우스 올라감!`);
      // await timeDelay(100);
      continue;
    }
    console.log("슬라이드 시작", indexRef.current); // 🔍 여기에 찍어보기
    if (!newsRef.current) return;
    await timeDelay(slideDelayMs);
    if (isHoverRef.current) {
      console.log(`2222222마우스 올라감!`);
      // await timeDelay(100);
      continue;
    }
    newsRef.current.style.transition = `transform 0.5s ease-out`;
    newsRef.current.style.transform = `translateY(-17px)`;
    await timeDelay(transitionMs);
    if (isHoverRef.current) {
      console.log(`중간 과정에 마우스 올라감!`);
      // await timeDelay(100);
      continue;
    }
    newsRef.current.style.transition = `none`;
    newsRef.current.style.transform = `translateY(0px)`;
    indexRef.current = (indexRef.current + 1) % 5;
    setCurNews(indexRef.current);
  }
}
