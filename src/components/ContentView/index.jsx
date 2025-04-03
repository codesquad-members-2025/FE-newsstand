import { useEffect, useState } from "react";
import GridView from "./GridView";
import ListView from "./ListView";
import LeftSwipeButton from "./SwipeButton/LeftSwipeButton";
import RightSwipeButton from "./SwipeButton/RightSwipeButton";
import styled from "styled-components";
import parseOneCategoryNews from "./util/parseOneCategoryNews";
import paginateData from "./util/paginateData";
import transformNewsData from "./util/transformNewsData";
import { useContext } from "react";
import { SubscribedContext } from "../../utils/Subscribed/SubscribedContext";
import getSubscribedNews from "./util/getSubscribedNews";

const ContentBoxWrapper = styled.div`
  display: flex;
  & > :nth-child(1) {
    margin-right: 2.94rem;
  }
  & > :nth-child(2) {
    margin-right: 3rem;
  }
`;

export default function ContentView({ isAllpress, listView }) {
  const [newsData, setnewsData] = useState(null);
  const [page, setpage] = useState(0);
  const [category, setcategory] = useState("종합/경제");
  const { subscribed } = useContext(SubscribedContext);

  function swipeNextPage() {
    setpage((prev) => prev + 1);
  }
  function swipePrevPage() {
    setpage((prev) => prev - 1);
  }

  function moveCategory(target) {
    setcategory(target);
  }

  const getSubscribedNewsObj = getSubscribedNews(newsData, subscribed);
  const categoryNews = isAllpress
    ? parseOneCategoryNews(newsData, category)
    : parseOneCategoryNews(getSubscribedNewsObj, category);
  const [pagedData, maxPage] = paginateData(listView, categoryNews, page);
  // const newsCategory = newsData ? Object.keys(newsData) : null;

  let newsCategory = null;
  if (newsData) {
    newsCategory = isAllpress
      ? Object.keys(newsData)
      : Object.values(categoryNews).map((value) => value.name);
  }

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("/crawler/press_by_category.json");
      const data = await res.json();
      const transFormedData = transformNewsData(data);
      setnewsData(() => transFormedData);
    }
    fetchData();
  }, []);

  useEffect(() => {
    setpage(0);
  }, [listView]);

  useEffect(() => {
    newsCategory ? moveCategory(newsCategory[0]) : null;
  }, [isAllpress]);

  if (!newsData) return null; //조건부 렌더링
  return (
    <ContentBoxWrapper>
      <LeftSwipeButton swipePrevPage={swipePrevPage} visible={page > 0} />
      {listView ? (
        <ListView
          moveCategory={moveCategory}
          newsCategory={newsCategory}
          pagedData={pagedData[0]}
        />
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
