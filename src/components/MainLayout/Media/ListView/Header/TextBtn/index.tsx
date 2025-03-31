import styled from '@emotion/styled'
import { TextBtnProps } from '../index'

function TextBtn({ text }: TextBtnProps) {
  return <Container>{text}</Container>
}

const Container = styled.button`
  height: 100%;
  padding: 0px 16px;
  font-weight: 500;
  font-size: 14px;
  color: rgba(135, 146, 152, 1);
`

export default TextBtn
