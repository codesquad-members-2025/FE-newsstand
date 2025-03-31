import styled from '@emotion/styled'
import NewsSource from './NewsSource'
import NewsContent from './NewsContent'

function PressNews() {
  return (
    <Container>
      <NewsSource />
      <NewsContent />
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 930px;
  height: 348px;
  gap: 16px;
  border: 1px solid rgba(210, 218, 224, 1);
  border-top: none;
  padding: 24px;
`

export default PressNews
