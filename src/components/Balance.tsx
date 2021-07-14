import React, { useEffect, useRef } from 'react'
import CountUp from 'react-countup'
import { Text, TextProps } from '@pancakeswap-libs/uikit'

interface BalanceProps extends TextProps {
  pt?: any
  mt?: any
  lineHeight?: any
  value: number
  decimals?: number
  unit?: string
  isDisabled?: boolean
  prefix?: string
  color?: string
  display?: any
  textAlign?: any
  fontSize?: string
  mb?: string
  mx?: string
  onClick?: (event: React.MouseEvent<HTMLElement>) => void
}

const Balance: React.FC<BalanceProps> = ({
  value,
  color = 'text',
  decimals = 3,
  isDisabled = false,
  unit,
  prefix,
  onClick,
  ...props
}) => {
  const previousValue = useRef(0)

  useEffect(() => {
    previousValue.current = value
  }, [value])

  return (
    <Text color={isDisabled ? 'textDisabled' : color} onClick={onClick} {...props}>
      {prefix && <span>{prefix}</span>}
      <CountUp start={previousValue.current} end={value} decimals={decimals} duration={1} separator="," />
      {unit && <span>{unit}</span>}
    </Text>
  )
}

export default Balance
