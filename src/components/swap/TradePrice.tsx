import React from 'react'
import { Price } from '@pancakeswap-libs/sdk'
import { SyncAltIcon, Text } from '@pancakeswap-libs/uikit'
import { StyledBalanceMaxMini } from './styleds'

interface TradePriceProps {
  price?: Price
  showInverted: boolean
  setShowInverted: (showInverted: boolean) => void
}

export default function TradePrice({ price, showInverted, setShowInverted }: TradePriceProps) {
  const formattedPrice = showInverted ? price?.toSignificant(6) : price?.invert()?.toSignificant(6)

  const show = Boolean(price?.baseCurrency && price?.quoteCurrency)
  const label = showInverted
    ? `${price?.quoteCurrency?.symbol} per ${price?.baseCurrency?.symbol}`
    : `${price?.baseCurrency?.symbol} per ${price?.quoteCurrency?.symbol}`

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
