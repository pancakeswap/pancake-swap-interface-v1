import React from 'react'
import { StyleButton, useWalletModal } from '@pancakeswap-libs/uikit'
import useAuth from 'hooks/useAuth'
import { useTranslation } from 'hooks/useI18n'

const UnlockButton = (props) => {
  const { t } = useTranslation()
  const { login, logout } = useAuth()
  const { onPresentConnectModal } = useWalletModal(login, logout, t('Connect to a wallet'), t('Learn how to connect'))

  return (
    <StyleButton onClick={onPresentConnectModal} {...props}>
      {t('Unlock Wallet')}
    </StyleButton>
  )
}

export default UnlockButton
