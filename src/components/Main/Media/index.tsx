import { useState, useContext } from 'react'
import styled from '@emotion/styled'

import { SubscriptionContext } from '@/contexts/SubscriptionContext'
import MediaHeader from './MediaHeader'
import GridView from './GridView'
import ListView from './ListView'

import useFetch from '@/hooks/useFetch'

export type TabType = 'all' | 'subscribed'
export type ViewType = 'grid' | 'list'

export interface PressDataType {
  pid: string
  name: string
  regDate: string
  logoDark: string
  logoLight: string
  isSubscribed: boolean
}

function Media() {
  const { data, loading } = useFetch('/mock/press_by_category.json')
  const [tabType, setTabType] = useState<TabType>('all')
  const [viewType, setViewType] = useState<ViewType>('grid')
  const { subscribedPressMap } = useContext(SubscriptionContext)

  return (
    <Container>
      <MediaHeader
        setViewType={setViewType}
        viewType={viewType}
        setTabType={setTabType}
        tabType={tabType}
        count={subscribedPressMap.size}
      />
      {loading ? (
        <p>Loading...</p>
      ) : viewType === 'grid' ? (
        <GridView pressData={data} tabType={tabType} />
      ) : (
        <ListView pressData={data} tabType={tabType} />
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
