import { useState, useContext, useEffect } from 'react'
import styled from '@emotion/styled'
import Header from './Header'
import NewsCard from './NewsCard'

import { PressDataType } from '..'
import { TabType } from '..'
import { MediaContext } from '@/contexts/MediaContext'

import NextPageBtn from '@/components/Common/NextPageBtn'
import PrevPageBtn from '@/components/Common/PrevPageBtn'

import {
  getCategories,
  getNewsCardData,
  getSubscribedPressNames,
  getPidByIndex,
  getCategoryPressCount,
} from '@/utils/newsTransFormater'

interface ListViewProps {
  pressData: PressDataType[]
  tabType: TabType
}

function skeletonListView() {
  return (
    <Container>
      <SkeletonHeader />
      <SkeletonNewsCard />
    </Container>
  )
}

function ListView({ pressData, tabType }: ListViewProps) {
  const [headerIndexAll, setHeaderIndexAll] = useState(0)
  const [headerIndexSubscribed, setHeaderIndexSubscribed] = useState(0)
  const [pageIndex, setPageIndex] = useState(0)
  const { subscribedPressMap } = useContext(MediaContext)

  const subscriptionCount = subscribedPressMap.size

  if (tabType === 'subscribed' && subscriptionCount === 0) return skeletonListView()

  let categories
  let newsCardData
  let totalCount
  let headerIndex = tabType === 'all' ? headerIndexAll : headerIndexSubscribed

  if (tabType === 'all') {
    categories = getCategories(pressData)
    const currentPid = getPidByIndex(pressData, headerIndex, pageIndex)
    newsCardData = getNewsCardData(pressData, currentPid)
    totalCount = getCategoryPressCount(pressData, headerIndex)
  } else {
    categories = getSubscribedPressNames(pressData, subscribedPressMap)
    const subscribedPids = Array.from(subscribedPressMap.keys())
    const currentPid = subscribedPids[headerIndex]
    newsCardData = getNewsCardData(pressData, currentPid)
    totalCount = 1
  }

  const handleNextPage = () => {
    if (tabType === 'all' && pageIndex < totalCount - 1) {
      setPageIndex(prev => prev + 1)
    }
  }

  const handlePrevPage = () => {
    if (tabType === 'all' && pageIndex > 0) {
      setPageIndex(prev => prev - 1)
    }
  }

  const setHeaderIndex = tabType === 'all' ? setHeaderIndexAll : setHeaderIndexSubscribed

  return (
    <Container>
      <Header
        categories={categories}
        headerIndex={headerIndex}
        setHeaderIndex={setHeaderIndex}
        pageIndex={pageIndex}
        setPageIndex={setPageIndex}
        totalPageCount={totalCount}
      />
      <NewsCard newsCardData={newsCardData} />
      {tabType === 'all' && (
        <>
          <NextPageBtn onClick={handleNextPage} disabled={pageIndex === totalCount - 1} />
          <PrevPageBtn onClick={handlePrevPage} disabled={pageIndex === 0} />
        </>
      )}
    </Container>
  )
}

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 0px;
`

const SkeletonHeader = styled.div`
  width: 930px;
  height: 40px;
  border: 1px solid rgba(210, 218, 224, 1);
  background-color: rgba(245, 247, 249, 1);
`

const SkeletonNewsCard = styled.div`
  width: 930px;
  height: 348px;
  border: 1px solid rgba(210, 218, 224, 1);
  border-top: none;
`

export default ListView
