import React, { ReactNode } from 'react'
import useI18n from 'hooks/useI18n'
import styled from 'styled-components'
import { Heading, IconButton, Text, Flex, useModal, TuneIcon, HistoryIcon, Box } from '@pancakeswap-libs/uikit'
import useTheme from 'hooks/useTheme'
import Container from '../layout/Container'
import SettingsModal from './SettingsModal'
import RecentTransactionsModal from './RecentTransactionsModal'

interface PageHeaderProps {
  title?: ReactNode
  description?: ReactNode
  children?: ReactNode
}

/* border-bottom: 1px solid ${({ theme }) => theme.colors.borderColor}; */
const StyledPageHeader = styled.div`
  padding: 24px;
`

const Details = styled.div`
  flex: 1;
`
const HeadingStyle = styled(Heading)`
  color: ${({ color }) => color};
`
const IconButtonStyle = styled(IconButton)`
  color:${({ color }) => color};
`

const PageHeader = ({ title, description, children }: PageHeaderProps) => {
  const { isDark } = useTheme()
  const TranslateString = useI18n()
  const [onPresentSettings] = useModal(<SettingsModal translateString={TranslateString} />)
  const [onPresentRecentTransactions] = useModal(<RecentTransactionsModal translateString={TranslateString} />)

  return (
    <StyledPageHeader>
      <Flex alignItems="center">
        <Details>
          <HeadingStyle color={isDark ? "#ffffff" : "#000000"} mb="8px">{title}</HeadingStyle>
          {description && (
            <Text color="textSubtle" fontSize="14px">
              {description}
            </Text>
          )}
        </Details>
        <IconButtonStyle color={isDark ? "#ffffff" : "#000000"} variant="text" onClick={onPresentSettings} title={TranslateString(1200, 'Settings')}>
          <TuneIcon width="24px" color="currentColor" />
        </IconButtonStyle>
        <IconButtonStyle
          color={isDark ? "#ffffff" : "#000000"}
          variant="text"
          onClick={onPresentRecentTransactions}
          title={TranslateString(1202, 'Recent transactions')}
        >
          <HistoryIcon width="24px" color="currentColor" />
        </IconButtonStyle>
      </Flex>
      {children && <Text mt="16px">{children}</Text>}
    </StyledPageHeader>
  )
}

const Outer = styled(Box) <{ background?: string }>`
  background: ${({ theme, background }) => background || theme.colors.gradients.bubblegum};
`

const Inner = styled(Container)`
  padding-top: 32px;
  padding-bottom: 32px;
`

export const PageHeaderV2: React.FC<{ background?: string }> = ({ background, children, ...props }) => (
  <Outer background={background} {...props}>
    <Inner>{children}</Inner>
  </Outer>
)

export default PageHeader
