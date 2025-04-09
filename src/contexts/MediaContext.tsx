import { createContext, useState, ReactNode } from 'react'

interface PressDataType {
  pid: string
  name: string
  regDate: string
  logoDark: string
  logoLight: string
  isSubscribed: boolean
}

interface MediaContextType {
  subscribedPressMap: Map<string, boolean>
  setSubscribedPressMap: React.Dispatch<React.SetStateAction<Map<string, boolean>>>
  gridItems: PressDataType[]
  setGridItems: React.Dispatch<React.SetStateAction<PressDataType[]>>
  handlePressSubscription: (pressId: string, isSubscribe: boolean) => void
}

const MediaContext = createContext<MediaContextType>({
  subscribedPressMap: new Map(),
  setSubscribedPressMap: () => {},
  gridItems: [],
  setGridItems: () => {},
  handlePressSubscription: () => {},
})

interface MediaProviderProps {
  children: ReactNode
}

function MediaProvider({ children }: MediaProviderProps) {
  const [subscribedPressMap, setSubscribedPressMap] = useState<Map<string, boolean>>(new Map())
  const [gridItems, setGridItems] = useState<PressDataType[]>([])

  const handlePressSubscription = (pressId: string, isSubscribe: boolean) => {
    setSubscribedPressMap(prev => {
      const newMap = new Map(prev)
      if (isSubscribe) {
        newMap.set(pressId, true)
      } else {
        newMap.delete(pressId)
      }
      return newMap
    })
  }

  return (
    <MediaContext.Provider
      value={{
        subscribedPressMap,
        setSubscribedPressMap,
        gridItems,
        setGridItems,
        handlePressSubscription,
      }}
    >
      {children}
    </MediaContext.Provider>
  )
}

export { MediaContext }
export default MediaProvider
