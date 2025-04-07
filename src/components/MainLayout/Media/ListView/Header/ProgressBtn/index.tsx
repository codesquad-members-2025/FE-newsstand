import styled from '@emotion/styled'
import Label from './Label'
import Count from './Count'

interface ProgressBtnProps {
  text: string
  pageIndex: number
  totalPageCount: number
}

function ProgressBtn({ text, pageIndex, totalPageCount }: ProgressBtnProps) {
  return (
    <Container>
      <Label text={text} />
      <Count pageIndex={pageIndex} totalPageCount={totalPageCount} />
    </Container>
  )
}

const Container = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 166px;
  padding: 0px 16px;
  height: 100%;
  background-color: rgba(120, 144, 231, 1);
`

export default ProgressBtn
