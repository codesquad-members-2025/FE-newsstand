import styled from '@emotion/styled'
import Label from './Label'
import Count from './Count'
import { ProgressBtnProps } from '../index'

function ProgressBtn({ text, currentIndex, totalCount }: ProgressBtnProps) {
  return (
    <Container>
      <Label text={text} />
      <Count currentIndex={currentIndex} totalCount={totalCount} />
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
