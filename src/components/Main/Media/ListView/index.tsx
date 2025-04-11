import { useState, useContext, useEffect } from 'react'
import styled from '@emotion/styled'
import Header from './Header'
import NewsCard from './NewsCard'

import { PressDataType } from '..'
import { TabType } from '..'
import { useMediaContext } from '@/hooks/useMediaContext'
import { useListContext } from '@/hooks/useListContext'

import NextPageBtn from '@/components/Common/NextPageBtn'
import PrevPageBtn from '@/components/Common/PrevPageBtn'

import {
  getCategories,
  getNewsCardData,
  getSubscribedPressNames,
  getPidByIndex,
  getCategoryPressLength,
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
  const { subscribedPressMap } = useMediaContext()
  const {
    headerIndexAll,
    setHeaderIndexAll,
    headerIndexSubscribed,
    setHeaderIndexSubscribed,
    pageIndex,
    setPageIndex,
  } = useListContext()

  const subscriptionCount = subscribedPressMap.size

  if (tabType === 'subscribed' && subscriptionCount === 0) return skeletonListView()

  let categories
  let newsCardData
  let maxPageIndex
  let headerIndex = tabType === 'all' ? headerIndexAll : headerIndexSubscribed
  const setHeaderIndex = tabType === 'all' ? setHeaderIndexAll : setHeaderIndexSubscribed

  if (tabType === 'all') {
    categories = getCategories(pressData)
    const currentPid = getPidByIndex(pressData, headerIndex, pageIndex)
    newsCardData = getNewsCardData(pressData, currentPid)
    maxPageIndex = getCategoryPressLength(pressData, headerIndex) - 1
  } else {
    categories = getSubscribedPressNames(pressData, subscribedPressMap)
    const subscribedPids = Array.from(subscribedPressMap.keys())
    const currentPid = subscribedPids[headerIndex]
    newsCardData = getNewsCardData(pressData, currentPid)
    maxPageIndex = 0
  }

  const handleNextPage = () => {
    if (tabType === 'subscribed') {
      setHeaderIndex(prev => (prev + 1) % categories.length)
    } else if (tabType === 'all' && pageIndex === maxPageIndex) {
      setHeaderIndex(prev => (prev + 1) % categories.length)
      setPageIndex(0)
    } else {
      setPageIndex(prev => (prev + 1) % (maxPageIndex + 1))
    }
  }

  const handlePrevPage = () => {
    if (tabType === 'subscribed') {
      setHeaderIndex(prev => (headerIndex === 0 ? categories.length - 1 : prev - 1))
    } else if (pageIndex === 0) {
      const maxPrevPageIndex =
        getCategoryPressLength(
          pressData,
          headerIndex === 0 ? categories.length - 1 : headerIndex - 1
        ) - 1
      setHeaderIndex(prev => (headerIndex === 0 ? categories.length - 1 : prev - 1))
      setPageIndex(maxPrevPageIndex)
    } else {
      setPageIndex(prev => prev - 1)
    }
  }

  return (
    <Container>
      <Header
        categories={categories}
        headerIndex={headerIndex}
        setHeaderIndex={setHeaderIndex}
        pageIndex={pageIndex}
        setPageIndex={setPageIndex}
        totalPageCount={maxPageIndex + 1}
      />
      <NewsCard newsCardData={newsCardData} />
      <NextPageBtn onClick={handleNextPage} disabled={false} />
      <PrevPageBtn onClick={handlePrevPage} disabled={false} />
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
