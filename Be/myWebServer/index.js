const express = require("express");
const fs = require("fs");
const path = require("path");
const cors = require("cors");
const { error } = require("console");

const app = express();
const port = 3000;
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World\n 웹서버 실행 완료!");
});

app.get("/api/HeadLineNews", (req, res) => {
  const filePath = path.join(__dirname, "HeadLineNews.json");
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      console.error("파일 읽기 오류:", err);
      res.status(500).json({ error: "파일을 읽을 수 없습니다." });
      return;
    }
    try {
      const jsonData = JSON.parse(data);
      res.json(jsonData);
    } catch {
      console.error(`JSON 파싱 오류:${e}`);
      res.status(500).json({ error: `JSON 파싱 실패` });
    }
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
