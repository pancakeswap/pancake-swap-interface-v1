import React from 'react'
import { Button, useWalletModal } from '@pancakeswap-libs/uikit'
import useAuth from 'hooks/useAuth'
import { useTranslation } from 'hooks/useI18n'
import styled from 'styled-components'

const ButtonStyle = styled(Button)`
  background-image: linear-gradient(to left, #ffe505, #ffc81c 0%);
  color: #010033;
`

const UnlockButton = (props) => {
  const { t } = useTranslation()
  const { login, logout } = useAuth()
  const { onPresentConnectModal } = useWalletModal(login, logout, t("Connect to a wallet"), t("Learn how to connect"))

  return (
    <ButtonStyle onClick={onPresentConnectModal} {...props}>
      {t('Unlock Wallet')}
    </ButtonStyle>
  )
}

export default UnlockButton
