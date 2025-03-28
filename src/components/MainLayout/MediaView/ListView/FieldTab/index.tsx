import styled from '@emotion/styled'
import ProgressBtn from './ProgressBtn'

function FieldTab() {
  return (
    <Container>
      <ProgressBtn />
    </Container>
  )
}

const Container = styled.div`
  width: 930px;
  height: 40px;
  border: 1px solid rgba(210, 218, 224, 1);
`

export default FieldTab
