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
  lastSlideTimeRef,
  hoverOverTimeRef
) {
  //   if (startDelayMs !== 0) await timeDelay(startDelayMs);

  //추가로 싱크를 맞추기 위한 딜레이를 실행해야함.
  if (hoverOverTimeRef.current) {
    await timeDelay(
      slideDelayMs -
        ((hoverOverTimeRef.current - lastSlideTimeRef.current) % slideDelayMs)
    );
    hoverOverTimeRef.current = null;
  }
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
        lastSlideTimeRef,
        hoverOverTimeRef
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
      slideDelayMs,
      setCurNews,
      locationRef,
      rafIdRef,
      isHoverRef,
      lastSlideTimeRef,
      hoverOverTimeRef
    )
  );
}
