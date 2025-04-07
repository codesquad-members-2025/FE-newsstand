import { useEffect, useState } from 'react'
import styled from '@emotion/styled'

import MediaHeader from './MediaHeader'
import GridView from './GridView'
import ListView from './ListView'

import useFetch from '@/hooks/useFetch'
import { formatGridViewData } from '@/utils/newsTransFormater'
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
  const [viewType, setViewType] = useState<ViewType>('grid')
  const [tabType, setTabType] = useState<TabType>('allPress')
  const [randomizedPressList, setRandomizedPressList] = useState<PressDataType[]>([])

  useEffect(() => {
    setRandomizedPressList(formatGridViewData(pressData))
  }, [pressData])

  const subScribedPressData = filterArray(randomizedPressList, 'isSubscribed', true)

  return (
    <Container>
      <MediaHeader
        setViewType={setViewType}
        viewType={viewType}
        setTabType={setTabType}
        tabType={tabType}
        count={subScribedPressData.length}
      />
      {loading ? (
        <p>Loading...</p>
      ) : viewType === 'grid' ? (
        <GridView
          pressData={tabType === 'allPress' ? randomizedPressList : subScribedPressData}
          setPressData={setRandomizedPressList}
        />
      ) : (
        <ListView pressData={pressData} tabType={tabType} />
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
