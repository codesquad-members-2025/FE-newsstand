import styled from '@emotion/styled'
import { useContext } from 'react'
import { SubscriptionContext } from '@/contexts/SubscriptionContext'

import SubscribeBtn from '@/components/Common/SubscribeBtn'
import UnSubscribeBtn from '@/components/Common/UnSubscribeBtn'

import { PressDataType } from '..'

interface GridProps {
  pressData: PressDataType
  isEmpty: boolean
}

function Grid({ pressData, isEmpty }: GridProps) {
  const { subscribedPressMap, setSubscribedPressMap } = useContext(SubscriptionContext)

  const handleSubscribe = (pressId: string) => {
    setSubscribedPressMap(prev => new Map(prev).set(pressId, true))
  }

  const handleUnsubscribe = (pressId: string) => {
    setSubscribedPressMap(prev => {
      const newMap = new Map(prev)
      newMap.delete(pressId)
      return newMap
    })
  }

  if (isEmpty) {
    return <Container />
  }

  return (
    <Container>
      <Image key={pressData.pid} src={pressData.logoLight} height="20" alt={pressData.name}></Image>
      <BtnWrapper>
        {subscribedPressMap.has(pressData.pid) ? (
          <UnSubscribeBtn onClick={() => handleUnsubscribe(pressData.pid)} />
        ) : (
          <SubscribeBtn
            onClick={() => handleSubscribe(pressData.pid)}
            backgroundColor={'rgba(255, 255, 255, 1)'}
          />
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
