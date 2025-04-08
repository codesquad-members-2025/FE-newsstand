import styled from '@emotion/styled'

interface TextBtnProps {
  text: string
  setButtonIndex: React.Dispatch<React.SetStateAction<number>>
  index: number
}

function TextBtn({ text, setButtonIndex, index }: TextBtnProps) {
  return <Container onClick={() => setButtonIndex(index)}>{text}</Container>
}

const Container = styled.button`
  height: 100%;
  padding: 0px 16px;
  font-weight: 500;
  font-size: 14px;
  color: rgba(135, 146, 152, 1);
`

export default TextBtn
