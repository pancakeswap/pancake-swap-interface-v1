import React, { useContext } from 'react'
import { ThemeContext } from 'styled-components'
import { Button } from '@pancakeswap-libs/uikit'
import { CloseIcon } from '../Shared'
import { Text } from 'rebass'
import { RowBetween } from '../Row'
import { AlertTriangle } from 'react-feather'
import { AutoColumn } from '../Column'
import { Wrapper, Section, BottomSection } from './helpers'

type TransactionErrorContentProps = { message: string; onDismiss: () => void }

const TransactionErrorContent = ({ message, onDismiss }: TransactionErrorContentProps) => {
  const theme = useContext(ThemeContext)
  return (
    <Wrapper>
      <Section>
        <RowBetween>
          <Text fontWeight={500} fontSize={20}>
            Error
          </Text>
          <CloseIcon onClick={onDismiss} />
        </RowBetween>
        <AutoColumn style={{ marginTop: 20, padding: '2rem 0' }} gap="24px" justify="center">
          <AlertTriangle color={theme.colors.failure} style={{ strokeWidth: 1.5 }} size={64} />
          <Text
            fontWeight={500}
            fontSize={16}
            color={theme.colors.failure}
            style={{ textAlign: 'center', width: '85%' }}
          >
            {message}
          </Text>
        </AutoColumn>
      </Section>
      <BottomSection gap="12px">
        <Button onClick={onDismiss}>Dismiss</Button>
      </BottomSection>
    </Wrapper>
  )
}

export default TransactionErrorContent
