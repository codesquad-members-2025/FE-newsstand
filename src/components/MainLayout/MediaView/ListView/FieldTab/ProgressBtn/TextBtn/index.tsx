import styled from '@emotion/styled'
import Count from './Count'

function TextBtn() {
  return (
    <Container>
      <Label>종합/경제</Label>
      <Count />
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 166px;
  height: 40px;
  gap: 8px;
  padding: 0px 16px;
`

const Label = styled.div`
  font-weight: 700;
  font-size: 14px;
  color: rgba(255, 255, 255, 1);
`

export default TextBtn
