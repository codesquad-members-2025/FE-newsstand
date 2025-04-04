import { useState } from 'react'

import styled from '@emotion/styled'
import Grid from './Grid'
import PrevPageBtn from './PrevPageBtn'
import NextPageBtn from './NextPageBtn'

import { PressDataType } from '..'

import extendArray from '@/utils/extendArray'

interface GridViewProps {
  pressData: PressDataType[]
  setPressData: React.Dispatch<React.SetStateAction<PressDataType[]>>
}

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

  const newPressData = extendArray(pressData, totalPages * 24, emptyPressData)

  const pages = Array.from({ length: totalPages }, (_, i) => {
    const start = i * 24
    const end = start + 24
    return newPressData
      .slice(start, end)
      .map((item, idx) => (
        <Grid key={idx} press={item} setPressData={setPressData} isEmpty={item.pid === '-1'} />
      ))
  })

  return (
    <Container>
      {pages[currentPage - 1]}
      <PrevPageBtn currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <NextPageBtn
        totalPages={totalPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
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
