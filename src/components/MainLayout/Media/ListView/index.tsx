import { useState } from 'react'
import styled from '@emotion/styled'
import Header from './Header'
import NewsCard from './NewsCard'

import { PressDataType } from '..'
import { TabType } from '..'

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
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0px;
`

export default ListView
