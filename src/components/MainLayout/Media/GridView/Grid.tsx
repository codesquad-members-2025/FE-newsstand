import styled from '@emotion/styled'

import SubscribeBtn from '@/components/Common/SubscribeBtn'
import UnSubscribeBtn from '@/components/Common/UnSubscribeBtn'

import { PressDataType } from '..'

interface GridProps {
  press: PressDataType
  setPressData: React.Dispatch<React.SetStateAction<PressDataType[]>>
  isEmpty: boolean
}

function Grid({ press, setPressData, isEmpty }: GridProps) {
  if (isEmpty) {
    return <Container />
  }

  const subscribePress = () => {
    setPressData(pressData => {
      return pressData.map(curPress => {
        if (curPress.pid === press.pid) {
          return { ...curPress, isSubscribed: !curPress.isSubscribed }
        }
        return curPress
      })
    })
  }

  return (
    <Container>
      <Image key={press.pid} src={press.logoLight} height="20" alt={press.name}></Image>
      <BtnWrapper>
        {press.isSubscribed ? (
          <UnSubscribeBtn onClick={subscribePress} />
        ) : (
          <SubscribeBtn onClick={subscribePress} backgroundColor={'rgba(255, 255, 255, 1)'} />
        )}
      </BtnWrapper>
    </Container>
  )
}

const Image = styled.img`
  display: block;
  position: absolute;
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
