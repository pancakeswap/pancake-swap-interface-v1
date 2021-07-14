import React from 'react'
import styled from 'styled-components'
import { ListViewIcon, CardViewIcon, IconButton } from '@pancakeswap-libs/uikit'
import { ViewMode } from '../types'

interface ToggleViewProps {
  viewMode: ViewMode
  onToggle: (mode: ViewMode) => void
}

const Container = styled.div`
  margin-left: -8px;

  ${({ theme }) => theme.mediaQueries.sm} {
    margin-left: 0;
  }
`

const ToggleView: React.FunctionComponent<ToggleViewProps> = ({ viewMode, onToggle }) => {
  const handleToggle = (mode: ViewMode) => {
    if (viewMode !== mode) {
      onToggle(mode)
    }
  }

  return (
    <Container>
      <IconButton variant="text" scale="sm" id="clickFarmCardView" onClick={() => handleToggle(ViewMode.CARD)}>
        <CardViewIcon width="15px" height="15px" color={viewMode === ViewMode.CARD ? '#444444' : '#d8d8d8'} />
      </IconButton>
      <IconButton variant="text" scale="sm" id="clickFarmTableView" onClick={() => handleToggle(ViewMode.TABLE)}>
        <ListViewIcon width="15px" height="15px" color={viewMode === ViewMode.TABLE ? '#444444' : '#d8d8d8'} />
      </IconButton>
    </Container>
  )
}

export default ToggleView
