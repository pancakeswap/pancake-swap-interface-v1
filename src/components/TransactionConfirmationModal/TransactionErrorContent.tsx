import React, { useContext } from 'react'
import { ThemeContext } from 'styled-components'
import { Button, Text } from '@pancakeswap-libs/uikit'
import { AlertTriangle } from 'react-feather'
import { AutoColumn } from '../Column'
import { Wrapper, Section, BottomSection, ContentHeader } from './helpers'

type TransactionErrorContentProps = { message: string; onDismiss: () => void }

const TransactionErrorContent = ({ message, onDismiss }: TransactionErrorContentProps) => {
  const theme = useContext(ThemeContext)
  return (
    <Wrapper>
      <Section>
        <ContentHeader onDismiss={onDismiss}>Error</ContentHeader>
        <AutoColumn style={{ marginTop: 20, padding: '2rem 0' }} gap="24px" justify="center">
          <AlertTriangle color={theme.colors.failure} style={{ strokeWidth: 1.5 }} size={64} />
          <Text fontSize="16px" color="failure" style={{ textAlign: 'center', width: '85%' }}>
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
