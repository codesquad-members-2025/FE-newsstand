export function timeDelay(ms) {
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
      // await timeDelay(100);
      continue;
    }
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
      // await timeDelay(100);
      continue;
    }
    newsRef.current.style.transition = `none`;
    newsRef.current.style.transform = `translateY(0px)`;
    indexRef.current = (indexRef.current + 1) % 5;
    setCurNews(indexRef.current);
  }
}
