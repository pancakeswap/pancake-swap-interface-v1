import React from 'react'
import { useTranslation } from 'hooks/useI18n'
import { Button } from '@pancakeswap-libs/uikit'
import { useWeb3React } from '@web3-react/core'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Ifo, PoolIds } from 'config/constants/types'
import { WalletIfoData, PublicIfoData } from 'views/Ihos/types'
import UnlockButton from 'components/UnlockButton'
import ContributeButton from './ContributeButton'
import ClaimButton from './ClaimButton'
import { SkeletonCardActions } from './Skeletons'

interface Props {
  poolId: PoolIds
  ifo: Ifo
  publicIfoData: PublicIfoData
  walletIfoData: WalletIfoData
  hasProfile: boolean
  isLoading: boolean
}
const ButtonStyle = styled(Button)`
  align-items: center;
  border: 0;
  border-radius: 16px;
  box-shadow: 0px -1px 0px 0px rgb(14 14 44 / 40%) inset;
  cursor: pointer;
  display: -webkit-inline-box;
  display: -webkit-inline-flex;
  display: -ms-inline-flexbox;
  display: inline-flex;
  font-family: inherit;
  font-size: 16px;
  font-weight: 600;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-letter-spacing: 0.03em;
  -moz-letter-spacing: 0.03em;
  -ms-letter-spacing: 0.03em;
  letter-spacing: 0.03em;
  line-height: 1;
  opacity: 1;
  outline: 0;
  -webkit-transition: background-color 0.2s, opacity 0.2s;
  transition: background-color 0.2s, opacity 0.2s;
  height: 48px;
  padding: 0 24px;
  width: 100%;
  background-image: linear-gradient(to left, #ffe505, #ffc81c 50%);
  color: #010033;
`

const IfoCardActions: React.FC<Props> = ({ poolId, ifo, publicIfoData, walletIfoData, hasProfile, isLoading }) => {
  const { t } = useTranslation()
  const { account } = useWeb3React()
  const userPoolCharacteristics = walletIfoData[poolId]

  if (isLoading) {
    return <SkeletonCardActions />
  }

  if (!account) {
    return <UnlockButton width="100%" />
  }

  if (!hasProfile) {
    return (
      <ButtonStyle as={Link} to="/profile" width="100%">
        {t('Activate your Profile')}
      </ButtonStyle>
    )
  }

  return (
    <>
      {publicIfoData.status === 'live' && (
        <ContributeButton poolId={poolId} ifo={ifo} publicIfoData={publicIfoData} walletIfoData={walletIfoData} />
      )}
      {publicIfoData.status === 'finished' &&
        !userPoolCharacteristics.hasClaimed &&
        (userPoolCharacteristics.offeringAmountInToken.isGreaterThan(0) ||
          userPoolCharacteristics.refundingAmountInLP.isGreaterThan(0)) && (
          <ClaimButton poolId={poolId} ifoVersion={ifo.version} walletIfoData={walletIfoData} />
        )}
    </>
  )
}

export default IfoCardActions
