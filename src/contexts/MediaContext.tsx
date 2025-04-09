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
}

const MediaContext = createContext<MediaContextType>({
  subscribedPressMap: new Map(),
  setSubscribedPressMap: () => {},
  gridItems: [],
  setGridItems: () => {},
})

interface MediaProviderProps {
  children: ReactNode
}

function MediaProvider({ children }: MediaProviderProps) {
  const [subscribedPressMap, setSubscribedPressMap] = useState<Map<string, boolean>>(new Map())
  const [gridItems, setGridItems] = useState<PressDataType[]>([])

  return (
    <MediaContext.Provider
      value={{ subscribedPressMap, setSubscribedPressMap, gridItems, setGridItems }}
    >
      {children}
    </MediaContext.Provider>
  )
}

export { MediaContext }
export default MediaProvider
