import React from 'react'
import { Text } from '@pancakeswap-libs/uikit'
// import getTimePeriods from 'utils/getTimePeriods'
import { useTranslation } from 'hooks/useI18n'

// const WithdrawalFeeTimer: React.FC<{ secondsRemaining: number }> = ({ secondsRemaining }) => {
const WithdrawalFeeTimer: React.FC<{ secondsRemaining: number }> = () => {
  const { t } = useTranslation()
  // const { days, hours, minutes } = getTimePeriods(secondsRemaining)

  return <Text fontSize="14px">{t('%day%d : %hour%h : %minute%m')}</Text>
}

export default WithdrawalFeeTimer
