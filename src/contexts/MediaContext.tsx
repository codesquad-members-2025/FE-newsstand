import { createContext, useState, ReactNode } from 'react'
import useFetch from '@/hooks/useFetch'

interface PressDataType {
  pid: string
  name: string
  regDate: string
  logoDark: string
  logoLight: string
  isSubscribed: boolean
}

interface UnsubscribeModalData {
  pressId: string
}

interface MediaContextType {
  data: any
  loading: boolean
  subscribedPressMap: Map<string, boolean>
  setSubscribedPressMap: React.Dispatch<React.SetStateAction<Map<string, boolean>>>
  gridItems: PressDataType[]
  setGridItems: React.Dispatch<React.SetStateAction<PressDataType[]>>
  handlePressSubscription: (pressId: string) => void

  unsubscribeModal: UnsubscribeModalData | null
  openUnsubscribeModal: (pressId: string) => void
  closeUnsubscribeModal: () => void
}

const MediaContext = createContext<MediaContextType>({
  data: {},
  loading: true,

  subscribedPressMap: new Map(),
  setSubscribedPressMap: () => {},
  gridItems: [],
  setGridItems: () => {},
  handlePressSubscription: () => {},

  unsubscribeModal: null,
  openUnsubscribeModal: () => {},
  closeUnsubscribeModal: () => {},
})

interface MediaProviderProps {
  children: ReactNode
}

function MediaProvider({ children }: MediaProviderProps) {
  const { data, loading } = useFetch('/mock/press_by_category.json')
  const [subscribedPressMap, setSubscribedPressMap] = useState<Map<string, boolean>>(new Map())
  const [gridItems, setGridItems] = useState<PressDataType[]>([])

  const [unsubscribeModal, setUnsubscribeModal] = useState<UnsubscribeModalData | null>(null)

  const handlePressSubscription = (pressId: string) => {
    setSubscribedPressMap(prev => {
      const newMap = new Map(prev)
      if (newMap.has(pressId)) {
        newMap.delete(pressId)
      } else {
        newMap.set(pressId, true)
      }
      return newMap
    })
  }

  const openUnsubscribeModal = (pressId: string) => {
    setUnsubscribeModal({ pressId })
  }

  const closeUnsubscribeModal = () => {
    setUnsubscribeModal(null)
  }

  return (
    <MediaContext.Provider
      value={{
        data,
        loading,
        subscribedPressMap,
        setSubscribedPressMap,
        gridItems,
        setGridItems,
        handlePressSubscription,
        unsubscribeModal,
        openUnsubscribeModal,
        closeUnsubscribeModal,
      }}
    >
      {children}
    </MediaContext.Provider>
  )
}

export { MediaContext }
export default MediaProvider
