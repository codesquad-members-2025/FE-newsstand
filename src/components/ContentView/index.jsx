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
    if (page === maxPage - 1) {
      const curCategoryIndex = newsCategory.findIndex(
        (perCategory) => perCategory === category
      );
      const prevCategoryIndex =
        curCategoryIndex === newsCategory.length - 1 ? 0 : curCategoryIndex + 1;
      moveCategory(newsCategory[prevCategoryIndex]);
    } else {
      setpage((prev) => prev + 1);
    }
  }
  function swipePrevPage() {
    if (page === 0) {
      const curCategoryIndex = newsCategory.findIndex(
        (perCategory) => perCategory === category
      );
      const prevCategoryIndex =
        curCategoryIndex === 0 ? newsCategory.length - 1 : curCategoryIndex - 1;
      moveCategory(newsCategory[prevCategoryIndex]);
    } else {
      setpage((prev) => prev - 1);
    }
  }

  function initPage() {
    setpage(() => 0);
  }

  function moveCategory(target) {
    setpage(() => 0);
    setcategory(() => target);
  }

  const getSubscribedNewsObj = getSubscribedNews(newsData, subscribed);
  // if (!isAllpress) {
  //   moveCategory(Object.keys(getSubscribedNewsObj)[0]);
  // }
  const categoryNews = isAllpress
    ? parseOneCategoryNews(newsData, category)
    : parseOneCategoryNews(getSubscribedNewsObj, category);
  const [pagedData, maxPage] = paginateData(listView, categoryNews, page);
  // const newsCategory = newsData ? Object.keys(newsData) : null;

  let newsCategory = null;
  if (newsData) {
    newsCategory = isAllpress
      ? Object.keys(newsData)
      : Object.keys(getSubscribedNewsObj);
  }

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("/crawler/press_by_category.json");
      const data = await res.json();
      const transFormedData = transformNewsData(data);
      setnewsData(() => transFormedData);
      moveCategory(Object.keys(transFormedData)[0]);
    }
    fetchData();
  }, []);

  useEffect(() => {
    setpage(0);
  }, [listView]);

  useEffect(() => {
    if (isAllpress) {
      if (newsData) moveCategory(Object.keys(newsData)[0]);
    } else {
      moveCategory(Object.keys(getSubscribedNewsObj)[0]);
    }
    initPage();
  }, [isAllpress]);

  if (!newsData) return null; //조건부 렌더링
  if (!isAllpress && categoryNews.length === 0) {
    return null;
  }
  if (isAllpress && categoryNews.length === 0) {
    return null;
  }
  return (
    <ContentBoxWrapper>
      <LeftSwipeButton
        swipePrevPage={swipePrevPage}
        visible={listView ? true : page > 0}
      />
      {listView ? (
        <ListView
          page={page}
          maxPage={maxPage}
          category={category}
          moveCategory={moveCategory}
          newsCategory={newsCategory}
          pagedData={pagedData[0]}
        />
      ) : (
        <GridView pagedData={pagedData} />
      )}
      <RightSwipeButton
        swipeNextPage={swipeNextPage}
        visible={listView ? true : page < maxPage - 1}
      />
    </ContentBoxWrapper>
  );
}
