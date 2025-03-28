import styled from '@emotion/styled'

function Count() {
  return (
    <Container>
      <Present>1</Present>
      <Division>/</Division>
      <Entire>81</Entire>
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

const Present = styled.div`
  font-weight: 700;
  font-size: 12px;
  color: rgba(255, 255, 255, 1);
`

const Division = styled.div`
  color: rgba(255, 255, 255, 0.7);
`

const Entire = styled.div`
  font-weight: 700;
  font-size: 12px;
  color: rgba(255, 255, 255, 0.7);
`

export default Count
