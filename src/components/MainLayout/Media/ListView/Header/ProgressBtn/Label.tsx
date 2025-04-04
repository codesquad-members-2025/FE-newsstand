import styled from '@emotion/styled'

interface LabelProps {
  text: string
}

function Label({ text }: LabelProps) {
  return (
    <Container>
      <LabelText>{text}</LabelText>
    </Container>
  )
}

const Container = styled.div`
  gap: 8px;
  font-weight: 700;
  font-size: 14px;
  color: rgba(255, 255, 255, 1);
`

const LabelText = styled.div``

export default Label
