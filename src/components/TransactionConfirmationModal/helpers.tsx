import React, { ReactNode } from 'react'
import styled from 'styled-components'
import { Heading, IconButton, CloseIcon } from '@pancakeswap-libs/uikit'
import { AutoColumn, ColumnCenter } from '../Column'


export const Wrapper = styled.div`
  width: 100%;
  overflow-y: auto;
`
export const Section = styled(AutoColumn)`
  padding: 24px;
`
export const SectionBorder = styled(AutoColumn)`
  padding: 24px;
  border: solid 1px #d8d8d8;
`

export const ConfirmedIcon = styled(ColumnCenter)`
  padding: 40px 0;
`

export const BottomSection = styled(Section)`
  background-color: ${({ theme }) => theme.colors.invertedContrast};
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
`
const ModalCloseButtonStyle = styled.div`
  position: absolute;
  right: -23px;
    top: -27px;
`

/**
 * TODO: Remove this when modal system from the UI Kit is implemented
 */
const StyledContentHeader = styled.div`
  align-items: center;
  display: flex;
  position: relative;
  & > ${Heading} {
    flex: 1;
    @media screen and (min-width: 968px){
      font-size:24px;
    }
  }
`

type ContentHeaderProps = {
  children: ReactNode
  onDismiss: () => void
}

export const ContentHeader = ({ children, onDismiss }: ContentHeaderProps) => (
  <StyledContentHeader>
    <Heading mt="16px" size="lg">{children}</Heading>
    <ModalCloseButtonStyle>
      <IconButton onClick={onDismiss} variant="text">
        <CloseIcon color="primary" />
      </IconButton>
    </ModalCloseButtonStyle>
  </StyledContentHeader>
)
