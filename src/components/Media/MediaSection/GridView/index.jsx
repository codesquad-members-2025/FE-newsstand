import { useContext, useEffect } from 'react';

import { useModal } from '@/components/common/Modal/useModal';
import { SubscribeContext } from '@/context/SubscribeContext';
import {
  getPressDataWithSubscription,
  filterSubscribedPressData,
  getSlicedData,
} from '@/utils/parse';

import GridView from './GridView';
import Carousel from '../Carousel';
import useCarousel from '../Carousel/useCarousel';

const GridViewContainer = ({ data: pressList, activeTab }) => {
  const { currentPage, goNext, goPrev, reset } = useCarousel();
  const { subscribedPress, addPressSubscription, removePressSubscription } =
    useContext(SubscribeContext);
  const { openModal } = useModal();

  // 페이지네이션 관련 상수
  const ITEMS_PER_PAGE = 24;
  const MAX_PAGE = 4;

  const startIndex = currentPage * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;

  // 1. 구독여부 넣어서 데이터 생성
  const pressDataWithSubscription = getPressDataWithSubscription(
    pressList,
    subscribedPress
  );

  // 2. activeTab에 따른 필터링된 데이터
  const filteredPressData =
    activeTab === 'all'
      ? pressDataWithSubscription
      : filterSubscribedPressData(pressDataWithSubscription);

  // 3. 페이지네이션 처리
  const selectedPressData = getSlicedData(
    filteredPressData,
    startIndex,
    endIndex
  );

  // 4. totalPage 계산 (동적으로, 최대 4페이지로 제한)
  const totalPage = Math.min(
    Math.ceil(filteredPressData.length / ITEMS_PER_PAGE),
    MAX_PAGE
  );

  // 구독 추가
  const handleAddSubscription = ({ pid: pressId }) => {
    addPressSubscription(pressId);
  };

  // 구독 해지
  const handleRemoveSubscription = ({ pid: pressId, name }) => {
    openModal({
      targetName: name,
      onConfirm: () => {
        removePressSubscription(pressId);
      },
    });
  };

  useEffect(() => reset(), [activeTab]);

  return (
    <Carousel
      goNext={goNext}
      goPrev={goPrev}
      showPrev={currentPage > 0}
      showNext={currentPage < totalPage - 1}
    >
      <GridView
        data={selectedPressData}
        handleAddSubscription={handleAddSubscription}
        handleRemoveSubscription={handleRemoveSubscription}
      />
    </Carousel>
  );
};

export default GridViewContainer;
