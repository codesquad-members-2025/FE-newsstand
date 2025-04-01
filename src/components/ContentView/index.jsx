import { useEffect, useState } from "react";
import GridView from "./GridView";
import ListView from "./ListView";
import LeftSwipeButton from "./SwipeButton/LeftSwipeButton";
import RightSwipeButton from "./SwipeButton/RightSwipeButton";
import styled from "styled-components";
import parseOneCategoryNews from "./util/parseOneCategoryNews";
import paginateData from "./util/paginateData";

const ContentBoxWrapper = styled.div`
  display: flex;
  & > :nth-child(1) {
    margin-right: 2.94rem;
  }
  & > :nth-child(2) {
    margin-right: 3rem;
  }
`;

export default function ContentView({ listView }) {
  const [newsData, setnewsData] = useState(null);
  const [page, setpage] = useState(0);
  const [category, setcategory] = useState("종합/경제");

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("/crawler/press_by_category.json");
      const data = await res.json();
      setnewsData(() => data);
    }
    fetchData();
  }, []);

  useEffect(() => {
    setpage(0);
  }, [listView]);

  if (!newsData) return null; //조건부 렌더링

  function swipeNextPage() {
    setpage((prev) => prev + 1);
  }
  function swipePrevPage() {
    setpage((prev) => prev - 1);
  }

  const categoryNews = parseOneCategoryNews(newsData, category);
  const [pagedData, maxPage] = paginateData(listView, categoryNews, page);

  return (
    <ContentBoxWrapper>
      <LeftSwipeButton swipePrevPage={swipePrevPage} visible={page > 0} />
      {listView ? (
        <ListView pagedData={pagedData[0]} />
      ) : (
        <GridView pagedData={pagedData} />
      )}
      <RightSwipeButton
        swipeNextPage={swipeNextPage}
        visible={page < maxPage - 1}
      />
    </ContentBoxWrapper>
  );
}
