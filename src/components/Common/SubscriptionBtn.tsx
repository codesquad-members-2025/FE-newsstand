import { useContext } from 'react'
import styled from '@emotion/styled'
import { useMediaContext } from '@/hooks/useMediaContext'

import PlusIcon from '@/assets/PlusIcon.svg?react'
import CloseIcon from '@/assets/CloseIcon.svg?react'
import { AlertContext } from '@/contexts/AlertContext'

interface SubscriptionButtonProps {
  pressId: string
  isWhiteBackground?: boolean
}

function SubscriptionButton({ pressId, isWhiteBackground = false }: SubscriptionButtonProps) {
  const { subscribedPressMap, handlePressSubscription } = useMediaContext()
  const { setShowAlert, setPressId } = useContext(AlertContext)

  const isSubscribed = subscribedPressMap.has(pressId)

  const handleClick = () => {
    if (isSubscribed) {
      setPressId(pressId)
      setShowAlert(true)
    } else {
      handlePressSubscription(pressId)
    }
  }

  return (
    <>
      <Button onClick={handleClick} isWhiteBackground={isWhiteBackground}>
        {isSubscribed ? <CloseIcon /> : <PlusIcon />}
        <Text>{isSubscribed ? '해지하기' : '구독하기'}</Text>
      </Button>
    </>
  )
}

export default SubscriptionButton

const Text = styled.span`
  font-weight: 500;
  font-size: 12px;
  color: rgba(135, 146, 152, 1);
  transition: color 0.2s ease;
`

const Button = styled.button<{ isWhiteBackground: boolean }>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 24px;
  gap: 2px;
  padding: 0px 6px;
  border: 1px solid rgba(210, 218, 224, 1);
  border-radius: 999px;
  background-color: ${({ isWhiteBackground }) =>
    isWhiteBackground ? 'rgba(255, 255, 255, 1)' : 'rgba(245, 247, 249, 1)'};
  transition: border-color 0.2s ease;

  svg {
    path {
      fill: rgba(135, 146, 152, 1);
      transition: fill 0.2s ease;
    }
  }

  &:hover {
    border-color: rgba(110, 128, 145, 1);

    svg path {
      fill: rgba(75, 89, 102, 1);
    }

    ${Text} {
      color: rgba(75, 89, 102, 1);
    }
  }
`
