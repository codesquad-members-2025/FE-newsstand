import { createContext, useState, ReactNode } from 'react'
import useFetch from '@/hooks/useFetch'

type TabType = 'all' | 'subscribed'
type ViewType = 'grid' | 'list'

interface MediaContextType {
  data: any
  loading: boolean

  tabType: TabType
  setTabType: React.Dispatch<React.SetStateAction<TabType>>
  viewType: ViewType
  setViewType: React.Dispatch<React.SetStateAction<ViewType>>

  subscribedPressMap: Map<string, boolean>
  setSubscribedPressMap: React.Dispatch<React.SetStateAction<Map<string, boolean>>>
  handlePressSubscription: (pressId: string) => void
}

const MediaContext = createContext<MediaContextType>({
  data: {},
  loading: true,

  tabType: 'all',
  setTabType: () => {},
  viewType: 'grid',
  setViewType: () => {},

  subscribedPressMap: new Map(),
  setSubscribedPressMap: () => {},
  handlePressSubscription: () => {},
})

interface MediaProviderProps {
  children: ReactNode
}

function MediaProvider({ children }: MediaProviderProps) {
  const { data, loading } = useFetch('/mock/press_by_category.json')

  const [tabType, setTabType] = useState<TabType>('all')
  const [viewType, setViewType] = useState<ViewType>('grid')

  const [subscribedPressMap, setSubscribedPressMap] = useState<Map<string, boolean>>(new Map())

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

  return (
    <MediaContext.Provider
      value={{
        data,
        loading,
        tabType,
        setTabType,
        viewType,
        setViewType,
        subscribedPressMap,
        setSubscribedPressMap,
        handlePressSubscription,
      }}
    >
      {children}
    </MediaContext.Provider>
  )
}

export { MediaContext }
export default MediaProvider
