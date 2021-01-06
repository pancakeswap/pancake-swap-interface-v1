import React, { useMemo } from 'react'
import { CheckmarkCircleIcon, ErrorIcon, Flex, LinkExternal, Modal } from '@pancakeswap-libs/uikit'
import { useActiveWeb3React } from 'hooks'
import { getEtherscanLink } from 'utils'
import { isTransactionRecent, useAllTransactions } from 'state/transactions/hooks'
import { TransactionDetails } from 'state/transactions/reducer'
import Loader from 'components/Loader'

type RecentTransactionsModalProps = {
  onDismiss?: () => void
}

// TODO: Fix UI Kit typings
const defaultOnDismiss = () => null

const newTransactionsFirst = (a: TransactionDetails, b: TransactionDetails) => b.addedTime - a.addedTime

const getRowStatus = (sortedRecentTransaction: TransactionDetails) => {
  const { hash, receipt } = sortedRecentTransaction

  if (!hash) {
    return { icon: <Loader />, color: 'text' }
  }

  if (hash && receipt?.status === 1) {
    return { icon: <CheckmarkCircleIcon color="success" />, color: 'success' }
  }

  return { icon: <ErrorIcon color="failure" />, color: 'failure' }
}

const RecentTransactionsModal = ({ onDismiss = defaultOnDismiss }: RecentTransactionsModalProps) => {
  const { chainId } = useActiveWeb3React()
  const allTransactions = useAllTransactions()

  // Logic taken from Web3Status/index.tsx line 175
  const sortedRecentTransactions = useMemo(() => {
    const txs = Object.values(allTransactions)
    return txs.filter(isTransactionRecent).sort(newTransactionsFirst)
  }, [allTransactions])
  console.log(sortedRecentTransactions)

  return (
    <Modal title="Recent Transactions" onDismiss={onDismiss}>
      {chainId &&
        sortedRecentTransactions.map(sortedRecentTransaction => {
          const { hash, summary } = sortedRecentTransaction
          const { icon, color } = getRowStatus(sortedRecentTransaction)

          return (
            <>
              <Flex key={hash} alignItems="center" justifyContent="space-between" mb="4px">
                <LinkExternal href={getEtherscanLink(chainId, hash, 'transaction')} color={color}>
                  {summary ?? hash}
                </LinkExternal>
                {icon}
              </Flex>
            </>
          )
        })}
    </Modal>
  )
}

export default RecentTransactionsModal
