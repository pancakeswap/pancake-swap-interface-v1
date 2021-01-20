import { Trade } from '@pancakeswap-libs/sdk'
import React, { Fragment, memo, useContext } from 'react'
import { ChevronRight } from 'react-feather'
import { Flex } from '@pancakeswap-libs/uikit'
import { ThemeContext } from 'styled-components'
import { TYPE } from '../Shared'
import CurrencyLogo from '../CurrencyLogo'

const { black: Black } = TYPE

export default memo(function SwapRoute({ trade }: { trade: Trade }) {
  const theme = useContext(ThemeContext)
  return (
    <Flex
      px="1rem"
      py="0.5rem"
      my="0.5rem"
      style={{ border: `1px solid ${theme.colors.tertiary}`, borderRadius: '1rem' }}
      flexWrap="wrap"
      justifyContent="space-evenly"
      alignItems="center"
    >
      {trade.route.path.map((token, i, path) => {
        const isLastItem: boolean = i === path.length - 1
        return (
          // eslint-disable-next-line react/no-array-index-key
          <Fragment key={i}>
            <Flex my="0.5rem" alignItems="center" style={{ flexShrink: 0 }}>
              <CurrencyLogo currency={token} size="1.5rem" />
              <Black fontSize={14} color={theme.colors.text} ml="0.5rem">
                {token.symbol}
              </Black>
            </Flex>
            {isLastItem ? null : <ChevronRight color={theme.colors.textSubtle} />}
          </Fragment>
        )
      })}
    </Flex>
  )
})
