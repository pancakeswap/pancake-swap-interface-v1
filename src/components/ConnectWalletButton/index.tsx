import React from 'react'
import { useWeb3React } from '@web3-react/core'
import { Button, ButtonProps, useWalletModal, ConnectorNames } from '@pancakeswap-libs/uikit'
import { connectorsByName } from 'connectors'
import useI18n from 'hooks/useI18n'

const UnlockButton: React.FC<ButtonProps> = (props) => {
  const TranslateString = useI18n()
  const { account, activate, deactivate } = useWeb3React()

  const handleLogin = (connectorId: ConnectorNames) => {
    const connector = connectorsByName[connectorId]
    if (connector) {
      activate(connector)
    }
  }

  const { onPresentConnectModal } = useWalletModal(handleLogin, deactivate, account as string)

  return (
    <Button onClick={onPresentConnectModal} {...props}>
      {TranslateString(292, 'Unlock Wallet')}
    </Button>
  )
}

export default UnlockButton
