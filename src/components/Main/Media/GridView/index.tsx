import { useState, useMemo } from 'react'
import styled from '@emotion/styled'
import Grid from './Grid'
import NextPageBtn from '@/components/Common/NextPageBtn'
import PrevPageBtn from '@/components/Common/PrevPageBtn'

import { PressDataType, TabType } from '..'
import { useMediaContext } from '@/hooks/useMediaContext'
import { useGridContext } from '@/hooks/useGridContext'

interface GridViewProps {
  tabType: TabType
}

const MAX_GRID_PRESS_COUNT = 24

function GridView({ tabType }: GridViewProps) {
  // 1. 데이터 준비 및 필터링
  const { subscribedPressMap } = useMediaContext()
  const { gridItemList } = useGridContext()
  const [pageIndexAll, setPageIndexAll] = useState(1)
  const [pageIndexSubscribed, setPageIndexSubscribed] = useState(1)

  const filteredPressList =
    tabType === 'subscribed'
      ? gridItemList.filter(press => subscribedPressMap.has(press.pid))
      : gridItemList

  // 2. 페이지네이션 데이터 처리
  const totalPages = Math.ceil(filteredPressList.length / MAX_GRID_PRESS_COUNT) || 1
  const currentPageIndex = tabType === 'all' ? pageIndexAll : pageIndexSubscribed

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

  const setPageIndex = tabType === 'all' ? setPageIndexAll : setPageIndexSubscribed

  // 3. 페이지 이동 핸들러
  const handleNextPage = () => {
    if (currentPageIndex < totalPages) {
      setPageIndex(prev => prev + 1)
    }
  }

  const handlePrevPage = () => {
    if (currentPageIndex > 1) {
      setPageIndex(prev => prev - 1)
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
