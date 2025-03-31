import styled from '@emotion/styled'

interface TitleProps {
  text: string
}

function Title({ text }: TitleProps) {
  return <Text>{text}</Text>
}

const Text = styled.span`
  font-family: Pretendard Variable;
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
  letter-spacing: 0%;
  color: rgba(75, 89, 102, 1);
`

export default Title
