import { useEffect, useState } from "react";
import GridView from "./GridView";
import ListView from "./ListView";
import LeftSwipeButton from "./SwipeButton/LeftSwipeButton";
import RightSwipeButton from "./SwipeButton/RightSwipeButton";
import styled from "styled-components";

const ContentBoxWrapper = styled.div`
  display: flex;
  & > :nth-child(1) {
    margin-right: 2.94rem;
  }
  & > :nth-child(2) {
    margin-right: 3rem;
  }
`;

function parseNewsLogo(newsData) {
  const logos = {};
  if (!newsData || !newsData["종합/경제"]) return logos; // ✅ null 방어

  newsData["종합/경제"].forEach((item) => {
    const name = item.name;
    const logo = item.logoLight;
    if (!logos[name]) {
      logos[name] = logo;
    }
  });
  return logos;
}

export default function ContentView({ listView }) {
  const [newsData, setnewsData] = useState(null);
  const [page, setpage] = useState(0);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("/crawler/press_by_category.json");
      const data = await res.json();
      setnewsData(() => data);
    }
    fetchData();
  }, []);

  function swipeNextPage() {
    setpage((prev) => prev + 1);
  }

  function swipePrevPage() {
    setpage((prev) => prev - 1);
  }
  const newsLogo = parseNewsLogo(newsData);
  const entries = Object.entries(newsLogo);
  const pageSize = 24;
  const pagedEntries = entries.slice(page * pageSize, pageSize * (1 + page));
  const maxPage = Math.ceil(entries.length / pageSize);

  return (
    <ContentBoxWrapper>
      <LeftSwipeButton swipePrevPage={swipePrevPage} visible={page > 0} />
      {listView ? <ListView /> : <GridView items={pagedEntries} />}
      <RightSwipeButton
        swipeNextPage={swipeNextPage}
        visible={page < maxPage - 1}
      />
    </ContentBoxWrapper>
  );
}
