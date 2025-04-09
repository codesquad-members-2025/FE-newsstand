import styled from '@emotion/styled'
import ChevronRight from '@/assets/ChevronRight.svg?react'

interface CountProps {
  pageIndex: number
  totalPageCount: number
}

function Count({ pageIndex, totalPageCount }: CountProps) {
  return (
    <Container>
      {totalPageCount === 1 ? (
        <ChevronRight />
      ) : (
        <>
          <CurrentIndex>{pageIndex + 1}</CurrentIndex>
          <Division>/</Division>
          <TotalCount>{totalPageCount}</TotalCount>
        </>
      )}
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 2px;
`

const CurrentIndex = styled.span`
  font-weight: 700;
  font-size: 12px;
  color: rgba(255, 255, 255, 1);
`

const Division = styled.span`
  color: rgba(255, 255, 255, 0.7);
`

const TotalCount = styled.span`
  font-weight: 700;
  font-size: 12px;
  color: rgba(255, 255, 255, 0.7);
`

export default Count
