import React from 'react'
import { Link, RouteComponentProps, withRouter } from 'react-router-dom'
import { Token, TokenAmount, WETH } from '@pancakeswap-libs/sdk'
import { Button, Text } from '@pancakeswap-libs/uikit'
import { AutoColumn } from '../Column'
import { RowBetween, RowFixed } from '../Row'
import { FixedHeightRow, HoverCard } from './index'
import DoubleCurrencyLogo from '../DoubleLogo'
import { useActiveWeb3React } from '../../hooks'

interface PositionCardProps extends RouteComponentProps<any> {
  token: Token
  V1LiquidityBalance: TokenAmount
}

function V1PositionCard({ token, V1LiquidityBalance }: PositionCardProps) {
  const { chainId } = useActiveWeb3React()

  return (
    <HoverCard>
      <AutoColumn gap="12px">
        <FixedHeightRow>
          <RowFixed>
            <DoubleCurrencyLogo currency0={token} margin size={20} />
            <Text fontSize="20px" style={{ marginLeft: '' }}>
              {`${chainId && token.equals(WETH[chainId]) ? 'WETH' : token.symbol}/ETH`}
            </Text>
            <Text
              fontSize="12px"
              ml="0.5rem"
              px="0.75rem"
              py="0.25rem"
              style={{ borderRadius: '1rem' }}
              color="black"
            >
              V1
            </Text>
          </RowFixed>
        </FixedHeightRow>

        <AutoColumn gap="8px">
          <RowBetween marginTop="10px">
            <Button style={{ width: '68%' }} as={Link} to={`/migrate/v1/${V1LiquidityBalance.token.address}`}>
              Migrate
            </Button>

            <Button
              variant="secondary"
              style={{ width: '28%' }}
              as={Link}
              to={`/remove/v1/${V1LiquidityBalance.token.address}`}
            >
              Remove
            </Button>
          </RowBetween>
        </AutoColumn>
      </AutoColumn>
    </HoverCard>
  )
}

export default withRouter(V1PositionCard)
