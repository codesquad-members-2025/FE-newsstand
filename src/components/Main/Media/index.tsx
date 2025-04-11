import { useState, useContext } from 'react'
import styled from '@emotion/styled'

import { useMediaContext } from '@/hooks/useMediaContext'
import MediaHeader from './MediaHeader'
import GridView from './GridView'
import ListView from './ListView'
import Alert from '@/components/Common/Alert'
import { AlertContext } from '@/contexts/AlertContext'
import GridProvider from '@/contexts/GridContext'

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
  const { data, loading, subscribedPressMap, tabType, setTabType, viewType, setViewType } =
    useMediaContext()
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
        <GridProvider>
          <GridView pressData={data} tabType={tabType} />
        </GridProvider>
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
