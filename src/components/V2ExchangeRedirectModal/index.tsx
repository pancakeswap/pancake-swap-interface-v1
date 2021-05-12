import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Modal, Text, Link, Button, Flex, Checkbox, Box, Heading } from '@pancakeswap-libs/uikit'

const defaultOnDismiss = () => null

const StyledLink = styled(Link)`
  width: 100%;
`

const Divider = styled.div`
  margin: 24px 0 12px;
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

type V2ExchangeRedirectModalProps = {
  onDismiss?: () => void
}

const V2ExchangeRedirectModal = ({ onDismiss = defaultOnDismiss }: V2ExchangeRedirectModalProps) => {
  const [hasTimerPassed, setHasTimerPassed] = useState(false)
  const [timerSecondsRemaining, setTimerSecondsRemaining] = useState(5)

  useEffect(() => {
    const tick = () => {
      setTimerSecondsRemaining((prevSeconds) => prevSeconds - 1)
    }

    const timerInterval = setInterval(() => tick(), 1000)

    if (timerSecondsRemaining <= 0) {
      setHasTimerPassed(true)
      clearInterval(timerInterval)
    }

    return () => {
      clearInterval(timerInterval)
    }
  }, [timerSecondsRemaining])

  return (
    <Modal onDismiss={onDismiss} title="Redirecting to V2 Exchange" hideCloseButton>
      <Flex flexDirection="column" maxWidth="320px" alignItems="center" justifyContent="center">
        <Text color="failure" mb="16px">
          PancakeSwap V1 is no longer supported.
        </Text>

        <Text textAlign="center" mb="8px">
          You will be automatically redirected to the v2 exchange in:
        </Text>
        <Heading size="lg" textAlign="center">
          {timerSecondsRemaining}s
        </Heading>
        <Divider />
        <StyledLink href="https://exchange.pancakeswap.finance/#/swap" external>
          <Button mt="8px" width="100%">
            Go to V2 Exchange now
          </Button>
        </StyledLink>
      </Flex>
    </Modal>
  )
}

export default V2ExchangeRedirectModal
