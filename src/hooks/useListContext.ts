import { useContext } from 'react'
import { ListContext } from '@/contexts/ListContext'

export const useListContext = () => {
  const context = useContext(ListContext)

  if (!context) {
    throw new Error('useListContext must be used within a ListProvider')
  }

  return context
}
