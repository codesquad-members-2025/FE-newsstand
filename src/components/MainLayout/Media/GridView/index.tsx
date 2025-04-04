import { useState } from 'react'

import styled from '@emotion/styled'
import Grid from './Grid'
import PrevPageBtn from './PrevPageBtn'
import NextPageBtn from './NextPageBtn'

interface PressDataItem {
  pid: string
  name: string
  regDate: string
  logoDark: string
  logoLight: string
}

interface GridViewProps {
  data: PressDataItem[]
}

function GridView({ data }: GridViewProps) {
  const [currentPage, setCurrentPage] = useState(1)
  const totalPages = Math.ceil(data.length / 24)

  const pages = Array.from({ length: totalPages }, (_, i) => {
    const start = i * 24
    const end = start + 24
    return data
      .slice(start, end)
      .map(item => <Grid key={item.pid} logoLight={item.logoLight} name={item.name} />)
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
