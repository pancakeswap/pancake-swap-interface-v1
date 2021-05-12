import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Modal, Text, Link, Button, Flex, Heading } from '@pancakeswap-libs/uikit'

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

type V2ExchangeRedirectModalProps = {
  onDismiss?: () => void
  handleCloseModal: () => void
}

const V2ExchangeRedirectModal = ({ onDismiss = defaultOnDismiss, handleCloseModal }: V2ExchangeRedirectModalProps) => {
  const [timerSecondsRemaining, setTimerSecondsRemaining] = useState(5)

  useEffect(() => {
    const tick = () => {
      setTimerSecondsRemaining((prevSeconds) => prevSeconds - 1)
    }

    const timerInterval = setInterval(() => tick(), 1000)

    const preventClickHandler = (e) => {
      e.stopPropagation()
      e.preventDefault()
      return false
    }

    document.querySelectorAll('[role="presentation"]').forEach((el) => {
      el.addEventListener('click', preventClickHandler, true)
    })

    if (timerSecondsRemaining <= 0) {
      clearInterval(timerInterval)
    }

    return () => {
      document.querySelectorAll('[role="presentation"]').forEach((el) => {
        el.removeEventListener('click', preventClickHandler, true)
      })
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
        <Button
          mt="12px"
          width="100%"
          variant="text"
          onClick={() => {
            onDismiss()
            handleCloseModal()
          }}
        >
          Close
        </Button>
      </Flex>
    </Modal>
  )
}

export default V2ExchangeRedirectModal
