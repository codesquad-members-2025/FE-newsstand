export function timeDelay(ms) {
  return new Promise((res) => setTimeout(res, ms));
}
