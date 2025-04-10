import { useState, useContext } from 'react'
import styled from '@emotion/styled'

import { MediaContext } from '@/contexts/MediaContext'
import MediaHeader from './MediaHeader'
import GridView from './GridView'
import ListView from './ListView'
import Alert from '@/components/Common/Alert'
import { AlertContext } from '@/contexts/AlertContext'

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
  const [tabType, setTabType] = useState<TabType>('all')
  const [viewType, setViewType] = useState<ViewType>('grid')
  const { data, loading, subscribedPressMap } = useContext(MediaContext)
  const { showAlert } = useContext(AlertContext)

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

      {showAlert && <Alert />}
    </Container>
  )
}

const Container = styled.div`
  position: relative;
  width: 930px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  justify-content: space-between;
`

export default Media
