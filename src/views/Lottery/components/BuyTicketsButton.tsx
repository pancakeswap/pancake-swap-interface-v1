import React from 'react'
import { StyleButton, useModal, WaitIcon, ButtonProps } from '@pancakeswap-libs/uikit'
import { useTranslation } from 'hooks/useI18n'
import { useLottery } from 'state/lottery/hooks'
import { LotteryStatus } from 'config/constants/types'
import BuyTicketsModal from './BuyTicketsModal/BuyTicketsModal'

interface BuyTicketsButtonProps extends ButtonProps {
  disabled?: boolean
}

const BuyTicketsButton: React.FC<BuyTicketsButtonProps> = ({ disabled, ...props }) => {
  const { t } = useTranslation()
  const [onPresentBuyTicketsModal] = useModal(<BuyTicketsModal />)
  const {
    currentRound: { status },
  } = useLottery()

  const getBuyButtonText = () => {
    if (status === LotteryStatus.OPEN) {
      return t('Buy Tickets')
    }
    return (
      <>
        <WaitIcon mr="4px" color="textDisabled" /> {t('On sale soon!')}
      </>
    )
  }

  return (
    <StyleButton {...props} disabled={disabled} onClick={onPresentBuyTicketsModal}>
      {getBuyButtonText()}
    </StyleButton>
  )
}

export default BuyTicketsButton
