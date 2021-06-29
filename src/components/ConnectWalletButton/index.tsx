import React from 'react'
import { Button, ButtonProps, useWalletModal } from '@pancakeswap-libs/uikit'
import useI18n from 'hooks/useI18n'
import useAuth from 'hooks/useAuth'
import styled from "styled-components"

const ButtonStyle = styled(Button)`
  border-radius: 8px;
`

const UnlockButton: React.FC<ButtonProps> = (props) => {
  const TranslateString = useI18n()
  const { login, logout } = useAuth()
  const { onPresentConnectModal } = useWalletModal(login, logout, TranslateString(1, "Connect to a wallet"), TranslateString(1, "Learn how to connect"))

  return (
    <ButtonStyle className="button" onClick={onPresentConnectModal} {...props}>
      {TranslateString(292, 'Unlock Wallet')}
    </ButtonStyle>
  )
}

export default UnlockButton
