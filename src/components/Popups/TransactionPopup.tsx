import React, { useContext } from 'react'
import { AlertCircle, CheckCircle } from 'react-feather'
import styled, { ThemeContext } from 'styled-components'
import { useActiveWeb3React } from '../../hooks'
import { TYPE, ExternalLink } from '../Shared'
import { getBscScanLink } from '../../utils'
import { AutoColumn } from '../Column'
import { AutoRow } from '../Row'

const { body: Body } = TYPE

const RowNoFlex = styled(AutoRow)`
  flex-wrap: nowrap;
`

export default function TransactionPopup({
  hash,
  success,
  summary,
}: {
  hash: string
  success?: boolean
  summary?: string
}) {
  const { chainId } = useActiveWeb3React()

  const theme = useContext(ThemeContext)

  return (
    <RowNoFlex>
      <div style={{ paddingRight: 16 }}>
        {success ? (
          <CheckCircle color={theme.colors.success} size={24} />
        ) : (
          <AlertCircle color={theme.colors.failure} size={24} />
        )}
      </div>
      <AutoColumn gap="8px">
        <Body fontWeight={500}>{summary ?? `Hash: ${hash.slice(0, 8)}...${hash.slice(58, 65)}`}</Body>
        {chainId && <ExternalLink href={getBscScanLink(chainId, hash, 'transaction')}>View on BscScan</ExternalLink>}
      </AutoColumn>
    </RowNoFlex>
  )
}
