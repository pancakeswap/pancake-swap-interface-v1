import { useCallback } from 'react'
import { useWeb3React } from '@web3-react/core'
import { FarmCategory } from 'config/constants/types'
import { useAppDispatch } from 'state'
import { updateUserBalance, updateUserPendingReward } from 'state/actions'
import { soushHarvest, soushHarvestBnb, harvest } from 'utils/callHelpers'
import { useMasterchef, useSousChef } from './useContract2'

export const useHarvest = (farmPid: number) => {
  let farmCategory
  if (farmPid > 10000 && farmPid < 20000) {
    farmCategory = FarmCategory.HDT
    farmPid -= 10000
  } else if (farmPid > 20000 && farmPid < 30000) {
    farmCategory = FarmCategory.BKC
    farmPid -= 20000
  } else {
    farmCategory = FarmCategory.HD
  }

  const { account } = useWeb3React()
  const masterChefContract = useMasterchef(farmCategory)

  const handleHarvest = useCallback(async () => {
    const txHash = await harvest(masterChefContract, farmPid, account)
    return txHash
  }, [account, farmPid, masterChefContract])

  return { onReward: handleHarvest }
}

export const useSousHarvest = (sousId, isUsingBnb = false) => {
  const dispatch = useAppDispatch()
  const { account } = useWeb3React()
  const sousChefContract = useSousChef(sousId)
  const masterChefContract = useMasterchef(FarmCategory.HD)
  const hdtChefContract = useMasterchef(FarmCategory.HDT)

  const handleHarvest = useCallback(async () => {
    if (sousId === 0) {
      await harvest(masterChefContract, 0, account)
    } else if (sousId === 1) {
      await harvest(hdtChefContract, 0, account)
    } else if (isUsingBnb) {
      await soushHarvestBnb(sousChefContract, account)
    } else {
      await soushHarvest(sousChefContract, account)
    }
    dispatch(updateUserPendingReward(sousId, account))
    dispatch(updateUserBalance(sousId, account))
  }, [account, dispatch, isUsingBnb, masterChefContract, hdtChefContract, sousChefContract, sousId])

  return { onReward: handleHarvest }
}
