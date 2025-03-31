import styled from '@emotion/styled'

function NewsBar() {
  return (
    <Container>
      <Press>연합뉴스</Press>
      <NewsTitle>[1보] 김기현·안철수·천하람·황교안, 與전대 본경선 진출</NewsTitle>
    </Container>
  )
}

const Container = styled.div`
  gap: 16px;
  border-width: 1px;
  padding: 16px;
  display: flex;
  flex-direction: row;
  background-color: rgba(245, 247, 249, 1);
  border: 1px solid rgba(210, 218, 224, 1);
`

const Press = styled.div`
  font-weight: 700;
  font-size: 14px;
  color: rgba(20, 33, 43, 1);
`

const NewsTitle = styled.div`
  font-weight: 500;
  font-size: 14px;
  color: rgba(95, 110, 118, 1);
`

export default NewsBar
