import styled from '@emotion/styled'
import { useContext } from 'react'
import { MediaContext } from '@/contexts/MediaContext'

import SubscriptionBtn from '@/components/Common/SubscriptionBtn'

import { PressDataType } from '..'

interface GridProps {
  pressData: PressDataType
  isEmpty: boolean
}

function Grid({ pressData, isEmpty }: GridProps) {
  const { subscribedPressMap, handlePressSubscription } = useContext(MediaContext)
  const pressId = pressData.pid

  if (isEmpty) {
    return <Container />
  }

  return (
    <Container>
      <Image key={pressId} src={pressData.logoLight} height="20" alt={pressData.name}></Image>
      <BtnWrapper>
        <SubscriptionBtn
          isSubscribed={subscribedPressMap.has(pressId)}
          onClick={() => handlePressSubscription(pressId, !subscribedPressMap.has(pressId))}
          isWhiteBackground={true}
        />
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
