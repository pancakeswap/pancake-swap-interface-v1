import React, { useMemo } from 'react'
import { Card, CardHeader, CardBody, Text, Box, Button, Flex, ArrowDownIcon, Link } from '@pancakeswap-libs/uikit'
import { Pair } from '@pancakeswap-libs/sdk'
import { useTokenBalancesWithLoadingIndicator } from 'state/wallet/hooks'
import { toV2LiquidityToken, useTrackedTokenPairs } from 'state/user/hooks'
import { StyledInternalLink } from 'components/Shared'
import { useActiveWeb3React } from 'hooks'
import { usePairs } from 'data/Reserves'
import FullPositionCard from 'components/PositionCard'

const ArrowSeparator = () => (
  <Flex justifyContent="center" my="24px">
    <ArrowDownIcon color="textSubtle" width="24px" />
  </Flex>
)

const SecondCard = () => {
  const { account } = useActiveWeb3React()

  // fetch the user's balances of all tracked V2 LP tokens
  const trackedTokenPairs = useTrackedTokenPairs()
  const tokenPairsWithLiquidityTokens = useMemo(
    () => trackedTokenPairs.map((tokens) => ({ liquidityToken: toV2LiquidityToken(tokens), tokens })),
    [trackedTokenPairs]
  )
  const liquidityTokens = useMemo(() => tokenPairsWithLiquidityTokens.map((tpwlt) => tpwlt.liquidityToken), [
    tokenPairsWithLiquidityTokens,
  ])
  const [v2PairsBalances, fetchingV2PairBalances] = useTokenBalancesWithLoadingIndicator(
    account ?? undefined,
    liquidityTokens
  )

  // fetch the reserves for all V2 pools in which the user has a balance
  const liquidityTokensWithBalances = useMemo(
    () =>
      tokenPairsWithLiquidityTokens.filter(({ liquidityToken }) =>
        v2PairsBalances[liquidityToken.address]?.greaterThan('0')
      ),
    [tokenPairsWithLiquidityTokens, v2PairsBalances]
  )

  const v2Pairs = usePairs(liquidityTokensWithBalances.map(({ tokens }) => tokens))
  const v2IsLoading =
    fetchingV2PairBalances || v2Pairs?.length < liquidityTokensWithBalances.length || v2Pairs?.some((V2Pair) => !V2Pair)

  const allV2PairsWithLiquidity = v2Pairs.map(([, pair]) => pair).filter((v2Pair): v2Pair is Pair => Boolean(v2Pair))

  return (
    <Card>
      <CardHeader>
        <Text bold>Remove Liquidity</Text>
        <Text small color="textSubtle">
          Unstake your old LP tokens from the old liquidity pools
        </Text>
      </CardHeader>
      <CardBody>
        <Text bold>V1 LP Tokens in wallet</Text>
        <Card>
          {v2IsLoading ? (
            <CardBody>Loading</CardBody>
          ) : (
            <CardBody>
              {allV2PairsWithLiquidity?.length > 0 ? (
                <>
                  {allV2PairsWithLiquidity.map((v2Pair, index) => (
                    <Box mb={index < allV2PairsWithLiquidity.length - 1 ? '16px' : 0}>
                      <FullPositionCard key={v2Pair.liquidityToken.address} pair={v2Pair} />
                    </Box>
                  ))}
                </>
              ) : (
                <Text color="textDisabled" textAlign="center">
                  No liquidity found.
                </Text>
              )}
              <Text mt="16px" textAlign="center">
                Don&apos;t see a pool you joined?{' '}
                <StyledInternalLink id="import-pool-link" to="/find">
                  Import it
                </StyledInternalLink>
              </Text>
            </CardBody>
          )}
        </Card>
        <ArrowSeparator />
        <Text bold>Discontinued V2 LP</Text>
        <Card>
          <CardBody>
            <Text textAlign="center" mb="16px">
              If you added liquidity to V2 LPs during the migration attempt on April 23, you need to unstake and remove
              liquidity.
            </Text>
            <Button as={Link} external href="https://hiccup.pancakeswap.finance/#/pool" style={{ width: '100%' }}>
              Remove
            </Button>
          </CardBody>
        </Card>
      </CardBody>
    </Card>
  )
}

export default SecondCard
