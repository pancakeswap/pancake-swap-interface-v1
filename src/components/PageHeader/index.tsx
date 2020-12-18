import React, { ReactNode } from 'react'
import styled from 'styled-components'
import { Heading, IconButton, Text, useModal } from '@pancakeswap-libs/uikit'
// TODO: use UI Kit
import { Settings } from 'react-feather'
import SettingsModal from './SettingsModal'

interface PageHeaderProps {
  title: ReactNode
  description?: ReactNode
  children?: ReactNode
}

const StyledPageHeader = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.colors.borderColor};
  padding: 24px;
`

const TitleSection = styled.div`
  align-items: center;
  display: flex;
`

const Details = styled.div`
  flex: 1;
`

const PageHeader = ({ title, description, children }: PageHeaderProps) => {
  const [onPresentSettings] = useModal(<SettingsModal />)
  const handleClick = () => onPresentSettings()

  return (
    <StyledPageHeader>
      <TitleSection>
        <Details>
          <Heading mb="8px">{title}</Heading>
          {description && (
            <Text color="textSubtle" fontSize="14px">
              {description}
            </Text>
          )}
        </Details>
        <IconButton variant="text" onClick={handleClick}>
          <Settings />
        </IconButton>
      </TitleSection>
      {children && <Text mt="16px">{children}</Text>}
    </StyledPageHeader>
  )
}

export default PageHeader
