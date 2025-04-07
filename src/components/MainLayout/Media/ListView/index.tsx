import { useState } from 'react'
import styled from '@emotion/styled'
import Header from './Header'
import NewsCard from './NewsCard'

import { PressDataType } from '..'
import { TabType } from '..'

import NextPageBtn from '@/components/Common/NextPageBtn'
import PrevPageBtn from '@/components/Common/PrevPageBtn'

import { formatCategories, getCategoryData, getNewsCardData } from '@/utils/newsTransFormater'

interface ListViewProps {
  pressData: PressDataType[]
  tabType: TabType
}

function ListView({ pressData, tabType }: ListViewProps) {
  const [buttonIndex, setButtonIndex] = useState(0)
  const [pageIndex, setPageIndex] = useState(0)

  const categories = formatCategories(pressData)
  const categoryData = getCategoryData(pressData, categories[buttonIndex])
  const newsCardData = getNewsCardData(categoryData, pageIndex)

  const maxButtonIndex = categories.length - 1
  const maxPageIndex = categoryData.length - 1

  const handleNextPage = () => {
    if (pageIndex < maxPageIndex) {
      setPageIndex(prev => prev + 1)
    }
  }

  const handlePrevPage = () => {
    if (pageIndex > 0) {
      setPageIndex(prev => prev - 1)
    }
  }

  return (
    <Container>
      <Header
        categories={categories}
        buttonIndex={buttonIndex}
        setButtonIndex={setButtonIndex}
        pageIndex={pageIndex}
        setPageIndex={setPageIndex}
        totalPageCount={categoryData.length}
      />
      <NewsCard newsCardData={newsCardData} />
      <NextPageBtn onClick={handleNextPage} disabled={pageIndex === maxPageIndex} />
      <PrevPageBtn onClick={handlePrevPage} disabled={pageIndex === 0} />
    </Container>
  )
}

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 0px;
`

export default ListView
