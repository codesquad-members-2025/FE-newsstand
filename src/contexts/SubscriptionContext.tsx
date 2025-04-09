import { createContext, useState, ReactNode } from 'react'

interface PressDataType {
  pid: string
  name: string
  regDate: string
  logoDark: string
  logoLight: string
  isSubscribed: boolean
}

interface SubscriptionContextType {
  subscribedPressMap: Map<string, boolean>
  setSubscribedPressMap: React.Dispatch<React.SetStateAction<Map<string, boolean>>>
  gridItems: PressDataType[]
  setGridItems: React.Dispatch<React.SetStateAction<PressDataType[]>>
}

const SubscriptionContext = createContext<SubscriptionContextType>({
  subscribedPressMap: new Map(),
  setSubscribedPressMap: () => {},
  gridItems: [],
  setGridItems: () => {},
})

interface SubscriptionProviderProps {
  children: ReactNode
}

function SubscriptionProvider({ children }: SubscriptionProviderProps) {
  const [subscribedPressMap, setSubscribedPressMap] = useState<Map<string, boolean>>(new Map())
  const [gridItems, setGridItems] = useState<PressDataType[]>([])

  return (
    <SubscriptionContext.Provider
      value={{ subscribedPressMap, setSubscribedPressMap, gridItems, setGridItems }}
    >
      {children}
    </SubscriptionContext.Provider>
  )
}

export { SubscriptionContext }
export default SubscriptionProvider
