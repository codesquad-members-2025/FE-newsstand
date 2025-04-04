import { useEffect, useState } from 'react'
import styled from '@emotion/styled'

import MediaHeader from './MediaHeader'
import GridView from './GridView'
import ListView from './ListView'

import useFetch from '@/hooks/useFetch'
import { randomizePressData } from './newsTransFormater'
import filterArray from '@/utils/filterArray'

export type ViewType = 'grid' | 'list'
export type TabType = 'allPress' | 'subPress'

export interface PressDataType {
  pid: string
  name: string
  regDate: string
  logoDark: string
  logoLight: string
  isSubscribed: boolean
}

function Media() {
  const { data: pressData, loading } = useFetch('/mock/press_by_category.json')
  const [currentView, setCurrentView] = useState<ViewType>('grid')
  const [currentTab, setCurrentTab] = useState<TabType>('allPress')
  const [randomizedPressList, setRandomizedPressList] = useState<PressDataType[]>([])

  useEffect(() => {
    setRandomizedPressList(randomizePressData(pressData))
  }, [pressData])

  const subScribedPressData = filterArray(randomizedPressList, 'isSubscribed', true)

  return (
    <Container>
      <MediaHeader
        setCurrentView={setCurrentView}
        currentView={currentView}
        setCurrentTab={setCurrentTab}
        currentTab={currentTab}
        count={subScribedPressData.length}
      />
      {loading ? (
        <p>Loading...</p>
      ) : currentView === 'grid' ? (
        <GridView
          pressData={currentTab === 'allPress' ? randomizedPressList : subScribedPressData}
          setPressData={setRandomizedPressList}
        />
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
