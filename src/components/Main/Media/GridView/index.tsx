import { useState } from 'react'

import styled from '@emotion/styled'
import Grid from './Grid'
import NextPageBtn from '@/components/Common/NextPageBtn'
import PrevPageBtn from '@/components/Common/PrevPageBtn'

import { PressDataType } from '..'

import extendArray from '@/utils/extendArray'

interface GridViewProps {
  pressData: PressDataType[]
  setPressData: React.Dispatch<React.SetStateAction<PressDataType[]>>
}

const PAGE_GRID_NUMBER = 24

function GridView({ pressData, setPressData }: GridViewProps) {
  const totalPages = Math.ceil(pressData.length / 24) || 1
  const [currentPage, setCurrentPage] = useState(1)
  const emptyPressData = {
    pid: '-1',
    name: '',
    regDate: '',
    logoDark: '',
    logoLight: '',
    isSubscribed: false,
  }

  const newPressData = extendArray(pressData, totalPages * PAGE_GRID_NUMBER, emptyPressData)

  const pages = Array.from({ length: totalPages }, (_, i) => {
    const start = i * PAGE_GRID_NUMBER
    const end = start + PAGE_GRID_NUMBER
    return newPressData
      .slice(start, end)
      .map((item, idx) => (
        <Grid key={idx} press={item} setPressData={setPressData} isEmpty={item.pid === '-1'} />
      ))
  })

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(prev => prev + 1)
    }
  }

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(prev => prev - 1)
    }
  }

  return (
    <Container>
      {pages[currentPage - 1]}
      <PrevPageBtn onClick={handlePrevPage} disabled={currentPage === 1} />
      <NextPageBtn onClick={handleNextPage} disabled={currentPage === totalPages} />
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
