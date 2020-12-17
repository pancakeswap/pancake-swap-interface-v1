import { ChainId } from '@pancakeswap-libs/sdk'
import React, { useContext } from 'react'
import { ThemeContext } from 'styled-components'
import { Button } from '@pancakeswap-libs/uikit'
import { ExternalLink, CloseIcon } from '../Shared'
import { Text } from 'rebass'
import { RowBetween } from '../Row'
import { ArrowUpCircle } from 'react-feather'
import { AutoColumn } from '../Column'
import { getEtherscanLink } from '../../utils'
import { Wrapper, Section, ConfirmedIcon } from './helpers'

type TransactionSubmittedContentProps = {
  onDismiss: () => void
  hash: string | undefined
  chainId: ChainId
}

const TransactionSubmittedContent = ({ onDismiss, chainId, hash }: TransactionSubmittedContentProps) => {
  const theme = useContext(ThemeContext)

  return (
    <Wrapper>
      <Section>
        <RowBetween>
          <div />
          <CloseIcon onClick={onDismiss} />
        </RowBetween>
        <ConfirmedIcon>
          <ArrowUpCircle strokeWidth={0.5} size={90} color={theme.colors.primary} />
        </ConfirmedIcon>
        <AutoColumn gap="12px" justify={'center'}>
          <Text fontWeight={500} fontSize={20}>
            Transaction Submitted
          </Text>

          {chainId && hash && (
            <ExternalLink href={getEtherscanLink(chainId, hash, 'transaction')}>
              <Text fontWeight={500} fontSize={14} color={theme.colors.primary}>
                View on bscscan
              </Text>
            </ExternalLink>
          )}
          <Button onClick={onDismiss} mt="20px">
            Close
          </Button>
        </AutoColumn>
      </Section>
    </Wrapper>
  )
}

export default TransactionSubmittedContent
