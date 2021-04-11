import React from 'react'
import { Price } from '@pancakeswap-libs/sdk'
import { SyncAltIcon, Text } from '@pancakeswap-libs/uikit'
import { StyledBalanceMaxMini } from './styleds'
import useI18n from '../../hooks/useI18n'

interface TradePriceProps {
  price?: Price
  showInverted: boolean
  setShowInverted: (showInverted: boolean) => void
}

export default function TradePrice({ price, showInverted, setShowInverted }: TradePriceProps) {
  const TranslateString = useI18n()
  const formattedPrice = showInverted ? price?.toSignificant(6) : price?.invert()?.toSignificant(6)

  const show = Boolean(price?.baseCurrency && price?.quoteCurrency)
  const label = showInverted
    ? `${price?.quoteCurrency?.symbol} ${TranslateString(242, 'per')} ${price?.baseCurrency?.symbol}`
    : `${price?.baseCurrency?.symbol} ${TranslateString(242, 'per')} ${price?.quoteCurrency?.symbol}`

  return (
    <Text fontSize="14px" style={{ justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
      {show ? (
        <>
          {formattedPrice ?? '-'} {label}
          <StyledBalanceMaxMini onClick={() => setShowInverted(!showInverted)}>
            <SyncAltIcon width="20px" color="primary" />
          </StyledBalanceMaxMini>
        </>
      ) : (
        '-'
      )}
    </Text>
  )
}
