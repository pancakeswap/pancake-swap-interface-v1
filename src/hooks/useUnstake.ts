import { useCallback } from 'react'
import { useWeb3React } from '@web3-react/core'
import { FarmCategory } from 'config/constants/types'
import { useAppDispatch } from 'state'
import { updateUserStakedBalance, updateUserBalance, updateUserPendingReward } from 'state/actions'
import { unstake, sousUnstake, sousEmergencyUnstake } from 'utils/callHelpers'
import { useMasterchef, useSousChef } from './useContract2'

const useUnstake = (pid: number) => {
  let farmCategory
  if (pid > 10000 && pid < 20000) {
    farmCategory = FarmCategory.HDT
    pid -= 10000
  } else if (pid > 20000 && pid < 30000) {
    farmCategory = FarmCategory.BKC
    pid -= 20000
  } else {
    farmCategory = FarmCategory.HD
  }

  const { account } = useWeb3React()
  const masterChefContract = useMasterchef(farmCategory)

  const handleUnstake = useCallback(
    async (amount: string) => {
      const txHash = await unstake(masterChefContract, pid, amount, account)
      console.info(txHash)
    },
    [account, masterChefContract, pid],
  )

  return { onUnstake: handleUnstake }
}

export const useSousUnstake = (sousId, enableEmergencyWithdraw = false) => {
  const dispatch = useAppDispatch()
  const { account } = useWeb3React()
  const masterChefContract = useMasterchef(FarmCategory.HD)
  const hdtChefContract = useMasterchef(FarmCategory.HDT)
  const sousChefContract = useSousChef(sousId)

  const handleUnstake = useCallback(
    async (amount: string, decimals: number) => {
      if (sousId === 0) {
        const txHash = await unstake(masterChefContract, 0, amount, account)
        console.info(txHash)
      } else if (sousId === 1) {
        const txHash = await unstake(hdtChefContract, 0, amount, account)
        console.info(txHash)
      } else if (enableEmergencyWithdraw) {
        const txHash = await sousEmergencyUnstake(sousChefContract, account)
        console.info(txHash)
      } else {
        const txHash = await sousUnstake(sousChefContract, amount, decimals, account)
        console.info(txHash)
      }
      dispatch(updateUserStakedBalance(sousId, account))
      dispatch(updateUserBalance(sousId, account))
      dispatch(updateUserPendingReward(sousId, account))
    },
    [account, dispatch, enableEmergencyWithdraw, masterChefContract, hdtChefContract, sousChefContract, sousId],
  )

  return { onUnstake: handleUnstake }
}

export default useUnstake
