import { useCallback, useEffect, useState } from 'react';

import { fieldMap } from '@/utils/constants/constants';

import ListView from './ListView';
import Carousel from '../Carousel';
import useCarousel from '../Carousel/useCarousel';

const DURATION = 20000;
const INTERVAL_DURATION = 100;
const PROGRESS_INCREMENT = 100;

const ListViewContainer = ({ data }) => {
  const [totalPage, setTotalPage] = useState(0);
  const { currentPage, goNext, goPrev, reset } = useCarousel();
  const [currentCategory, setCurrentCategory] = useState('generalEconomy');
  const [progress, setProgress] = useState(0);

  const pressList = data[currentCategory];
  const selectedPressData = pressList[currentPage];

  const getCurrentCategoryIndex = useCallback(
    (direction) => {
      const currentIndex = fieldMap.findIndex(
        (item) => item.key === currentCategory
      );
      const nextIndex =
        (currentIndex + direction + fieldMap.length) % fieldMap.length;
      return nextIndex;
    },
    [currentCategory]
  );

  function goToPrevPage() {
    if (currentPage !== 0) {
      goPrev();
      return;
    }
    const prevIndex = getCurrentCategoryIndex(-1);
    const previousCategory = fieldMap[prevIndex].key;

    // 카테고리 변경 전에 이전 카테고리의 총 페이지 수를 계산 : currentCategory 상태는 이전값.
    const prevCategoryTotalPage = data[previousCategory].length - 1;

    setCurrentCategory(previousCategory);
    reset(prevCategoryTotalPage);
  }

  function goToNextPage() {
    if (currentPage !== totalPage) {
      goNext();
      return;
    }

    const nextIndex = getCurrentCategoryIndex(1);
    const nextCategory = fieldMap[nextIndex].key;

    setCurrentCategory(nextCategory);
    reset();
  }

  useEffect(() => {
    setTotalPage(pressList.length - 1);
  }, [currentCategory]);

  useEffect(() => {
    // 초기화: 프로그레스바 초기화
    setProgress(0);

    // 20초마다 페이지 변경
    const pageChangeInterval = setInterval(() => {
      console.log('실행됨');
      goToNextPage();
    }, DURATION);

    // 프로그레스바 업데이트
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= PROGRESS_INCREMENT) {
          clearInterval(progressInterval);
          return PROGRESS_INCREMENT;
        }
        return prev + PROGRESS_INCREMENT / (DURATION / INTERVAL_DURATION);
      });
    }, INTERVAL_DURATION);

    return () => {
      [pageChangeInterval, progressInterval].forEach(clearInterval);
    };
  }, [currentPage, totalPage, currentCategory]);

  return (
    <Carousel goPrev={goToPrevPage} goNext={goToNextPage}>
      <ListView
        currentCategory={currentCategory}
        setCurrentCategory={setCurrentCategory}
        currentPage={currentPage}
        data={selectedPressData}
        totalPressCount={pressList.length}
        reset={reset}
        progress={progress}
      />
    </Carousel>
  );
};

export default ListViewContainer;
