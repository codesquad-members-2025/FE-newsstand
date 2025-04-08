import styled from '@emotion/styled'

interface CaptionProps {
  text: string
}

function Caption({ text }: CaptionProps) {
  return <Text>{text}</Text>
}

const Text = styled.span`
  font-family: Pretendard Variable;
  font-weight: 500;
  font-size: 14px;
  line-height: 100%;
  letter-spacing: 0%;
  color: rgba(135, 146, 152, 1);
`

export default Caption
