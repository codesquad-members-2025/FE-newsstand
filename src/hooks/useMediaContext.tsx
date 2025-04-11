import { useContext } from 'react'
import { MediaContext } from '@/contexts/MediaContext'

export const useMediaContext = () => {
  const context = useContext(MediaContext)

  if (!context) {
    throw new Error('useMediaContext must be used within a MediaProvider')
  }

  return context
}
