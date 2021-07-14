import React from 'react'
import { Text } from '@pancakeswap-libs/uikit'
import getTimePeriods from 'utils/getTimePeriods'
import { useTranslation } from 'hooks/useI18n'

const WithdrawalFeeTimer: React.FC<{ secondsRemaining: number }> = ({ secondsRemaining }) => {
  const { t } = useTranslation()
  const { days, hours, minutes } = getTimePeriods(secondsRemaining)

  return (
    <Text fontSize="14px">
      {t('%day%d', { day: days })} :{t('%hour%h', { hour: hours })} :{t('%minute%m', { minute: minutes })}
    </Text>
  )
}

export default WithdrawalFeeTimer
