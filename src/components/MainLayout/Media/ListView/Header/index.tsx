import styled from '@emotion/styled'
import ProgressBtn from './ProgressBtn'
import TextBtn from './TextBtn'

export interface ProgressBtnProps {
  text: string
  currentIndex: number
  totalCount: number
}

export interface TextBtnProps {
  text: string
}

function PressScroll() {
  return (
    <Container>
      <ProgressBtn text="종합/경제" currentIndex={1} totalCount={81} />
      <TextBtn text="방송/통신" />
      <TextBtn text="IT" />
      <TextBtn text="영자지" />
      <TextBtn text="스포츠/연예" />
      <TextBtn text="매거진/전문지" />
      <TextBtn text="지역" />
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  width: 930px;
  height: 40px;
  border: 1px solid rgba(210, 218, 224, 1);
  background-color: rgba(245, 247, 249, 1);
`

export default PressScroll
