import { Currency, CurrencyAmount, ETHER, JSBI, Token, TokenAmount } from '@pancakeswap/sdk'
import { useMemo } from 'react'
import ERC20_INTERFACE from '../../constants/abis/erc20'
import { useAllTokens } from '../../hooks/Tokens'
import { useActiveWeb3React } from '../../hooks'
import { useMulticallContract } from '../../hooks/useContract'
import { isAddress } from '../../utils'
import { useSingleContractMultipleData, useMultipleContractSingleData } from '../multicall/hooks'

/**
 * Returns a map of the given addresses to their eventually consistent ETH balances.  返回给定地址的映射到最终一致的ETH平衡。
 */
export function useETHBalances(
  uncheckedAddresses?: (string | undefined)[]
): { [address: string]: CurrencyAmount | undefined } {
  // console.log(uncheckedAddresses)// 当前的账户
  // 返回实例化候的web3
  const multicallContract = useMulticallContract()
  // console.log(multicallContract)
  const addresses: string[] = useMemo(
    () =>
      uncheckedAddresses
        ? uncheckedAddresses
            .map(isAddress)
            .filter((a): a is string => a !== false)
            .sort()
        : [],
    [uncheckedAddresses]
  )
  // console.log(addresses)
  const results = useSingleContractMultipleData(
    multicallContract,
    'getEthBalance',
    addresses.map((address) => [address])
  )
  // 返回 HT 的余额
  // console.log(results)
  // 不知道返回的是不是128和256
  // 优化性能
  return useMemo(
    () =>
      // 计算数组元素相加后的总和
      addresses.reduce<{ [address: string]: CurrencyAmount }>((memo, address, i) => {
        // console.log(memo) // {}
        // 得到当前循环的余额
        const value = results?.[i]?.result?.[0]
        // console.log(value)
        // console.log(JSBI.BigInt(value.toString()))// [-395275355, 34131953, sign: false]
        if (value) memo[address] = CurrencyAmount.ether(JSBI.BigInt(value.toString()))
        return memo
      }, {}),
    [addresses, results]
  )
}

/**
 * Returns a map of token addresses to their eventually consistent token balances for a single account.
 */
export function useTokenBalancesWithLoadingIndicator(
  address?: string,
  tokens?: (Token | undefined)[]
): [{ [tokenAddress: string]: TokenAmount | undefined }, boolean] {
  const validatedTokens: Token[] = useMemo(
    () => tokens?.filter((t?: Token): t is Token => isAddress(t?.address) !== false) ?? [],
    [tokens]
  )

  const validatedTokenAddresses = useMemo(() => validatedTokens.map((vt) => vt.address), [validatedTokens])

  const balances = useMultipleContractSingleData(validatedTokenAddresses, ERC20_INTERFACE, 'balanceOf', [address])

  const anyLoading: boolean = useMemo(() => balances.some((callState) => callState.loading), [balances])

  return [
    useMemo(
      () =>
        address && validatedTokens.length > 0
          ? validatedTokens.reduce<{ [tokenAddress: string]: TokenAmount | undefined }>((memo, token, i) => {
              const value = balances?.[i]?.result?.[0]
              const amount = value ? JSBI.BigInt(value.toString()) : undefined
              if (amount) {
                memo[token.address] = new TokenAmount(token, amount)
              }
              return memo
            }, {})
          : {},
      [address, validatedTokens, balances]
    ),
    anyLoading,
  ]
}

export function useTokenBalances(
  address?: string,
  tokens?: (Token | undefined)[]
): { [tokenAddress: string]: TokenAmount | undefined } {
  return useTokenBalancesWithLoadingIndicator(address, tokens)[0]
}

// get the balance for a single token/account combo
export function useTokenBalance(account?: string, token?: Token): TokenAmount | undefined {
  const tokenBalances = useTokenBalances(account, [token])
  if (!token) return undefined
  return tokenBalances[token.address]
}

export function useCurrencyBalances(
  account?: string,
  currencies?: (Currency | undefined)[]
): (CurrencyAmount | undefined)[] {
  // 当前登录的账户
  // console.log(account)
  // console.log(ETHER)
  /* {
    decimals: 18,
    name: 'HT',
    symbol: 'HT',
  } */
  const tokens = useMemo(() => currencies?.filter((currency): currency is Token => currency instanceof Token) ?? [], [
    currencies,
  ])

  const tokenBalances = useTokenBalances(account, tokens)
  // 返回类型为Bool 是否有 HT 的交易，也就是看第一个输入框或者第二个输入框是否有Ht的交易
  const containsETH: boolean = useMemo(() => currencies?.some((currency) => currency === ETHER) ?? false, [currencies])
  // console.log(containsETH)
  // 返回Ht的信息
  const ethBalance = useETHBalances(containsETH ? [account] : [])
  // console.log(ethBalance)
  return useMemo(
    () =>
      currencies?.map((currency) => {
        // 如果账户没有登录则返回 undefined
        if (!account || !currency) return undefined
        // 如果用户选择的不是 HT 则返回信息
        if (currency instanceof Token) return tokenBalances[currency.address]
        // 如果用户选择的 HT
        if (currency === ETHER) return ethBalance[account]
        return undefined
      }) ?? [],
    [account, currencies, ethBalance, tokenBalances]
  )
}

export function useCurrencyBalance(account?: string, currency?: Currency): CurrencyAmount | undefined {
  return useCurrencyBalances(account, [currency])[0]
}

// mimics useAllBalances
export function useAllTokenBalances(): { [tokenAddress: string]: TokenAmount | undefined } {
  const { account } = useActiveWeb3React()
  const allTokens = useAllTokens()
  const allTokensArray = useMemo(() => Object.values(allTokens ?? {}), [allTokens])
  const balances = useTokenBalances(account ?? undefined, allTokensArray)
  return balances ?? {}
}
