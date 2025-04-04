import styled from '@emotion/styled'

interface CountProps {
  currentIndex: number
  totalCount: number
}

function Count({ currentIndex, totalCount }: CountProps) {
  return (
    <Container>
      <CurrentIndex>{currentIndex}</CurrentIndex>
      <Division>/</Division>
      <TotalCount>{totalCount}</TotalCount>
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
