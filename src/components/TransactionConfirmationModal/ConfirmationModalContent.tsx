import React from 'react'
import { Wrapper, Section, BottomSection, ContentHeader } from './helpers'

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
        <ContentHeader onDismiss={onDismiss}>{title}</ContentHeader>
        {topContent()}
      </Section>
      <BottomSection gap="12px">{bottomContent()}</BottomSection>
    </Wrapper>
  )
}

export default ConfirmationModalContent
