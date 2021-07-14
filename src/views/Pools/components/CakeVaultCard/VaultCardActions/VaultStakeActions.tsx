import React from 'react'
import { Flex, StyleButton, useModal, Skeleton } from '@pancakeswap-libs/uikit'
import BigNumber from 'bignumber.js'
import { useTranslation } from 'hooks/useI18n'
import { Pool } from 'state/types'
import NotEnoughTokensModal from '../../PoolCard/Modals/NotEnoughTokensModal'
import VaultStakeModal from '../VaultStakeModal'
import HasSharesActions from './HasSharesActions'

interface VaultStakeActionsProps {
  pool: Pool
  stakingTokenBalance: BigNumber
  accountHasSharesStaked: boolean
  isLoading?: boolean
}

const VaultStakeActions: React.FC<VaultStakeActionsProps> = ({
  pool,
  stakingTokenBalance,
  accountHasSharesStaked,
  isLoading = false,
}) => {
  const { stakingToken } = pool
  const { t } = useTranslation()
  const [onPresentTokenRequired] = useModal(<NotEnoughTokensModal tokenSymbol={stakingToken.symbol} />)
  const [onPresentStake] = useModal(<VaultStakeModal stakingMax={stakingTokenBalance} pool={pool} />)

  const renderStakeAction = () => {
    return accountHasSharesStaked ? (
      <HasSharesActions pool={pool} stakingTokenBalance={stakingTokenBalance} />
    ) : (
      <StyleButton onClick={stakingTokenBalance.gt(0) ? onPresentStake : onPresentTokenRequired}>
        {t('Stake')}
      </StyleButton>
    )
  }

  return <Flex flexDirection="column">{isLoading ? <Skeleton width="100%" height="52px" /> : renderStakeAction()}</Flex>
}

export default VaultStakeActions
