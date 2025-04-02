import { useState } from 'react'
import styled from '@emotion/styled'

import MediaHeader from './MediaHeader'
import GridView from './GridView'
import ListView from './ListView'

import useFetch from '@/hooks/useFetch'
import { randomizePressData } from './newsTransFormater'

export type ViewType = 'grid' | 'list'

function Media() {
  const { data, loading } = useFetch('/mock/press_by_category.json')
  const [currentView, setCurrentView] = useState<ViewType>('grid')

  return (
    <Container>
      <MediaHeader setCurrentView={setCurrentView} currentView={currentView} />
      {loading ? (
        <p>Loading...</p>
      ) : currentView === 'grid' ? (
        <GridView data={randomizePressData(data)} />
      ) : (
        <ListView />
      )}
    </Container>
  )
}

const Container = styled.div`
  width: 930px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  justify-content: space-between;
`

export default Media
