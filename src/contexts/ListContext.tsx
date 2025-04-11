import { createContext, useState, useEffect, ReactNode } from 'react'
import { useMediaContext } from '@/hooks/useMediaContext'

interface ListContextType {
  headerIndexAll: number
  setHeaderIndexAll: React.Dispatch<React.SetStateAction<number>>
  headerIndexSubscribed: number
  setHeaderIndexSubscribed: React.Dispatch<React.SetStateAction<number>>
  pageIndex: number
  setPageIndex: React.Dispatch<React.SetStateAction<number>>
}

const ListContext = createContext<ListContextType>({
  headerIndexAll: 0,
  setHeaderIndexAll: () => {},
  headerIndexSubscribed: 0,
  setHeaderIndexSubscribed: () => {},
  pageIndex: 0,
  setPageIndex: () => {},
})

const ListProvider = ({ children }: { children: ReactNode }) => {
  const [headerIndexAll, setHeaderIndexAll] = useState(0)
  const [headerIndexSubscribed, setHeaderIndexSubscribed] = useState(0)
  const [pageIndex, setPageIndex] = useState(0)

  return (
    <ListContext.Provider
      value={{
        headerIndexAll,
        setHeaderIndexAll,
        headerIndexSubscribed,
        setHeaderIndexSubscribed,
        pageIndex,
        setPageIndex,
      }}
    >
      {children}
    </ListContext.Provider>
  )
}

export { ListContext }
export default ListProvider
