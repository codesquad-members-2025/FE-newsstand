import styled from '@emotion/styled'
import TextBtn from './TextBtn'

function ProgressBtn() {
  return (
    <Container>
      <TextBtn />
    </Container>
  )
}

const Container = styled.div`
  background-color: rgba(120, 144, 231, 1);
`

export default ProgressBtn
