import styled from '@emotion/styled'

interface GridProps {
  key: string
  logoLight: string
  name: string
}

function Grid({ key, logoLight, name }: GridProps) {
  return (
    <Container>
      <img key={key} src={logoLight} height="20" alt={name}></img>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-right: 1px solid rgba(210, 218, 224, 1);
  border-bottom: 1px solid rgba(210, 218, 224, 1);
`

export default Grid
