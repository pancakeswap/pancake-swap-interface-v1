import React from 'react'
import { CloseIcon } from '../Shared'
import { Text } from 'rebass'
import { RowBetween } from '../Row'
import { Wrapper, Section, BottomSection } from './helpers'

type ConfirmationModalContentProps = {
  title: string
  onDismiss: () => void
  topContent: () => React.ReactNode
  bottomContent: () => React.ReactNode
}

const ConfirmationModalContent = ({ title, bottomContent, onDismiss, topContent }: ConfirmationModalContentProps) => {
  return (
    <Wrapper>
      <Section>
        <RowBetween>
          <Text fontWeight={500} fontSize={20}>
            {title}
          </Text>
          <CloseIcon onClick={onDismiss} />
        </RowBetween>
        {topContent()}
      </Section>
      <BottomSection gap="12px">{bottomContent()}</BottomSection>
    </Wrapper>
  )
}

export default ConfirmationModalContent
