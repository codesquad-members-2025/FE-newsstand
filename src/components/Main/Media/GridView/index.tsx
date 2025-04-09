import { useState, useContext, useMemo, useEffect } from 'react'
import styled from '@emotion/styled'
import Grid from './Grid'
import NextPageBtn from '@/components/Common/NextPageBtn'
import PrevPageBtn from '@/components/Common/PrevPageBtn'

import { PressDataType, TabType } from '..'
import { MediaContext } from '@/contexts/MediaContext'
import { getGridViewData } from '@/utils/newsTransFormater'
import { shuffle } from '@/utils/suffleArray'

interface GridViewProps {
  pressData: PressDataType[]
  tabType: TabType
}

const MAX_GRID_PRESS_COUNT = 24

function GridView({ pressData, tabType }: GridViewProps) {
  // 1. 데이터 준비 및 필터링
  const { subscribedPressMap, gridItems, setGridItems } = useContext(MediaContext)
  const [pageIndices, setPageIndices] = useState({
    all: 1,
    subscribed: 1,
  })
  useEffect(() => {
    if (gridItems.length === 0) {
      setGridItems(shuffle(getGridViewData(pressData)))
    }
  }, [])

  const filteredPressList =
    tabType === 'subscribed'
      ? gridItems.filter(press => subscribedPressMap.has(press.pid))
      : gridItems

  // 2. 페이지네이션 데이터 처리
  const totalPages = Math.ceil(filteredPressList.length / MAX_GRID_PRESS_COUNT)
  const currentPageIndex = pageIndices[tabType]

  const currentPageItems = useMemo(() => {
    const startIndex = (currentPageIndex - 1) * MAX_GRID_PRESS_COUNT
    const items = [...filteredPressList.slice(startIndex, startIndex + MAX_GRID_PRESS_COUNT)]

    while (items.length < MAX_GRID_PRESS_COUNT) {
      items.push({ pid: `empty-${items.length}` } as PressDataType)
    }

    return items.map(item => (
      <Grid
        key={`grid-${tabType}-${item.pid}`}
        pressData={item}
        isEmpty={item.pid.startsWith('empty')}
      />
    ))
  }, [filteredPressList, currentPageIndex, tabType])

  // 3. 페이지 이동 핸들러
  const handleNextPage = () => {
    if (currentPageIndex < totalPages) {
      setPageIndices(prev => ({
        ...prev,
        [tabType]: prev[tabType] + 1,
      }))
    }
  }

  const handlePrevPage = () => {
    if (currentPageIndex > 1) {
      setPageIndices(prev => ({
        ...prev,
        [tabType]: prev[tabType] - 1,
      }))
    }
  }

  // 4. 렌더링
  return (
    <Container>
      {currentPageItems}
      <PrevPageBtn onClick={handlePrevPage} disabled={currentPageIndex === 1} />
      <NextPageBtn onClick={handleNextPage} disabled={currentPageIndex === totalPages} />
    </Container>
  )
}

const Container = styled.div`
  position: relative;
  width: 930px;
  height: 388px;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  border-top: 1px solid rgba(210, 218, 224, 1);
  border-left: 1px solid rgba(210, 218, 224, 1);
`

export default GridView
