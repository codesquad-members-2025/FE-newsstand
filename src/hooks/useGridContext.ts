import { useContext } from 'react'
import { GridContext } from '@/contexts/GridContext'

export const useGridContext = () => {
  const context = useContext(GridContext)

  if (!context) {
    throw new Error('useGridContext must be used within a GridProvider')
  }

  return context
}
