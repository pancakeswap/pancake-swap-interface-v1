import { Currency, CurrencyAmount, Pair, Token, Trade } from '@pancakeswap-libs/sdk'
import flatMap from 'lodash.flatmap'
import { useMemo } from 'react'

import { BASES_TO_CHECK_TRADES_AGAINST, CUSTOM_BASES } from '../constants'
import { PairState, usePairs } from '../data/Reserves'
import { wrappedCurrency } from '../utils/wrappedCurrency'

import { useActiveWeb3React } from './index'

function useAllCommonPairs(currencyA?: Currency, currencyB?: Currency): Pair[] {
  const { chainId } = useActiveWeb3React()
  console.log()
  console.log('***** BEGIN ******')
  console.log('useAllCommonPairs currencyA', currencyA)
  console.log('useAllCommonPairs currencyB', currencyB)
  console.log('useAllCommonPairs chainId', chainId)

  // Base tokens for building intermediary trading routes

  console.log('useAllCommonPairs BASES_TO_CHECK_TRADES_AGAINST',BASES_TO_CHECK_TRADES_AGAINST)
  const bases: Token[] = useMemo(() => (chainId ? BASES_TO_CHECK_TRADES_AGAINST[chainId] : []), [chainId])

  console.log('useAllCommonPairs bases', bases)
  // ["WBNB", "DAI", "BUSD", "BTCB", "USDT", "UST", "ETH"]

  // All pairs from base tokens
  const basePairs: [Token, Token][] = useMemo(
    () =>
      flatMap(bases, (base): [Token, Token][] => bases.map((otherBase) => [base, otherBase])).filter(
        ([t0, t1]) => t0.address !== t1.address
      ),
    [bases]
  )
  console.log('useAllCommonPairs basePairs', basePairs, basePairs.length)

  const [tokenA, tokenB] = chainId
    ? [wrappedCurrency(currencyA, chainId), wrappedCurrency(currencyB, chainId)]
    : [undefined, undefined]


    console.log('useAllCommonPairs tokenA', tokenA)
    console.log('useAllCommonPairs tokenB', tokenB)

  const allPairCombinations: [Token, Token][] = useMemo(
    () =>
      tokenA && tokenB
        ? [
          // the direct pair
          [tokenA, tokenB],
          // token A against all bases
          ...bases.map((base): [Token, Token] => [tokenA, base]),
          // token B against all bases
          ...bases.map((base): [Token, Token] => [tokenB, base]),
          // each base against all bases
          ...basePairs,
        ]
          .filter((tokens): tokens is [Token, Token] => Boolean(tokens[0] && tokens[1]))
          .filter(([t0, t1]) => t0.address !== t1.address)
          // This filter will remove all the pairs that are not supported by the CUSTOM_BASES settings
          // This option is currently not used on Pancake swap
          .filter(([t0, t1]) => {
            if (!chainId) return true
            const customBases = CUSTOM_BASES[chainId]
            if (!customBases) return true

            const customBasesA: Token[] | undefined = customBases[t0.address]
            const customBasesB: Token[] | undefined = customBases[t1.address]

            if (!customBasesA && !customBasesB) return true
            if (customBasesA && !customBasesA.find((base) => t1.equals(base))) return false
            if (customBasesB && !customBasesB.find((base) => t0.equals(base))) return false

            return true
          })
        : [],
    [tokenA, tokenB, bases, basePairs, chainId]
  )


  console.log('useAllCommonPairs allPairCombinations', allPairCombinations, allPairCombinations.length)

  const allPairs = usePairs(allPairCombinations)

  console.log('useAllCommonPairs allPairs', allPairs, allPairs.length)

  console.log('useAllCommonPairs cake-lp address', allPairs.filter(m => m[0] === 2 && m[1]).map(m => m[1]?.liquidityToken.address))
  
  console.log('***** END ******')
  console.log()
  // only pass along valid pairs, non-duplicated pairs
  return useMemo(
    () =>
      Object.values(
        allPairs
          // filter out invalid pairs
          .filter((result): result is [PairState.EXISTS, Pair] => Boolean(result[0] === PairState.EXISTS && result[1]))
          // filter out duplicated pairs
          .reduce<{ [pairAddress: string]: Pair }>((memo, [, curr]) => {
            memo[curr.liquidityToken.address] = memo[curr.liquidityToken.address] ?? curr
            return memo
          }, {})
      ),
    [allPairs]
  )
}

/**
 * Returns the best trade for the exact amount of tokens in to the given token out
 */
export function useTradeExactIn(currencyAmountIn?: CurrencyAmount, currencyOut?: Currency): Trade | null {

  console.log('useTradeExactIn', currencyAmountIn, currencyOut)
  const allowedPairs = useAllCommonPairs(currencyAmountIn?.currency, currencyOut)

  if (allowedPairs.length > 0) {
    console.log('useTradeExactIn obj', allowedPairs)
    console.log('useTradeExactIn name', allowedPairs.map(m => [m.token0.name, m.token1.name]))
    console.log('useTradeExactInprice', allowedPairs.map(m => [m.token0Price.toSignificant(), m.token1Price.toSignificant()]))
  } else {
    console.log('useTradeExactIn cannot allow pairs')
  }

  return useMemo(() => {

    // console.log('trades currencyAmountIn', currencyAmountIn)
    // console.log('trades currencyOut', currencyOut)
    // console.log('trades allowedPairs', allowedPairs.length)

    if (currencyAmountIn && currencyOut && allowedPairs.length > 0) {
      console.log('trades useTradeExactIn', useTradeExactIn)
      return (
        Trade.bestTradeExactIn(allowedPairs, currencyAmountIn, currencyOut, { maxHops: 3, maxNumResults: 1 })[0] ?? null
      )
    }
    return null
  }, [allowedPairs, currencyAmountIn, currencyOut])
}

/**
 * Returns the best trade for the token in to the exact amount of token out
 */
export function useTradeExactOut(currencyIn?: Currency, currencyAmountOut?: CurrencyAmount): Trade | null {
  const allowedPairs = useAllCommonPairs(currencyIn, currencyAmountOut?.currency)

  return useMemo(() => {
    if (currencyIn && currencyAmountOut && allowedPairs.length > 0) {
      return (
        Trade.bestTradeExactOut(allowedPairs, currencyIn, currencyAmountOut, { maxHops: 3, maxNumResults: 1 })[0] ??
        null
      )
    }
    return null
  }, [allowedPairs, currencyIn, currencyAmountOut])
}
