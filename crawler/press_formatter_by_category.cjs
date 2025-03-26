// File: src/idCollector/press_formatter_by_category.cjs
const fs = require("fs");
const path = require("path");
const https = require("https");
const cheerio = require("cheerio");

const pressIdsPath = path.join(__dirname, "press_ids.json");
const outputPath = path.join(__dirname, "press_by_category.json");

const BASE_URL = "https://www.naver.com/nvhaproxy/v2/pc/newsstand/";

const fetchHtml = (url) =>
  new Promise((resolve, reject) => {
    https
      .get(
        url,
        {
          headers: {
            "User-Agent":
              "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
            Accept: "text/html",
          },
        },
        (res) => {
          let data = "";
          res.on("data", (chunk) => (data += chunk));
          res.on("end", () => resolve(data));
        }
      )
      .on("error", reject);
  });

const delay = (ms) => new Promise((r) => setTimeout(r, ms));

(async () => {
  const pressIds = JSON.parse(fs.readFileSync(pressIdsPath, "utf-8"));
  const result = {};

  for (const [pid, categories] of Object.entries(pressIds)) {
    const url = `${BASE_URL}${pid}`;
    console.log(`🔍 요청 중: ${url}`);

    try {
      const html = await fetchHtml(url);
      const $ = cheerio.load(html);
      const rawBody = $("body").text();

      let json;
      try {
        json = JSON.parse(rawBody);
      } catch {
        console.warn(`⚠️ JSON 파싱 실패: ${pid}`);
        continue;
      }

      if (json["@type"] !== "PC-NEWSSTAND-PRESS-BLOCK") {
        console.warn(`⚠️ PRESS-BLOCK 타입 아님: ${pid}`);
        continue;
      }

      const pressData = {
        pid: json.pid,
        name: json.name,
        regDate: json.regDate,
        logoDark: json.logoDark?.url,
        logoLight: json.logoLight?.url,
        materials: json.materials,
      };

      for (const category of categories) {
        if (!result[category]) result[category] = [];
        result[category].push(pressData);
      }

      console.log(`✅ 수집 성공: ${pid}`);
    } catch (err) {
      console.error(`❌ 오류: ${pid}`, err.message);
    }

    await delay(300); // 서버 부하 방지
  }

  fs.writeFileSync(outputPath, JSON.stringify(result, null, 2), "utf-8");
  console.log(`🎉 저장 완료: ${outputPath}`);
})();
