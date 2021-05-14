import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Modal, Text, Link, Button, Flex, Checkbox, Box } from '@pancakeswap-libs/uikit'

const defaultOnDismiss = () => null

const StyledLink = styled(Link)`
  width: 100%;
`

const Divider = styled.div`
  margin: 24px 0;
  width: 100%;
  height: 1px;
  background-color: ${({ theme }) => theme.colors.borderColor};
`

const StyledCheckbox = styled(Checkbox)`
  min-width: 24px;
`

const StyledLabel = styled.label`
  cursor: pointer;
`

const StyledButton = styled(Button)`
  color: ${({ theme }) => theme.colors.failure};
`

type UseV2ExchangeModalProps = {
  onDismiss?: () => void
}

const UseV2ExchangeModal = ({ onDismiss = defaultOnDismiss }: UseV2ExchangeModalProps) => {
  const [isAcknowledged, setIsAcknowledged] = useState(false)

  useEffect(() => {
    const preventClickHandler = (e) => {
      e.stopPropagation()
      e.preventDefault()
      return false
    }

    document.querySelectorAll('[role="presentation"]').forEach((el) => {
      el.addEventListener('click', preventClickHandler, true)
    })

    return () => {
      document.querySelectorAll('[role="presentation"]').forEach((el) => {
        el.removeEventListener('click', preventClickHandler, true)
      })
    }
  }, [])

  return (
    <Modal onDismiss={onDismiss} title="Use V2 Exchange" hideCloseButton>
      <Box maxWidth="320px">
        <Text color="failure" mb="24px">
          PancakeSwap V1 is no longer supported.
        </Text>
        <Text mb="24px">Go to the V2 Exchange instead for better prices on most pairs.</Text>
        <StyledLink href="https://exchange.pancakeswap.finance/#/swap" external>
          <Button mt="8px" width="100%">
            Go to V2 Exchange
          </Button>
        </StyledLink>
        <Divider />
        <StyledLabel htmlFor="acknowledgement">
          <Flex alignItems="center" justifyContent="space-between">
            <StyledCheckbox
              id="acknowledgement"
              checked={isAcknowledged}
              onChange={() => setIsAcknowledged(!isAcknowledged)}
              scale="sm"
            />
            <Text ml="16px" color={isAcknowledged ? 'text' : 'textDisabled'}>
              I understand that V1 is no longer supported, and I may experience significant slippage, resulting in lost
              capital.
            </Text>
          </Flex>
        </StyledLabel>
        <StyledButton mt="24px" width="100%" variant="text" disabled={!isAcknowledged} onClick={onDismiss}>
          Continue to V1 Anyway
        </StyledButton>
      </Box>
    </Modal>
  )
}

export default UseV2ExchangeModal
