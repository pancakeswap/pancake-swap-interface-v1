import React, { useMemo } from 'react'
import { stringify } from 'qs'
import { useLocation } from 'react-router'
import { Text } from '@pancakeswap-libs/uikit'
import useParsedQueryString from '../../hooks/useParsedQueryString'
import { DEFAULT_VERSION, Version } from '../../hooks/useToggledVersion'
import { StyledInternalLink } from "../Shared"
import { YellowCard } from '../Card'
import { AutoColumn } from '../Column'

export default function BetterTradeLink({ version }: { version: Version }) {
  const location = useLocation()
  const search = useParsedQueryString()

  const linkDestination = useMemo(() => {
    return {
      ...location,
      search: `?${stringify({
        ...search,
        use: version !== DEFAULT_VERSION ? version : undefined
      })}`
    }
  }, [location, search, version])

  return (
    <YellowCard style={{ marginTop: '12px', padding: '8px 4px' }}>
      <AutoColumn gap="sm" justify="center" style={{ alignItems: 'center', textAlign: 'center' }}>
        <Text style={{ lineHeight: '145.23%' }} fontSize="14px">
          There is a better price for this trade on{' '}
          <StyledInternalLink to={linkDestination}>
            <b>Uniswap {version.toUpperCase()} ↗</b>
          </StyledInternalLink>
        </Text>
      </AutoColumn>
    </YellowCard>
  )
}
