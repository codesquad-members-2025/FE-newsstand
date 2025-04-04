import styled from '@emotion/styled'
import SubscribeBtn from '@/components/Common/SubscribeBtn'

interface GridProps {
  key: string
  logoLight: string
  name: string
}

function Grid({ key, logoLight, name }: GridProps) {
  return (
    <Container>
      <Image key={key} src={logoLight} height="20" alt={name}></Image>
      <BtnWrapper>
        <SubscribeBtn backgroundColor={'rgba(255, 255, 255, 1)'} />
      </BtnWrapper>
    </Container>
  )
}

const Image = styled.img`
  display: block;
`

const BtnWrapper = styled.div`
  display: none;
  position: absolute;
`

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-right: 1px solid rgba(210, 218, 224, 1);
  border-bottom: 1px solid rgba(210, 218, 224, 1);
  position: relative;

  &:hover {
    background-color: rgba(245, 247, 249, 1);

    ${BtnWrapper} {
      display: block;
    }

    ${Image} {
      display: none;
    }
  }
`

export default Grid
