// /src/idCollector/press_id_collector.cjs
const puppeteer = require("puppeteer");
const fs = require("fs");
const path = require("path");

const CATEGORY_MAP = {
  "종합/경제": 82,
  "방송/통신": 24,
  IT: 12,
  영자지: 6,
  "스포츠/연예": 24,
  "매거진/전문지": 62,
  지역: 36,
};

const NOISE_PRESS_IDS = new Set(["2020", "2021", "2022", "2023", "2024"]);

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto("https://www.naver.com/", { waitUntil: "domcontentloaded" });

  // 뉴스스탠드 진입
  await page.evaluate(() => {
    const link = [...document.querySelectorAll("a")].find((a) =>
      a.textContent.includes("뉴스스탠드")
    );
    if (link) link.click();
  });

  await page.waitForSelector(
    ".ContentPagingView-module__btn_view_list___j7eNR",
    {
      timeout: 10000,
    }
  );
  // 리스트형 보기 버튼 클릭 (최초 1회만)
  try {
    const listBtnSelector = ".ContentPagingView-module__btn_view_list___j7eNR";
    await page.waitForSelector(listBtnSelector, { timeout: 10000 });
    await page.click(listBtnSelector);
  } catch {
    console.log("⛔️ 리스트형 버튼 없음 (이미 클릭되었을 수도 있음)");
  }

  const collected = new Map();

  for (const [category, pages] of Object.entries(CATEGORY_MAP)) {
    console.log(`🟡 카테고리 진입: ${category}`);

    try {
      // 탭 클릭
      await page.evaluate((cat) => {
        const tabs = [...document.querySelectorAll("li[role='presentation']")];
        const tab = tabs.find((el) => el.textContent.includes(cat));
        if (tab) tab.querySelector("a")?.click();
      }, category);

      (await page.waitForTimeout?.(1000)) ??
        new Promise((r) => setTimeout(r, 1000));
    } catch (err) {
      console.log(`⛔️ 탭 클릭 실패: ${err.message}`);
      continue;
    }

    for (let i = 0; i < pages; i++) {
      try {
        const nextBtnSelector = ".ContentPagingView-module__btn_next___ZBhby";
        await page.waitForSelector(nextBtnSelector, { timeout: 5000 });

        const [response] = await Promise.all([
          page.waitForResponse(
            (res) => {
              const headers = res.headers();
              try {
                return (
                  res.request().resourceType() === "xhr" &&
                  res.url().includes("newsstand") &&
                  headers["content-type"]?.includes("text/html")
                );
              } catch {
                return false;
              }
            },
            { timeout: 10000 }
          ),
          page.click(nextBtnSelector),
        ]);

        const json = await response.json();
        const pid = json?.pid?.toString();
        const type = json?.["@type"];

        if (
          type !== "PC-NEWSSTAND-PRESS-BLOCK" ||
          !pid ||
          NOISE_PRESS_IDS.has(pid)
        )
          continue;

        const prev = collected.get(pid) || new Set();
        prev.add(category);
        collected.set(pid, prev);

        console.log(`📦 pressId 수집됨: ${pid} ← ${category}`);
        (await page.waitForTimeout?.(300)) ??
          new Promise((r) => setTimeout(r, 300));
      } catch (err) {
        console.log(`⛔️ 다음 버튼 실패 또는 종료: ${err.message}`);
        break;
      }
    }
  }

  const result = Object.fromEntries(
    [...collected.entries()].map(([pid, set]) => [pid, [...set]])
  );
  const savePath = path.resolve(__dirname, "press_ids.json");
  fs.writeFileSync(savePath, JSON.stringify(result, null, 2));
  console.log(`✅ 총 ${collected.size}개 pressId 저장 완료`);

  await browser.close();
})();
