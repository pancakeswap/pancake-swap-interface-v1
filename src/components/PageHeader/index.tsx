import React, { ReactNode, useState, useEffect } from 'react'
import styled from 'styled-components'
import { Heading, IconButton, Text, Flex, useModal, TuneIcon, HistoryIcon } from '@pancakeswap-libs/uikit'
import useI18n from 'hooks/useI18n'
import SettingsModal from './SettingsModal'
import RecentTransactionsModal from './RecentTransactionsModal'
import UseV2ExchangeModal from '../UseV2ExchangeModal'

interface PageHeaderProps {
  title: ReactNode
  description?: ReactNode
  children?: ReactNode
}

const StyledPageHeader = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.colors.borderColor};
  padding: 24px;
`

const Details = styled.div`
  flex: 1;
`

const PageHeader = ({ title, description, children }: PageHeaderProps) => {
  const TranslateString = useI18n()
  const [hasSeenModal, setHasSeenModal] = useState(false)
  const [onPresentSettings] = useModal(<SettingsModal translateString={TranslateString} />)
  const [onPresentRecentTransactions] = useModal(<RecentTransactionsModal translateString={TranslateString} />)
  const [onPresentUseV2ExchangeModal] = useModal(<UseV2ExchangeModal />)

  useEffect(() => {
    const showModal = () => {
      onPresentUseV2ExchangeModal()
      setHasSeenModal(true)
    }
    if (!hasSeenModal) {
      showModal()
    }
  }, [onPresentUseV2ExchangeModal, hasSeenModal])

  return (
    <StyledPageHeader>
      <Flex alignItems="center">
        <Details>
          <Heading mb="8px">{title}</Heading>
          {description && (
            <Text color="textSubtle" fontSize="14px">
              {description}
            </Text>
          )}
        </Details>
        <IconButton variant="text" onClick={onPresentSettings} title={TranslateString(1200, 'Settings')}>
          <TuneIcon width="24px" color="currentColor" />
        </IconButton>
        <IconButton
          variant="text"
          onClick={onPresentRecentTransactions}
          title={TranslateString(1202, 'Recent transactions')}
        >
          <HistoryIcon width="24px" color="currentColor" />
        </IconButton>
      </Flex>
      {children && <Text mt="16px">{children}</Text>}
    </StyledPageHeader>
  )
}

export default PageHeader
