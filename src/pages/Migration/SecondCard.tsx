import React, { useMemo } from 'react'
import { Card, CardHeader, CardBody, Text, Box, Button, Flex, ArrowDownIcon, Link } from '@pancakeswap-libs/uikit'
import { Pair } from '@pancakeswap/sdk'
import { useTokenBalancesWithLoadingIndicator } from 'state/wallet/hooks'
import { toV2LiquidityToken, useTrackedTokenPairs } from 'state/user/hooks'
import { StyledInternalLink } from 'components/Shared'
import { useActiveWeb3React } from 'hooks'
import useI18n from 'hooks/useI18n'
import { usePairs } from 'data/Reserves'
import FullPositionCard from 'components/PositionCard'

const ArrowSeparator = () => (
  <Flex justifyContent="center" my="24px">
    <ArrowDownIcon color="textSubtle" width="24px" />
  </Flex>
)

const SecondCard = () => {
  const { account } = useActiveWeb3React()
  const TranslateString = useI18n()

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
        <Text bold>{TranslateString(1, "Remove Liquidity")}</Text>
        <Text small color="textSubtle">
          {TranslateString(1, "Unstake your old LP tokens from the old liquidity pools")}
        </Text>
      </CardHeader>
      <CardBody>
        <Text bold>{TranslateString(1, "V1 LP Tokens in wallet")}</Text>
        <Card>
          {v2IsLoading ? (
            <CardBody>{TranslateString(1, "Loading")}</CardBody>
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
                  {TranslateString(1, "No liquidity found.")}
                </Text>
              )}
              <Text mt="16px" textAlign="center">
                {TranslateString(1, "Dont see a pool you joined?")}{' '}
                <StyledInternalLink id="import-pool-link" to="/find">
                  {TranslateString(1, "Import it.")}
                </StyledInternalLink>
              </Text>
            </CardBody>
          )}
        </Card>
        <ArrowSeparator />
        <Text bold>{TranslateString(1, "Discontinued V2 LP")}</Text>
        <Card>
          <CardBody>
            <Text textAlign="center" mb="16px">
              {TranslateString(1, "If you added liquidity to V2 LPs during the migration attempt on April 23, you need to unstake and remove liquidity.")}
            </Text>
            <Button as={Link} external href="https://hiccup.hubdao.io/#/pool" style={{ width: '100%' }}>
              {TranslateString(1, "Remove")}
            </Button>
          </CardBody>
        </Card>
      </CardBody>
    </Card>
  )
}

export default SecondCard
