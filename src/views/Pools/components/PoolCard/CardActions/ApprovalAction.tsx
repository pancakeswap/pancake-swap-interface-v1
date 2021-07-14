import React from 'react'
import { StyleButton, AutoRenewIcon, Skeleton } from '@pancakeswap-libs/uikit'
import { useSousApprove } from 'hooks/useApprove'
import { useTranslation } from 'hooks/useI18n'
import { useERC20 } from 'hooks/useContract2'
import { getAddress } from 'utils/addressHelpers'
import { Pool } from 'state/types'

interface ApprovalActionProps {
  pool: Pool
  isLoading?: boolean
}

const ApprovalAction: React.FC<ApprovalActionProps> = ({ pool, isLoading = false }) => {
  const { sousId, stakingToken, earningToken } = pool
  const { t } = useTranslation()
  const stakingTokenContract = useERC20(stakingToken.address ? getAddress(stakingToken.address) : '')
  const { handleApprove, requestedApproval } = useSousApprove(stakingTokenContract, sousId, earningToken.symbol)

  return (
    <>
      {isLoading ? (
        <Skeleton width="100%" height="52px" />
      ) : (
        <StyleButton
          isLoading={requestedApproval}
          endIcon={requestedApproval ? <AutoRenewIcon spin color="currentColor" /> : null}
          disabled={requestedApproval}
          onClick={handleApprove}
          width="100%"
        >
          {t('Enable')}
        </StyleButton>
      )}
    </>
  )
}

export default ApprovalAction
