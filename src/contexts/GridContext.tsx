import { createContext, useState, useEffect, ReactNode } from 'react'
import { useMediaContext } from '@/hooks/useMediaContext'
import { shuffle } from '@/utils/suffleArray'
import { getGridViewData } from '@/utils/newsTransFormater'

interface PressData {
  pid: string
  name: string
  regDate: string
  logoDark: string
  logoLight: string
  isSubscribed: boolean
}

interface GridContextType {
  gridItemList: PressData[]
  setGridItemList: React.Dispatch<React.SetStateAction<PressData[]>>
}

const GridContext = createContext<GridContextType>({
  gridItemList: [],
  setGridItemList: () => {},
})

const GridProvider = ({ children }: { children: ReactNode }) => {
  const { data, loading } = useMediaContext()
  const [gridItemList, setGridItemList] = useState<PressData[]>([])

  useEffect(() => {
    if (!loading) setGridItemList(shuffle(getGridViewData(data)))
  }, [loading])

  return (
    <GridContext.Provider value={{ gridItemList, setGridItemList }}>
      {children}
    </GridContext.Provider>
  )
}

export { GridContext }
export default GridProvider
