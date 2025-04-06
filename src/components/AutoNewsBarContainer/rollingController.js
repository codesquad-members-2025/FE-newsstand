function timeDelay(ms) {
  return new Promise((res) => setTimeout(res, ms));
}

function moveNextNews(setcurNews) {
  setcurNews((prev) => (prev + 1) % 5);
}

export async function rollinginterval(
  newsRef,
  slideDelayMs,
  transitionMs,
  setCurNews
) {
  if (!newsRef) return;
  await timeDelay(slideDelayMs);
  newsRef.style.transition = `transform 0.5s ease-out`;
  newsRef.style.transform = `translateY(-17px)`;
  await timeDelay(transitionMs);
  moveNextNews(setCurNews);
  newsRef.style.transition = `none`;
  newsRef.style.transform = `translateY(0px)`;
}
