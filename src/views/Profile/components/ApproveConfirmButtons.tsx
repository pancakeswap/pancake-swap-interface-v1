import React from 'react'
import styled from 'styled-components'
import {
  ChevronRightIcon,
  Button as UIKitButton,
  StyleButton,
  AutoRenewIcon,
  ChevronDownIcon,
  Box,
  Flex,
} from '@pancakeswap-libs/uikit'
import { useTranslation } from 'hooks/useI18n'

const StyleButtonWidth = styled(StyleButton)`
width: 100%;
`

export enum ButtonArrangement {
  ROW = 'row',
  SEQUENTIAL = 'sequential',
}

interface ApproveConfirmButtonsProps {
  isApproveDisabled: boolean
  isApproving: boolean
  isConfirming: boolean
  isConfirmDisabled: boolean
  onApprove: () => void
  onConfirm: () => void
  buttonArrangement?: ButtonArrangement
  confirmLabel?: string
}

const StyledApproveConfirmButtonRow = styled.div`
  align-items: center;
  display: grid;
  grid-template-columns: 1fr;
  justify-content: center;

  ${({ theme }) => theme.mediaQueries.md} {
    grid-template-columns: 1fr 24px 1fr;
  }
`

const Button = styled(UIKitButton)`
  width: 100%;

  ${({ theme }) => theme.mediaQueries.md} {
    min-width: 160px;
  }
`

const iconAttrs = { width: '24px', color: 'textDisabled' }

const ChevronRight = styled(ChevronRightIcon).attrs(iconAttrs)`
  display: none;

  ${({ theme }) => theme.mediaQueries.md} {
    display: block;
  }
`

const ChevronBottom = styled(ChevronDownIcon).attrs(iconAttrs)`
  display: block;

  ${({ theme }) => theme.mediaQueries.md} {
    display: none;
  }
`

const spinnerIcon = <AutoRenewIcon spin color="currentColor" />

const ApproveConfirmButtons: React.FC<ApproveConfirmButtonsProps> = ({
  isApproveDisabled,
  isApproving,
  isConfirming,
  isConfirmDisabled,
  onApprove,
  onConfirm,
  buttonArrangement = ButtonArrangement.ROW,
}) => {
  const { t } = useTranslation()

  const ApproveConfirmRow = () => {
    return (
      <StyledApproveConfirmButtonRow>
        <Box>
          <StyleButtonWidth
            disabled={isApproveDisabled}
            onClick={onApprove}
            endIcon={isApproving ? spinnerIcon : undefined}
            isLoading={isApproving}
          >
            {isApproving ? t('Approving') : t('Approve')}
          </StyleButtonWidth>
        </Box>
        <Flex justifyContent="center">
          <ChevronRight />
          <ChevronBottom />
        </Flex>
        <Box>
          <Button
            onClick={onConfirm}
            disabled={isConfirmDisabled}
            isLoading={isConfirming}
            endIcon={isConfirming ? spinnerIcon : undefined}
          >
            {isConfirming ? t('Confirming') : t('Confirm')}
          </Button>
        </Box>
      </StyledApproveConfirmButtonRow>
    )
  }

  const ApproveConfirmSequential = () => {
    return (
      <>
        {isApproveDisabled ? (
          <Box>
            <Button
              onClick={onConfirm}
              disabled={isConfirmDisabled}
              isLoading={isConfirming}
              endIcon={isConfirming ? spinnerIcon : undefined}
            >
              {isConfirming ? t('Confirming') : t('Confirm')}
            </Button>
          </Box>
        ) : (
          <Box>
            <Button onClick={onApprove} endIcon={isApproving ? spinnerIcon : undefined} isLoading={isApproving}>
              {isApproving ? t('Approving') : t('Approve')}
            </Button>
          </Box>
        )}
      </>
    )
  }

  return buttonArrangement === ButtonArrangement.ROW ? ApproveConfirmRow() : ApproveConfirmSequential()
}

export default ApproveConfirmButtons
