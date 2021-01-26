import React from 'react'
import styled from 'styled-components'
import { CheckCircle, Copy } from 'react-feather'
import useCopyClipboard from '../../hooks/useCopyClipboard'

import { LinkStyledButton } from '../Shared'

const CopyIcon = styled(LinkStyledButton)`
  color: ${({ theme }) => theme.colors.textDisabled};
  flex-shrink: 0;
  display: flex;
  text-decoration: none;
  font-size: 0.825rem;
  :hover,
  :active,
  :focus {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.textSubtle};
  }
`
const TransactionStatusText = styled.span`
  margin-left: 0.25rem;
  font-size: 0.825rem;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
`

export default function CopyHelper(props: { toCopy: string; children: React.ReactNode }) {
  const [isCopied, setCopied] = useCopyClipboard()
  const { children, toCopy } = props

  return (
    <CopyIcon onClick={() => setCopied(toCopy)}>
      {isCopied ? (
        <TransactionStatusText>
          <CheckCircle size="16" />
          <TransactionStatusText>Copied</TransactionStatusText>
        </TransactionStatusText>
      ) : (
        <TransactionStatusText>
          <Copy size="16" />
        </TransactionStatusText>
      )}
      {isCopied ? '' : children}
    </CopyIcon>
  )
}
