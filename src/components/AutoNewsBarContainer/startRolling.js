export function timeDelay(ms) {
  return new Promise((res) => setTimeout(res, ms));
}

export async function startRolling(
  newsRef,
  indexRef,
  slideDelayMs,
  setCurNews,
  locationRef,
  rafIdRef,
  isHoverRef,
  startDelayMs
) {
  const lastSlideTimeRef = { current: performance.now() + startDelayMs }; // 시작 지연 반영

  if (startDelayMs !== 0) await timeDelay(startDelayMs);

  if (isHoverRef?.current) {
    rafIdRef.current = requestAnimationFrame(() =>
      startRolling(
        newsRef,
        indexRef,
        slideDelayMs,
        setCurNews,
        locationRef,
        rafIdRef,
        isHoverRef,
        startDelayMs
      )
    );
    return;
  }

  if (locationRef.current === 0) {
    await timeDelay(slideDelayMs);
  } else if (locationRef.current <= -17) {
    indexRef.current = (indexRef.current + 1) % 5;
    setCurNews(indexRef.current);
    locationRef.current = 0;
    cancelAnimationFrame(rafIdRef.current);
    return;
  }
  locationRef.current -= 17 / 60;
  newsRef.current.style.transform = `translateY(${locationRef.current}px)`;

  rafIdRef.current = requestAnimationFrame(() =>
    startRolling(
      newsRef,
      indexRef,
      5000,
      setCurNews,
      locationRef,
      rafIdRef,
      isHoverRef
    )
  );
}
