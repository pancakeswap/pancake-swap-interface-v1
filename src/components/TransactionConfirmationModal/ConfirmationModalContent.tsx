import React from 'react'
import styled from 'styled-components'
import { Wrapper, SectionBorder, BottomSection, ContentHeader } from './helpers'

type ConfirmationModalContentProps = {
  title: string
  onDismiss: () => void
  topContent: () => React.ReactNode
  bottomContent: () => React.ReactNode
}

const PaddingSection = styled(BottomSection)`
  padding: 24px;
`

const ConfirmationModalContent = ({ title, bottomContent, onDismiss, topContent }: ConfirmationModalContentProps) => {
  return (
    <Wrapper>
      <SectionBorder>
        <ContentHeader onDismiss={onDismiss}>{title}</ContentHeader>
        {topContent()}
      </SectionBorder>
      <PaddingSection gap="12px">{bottomContent()}</PaddingSection>
    </Wrapper>
  )
}

export default ConfirmationModalContent
