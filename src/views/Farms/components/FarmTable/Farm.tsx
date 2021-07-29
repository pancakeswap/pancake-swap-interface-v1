import React from 'react'
import styled from 'styled-components'
import { useFarmUser } from 'state/hooks'
import { useTranslation } from 'hooks/useI18n'
import { Text } from '@pancakeswap-libs/uikit'
import { getBalanceNumber } from 'utils/formatBalance'
import { Token } from 'config/constants/types'
// import TokenPairImage from 'components/TokenPairImage'

export interface FarmProps {
  label: string
  pid: number
  token: Token
  quoteToken: Token
}

const Container = styled.div`
  padding-left: 16px;
  display: flex;
  align-items: center;

  ${({ theme }) => theme.mediaQueries.sm} {
    padding-left: 32px;
  }
`

const TokenWrapper = styled.div`
  padding-right: 8px;
  margin-right: 5px;
  width: 24px;

  @media screen and (max-width: 1024px) {
    width: 64px;
    margin-right: 20px;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    width: 68px;
  }
`
const TokenPairImage = styled.div`
  max-height: 64px;
  max-width: 64px;
  position: relative;
  width: 100%;
  &:after {
    content: '';
    display: block;
    padding-top: 60%;
  }
`
const StyledPrimaryImage = styled.div`
  position: absolute;
  width: 40px;
  inset: 0px auto auto 25px;
  z-index: 50;
  max-height: 32px;
  border-radius: 50%;

  /* &:before {
    border-radius: 50%;
    border: 1px solid rgba(0, 0, 0, 0.25);
    content: "";
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: 7;
  } */

  img {
    width: 40px;
    height: 40px;
  }
`
const TokenImage = styled.img`
  border-radius: 50%;
  border: 1px solid rgba(0, 0, 0, 0.25);
  /* width: 32px;
  height: 32px;
  max-width: none; */
`
const StyledSecondaryImage = styled.div`
  position: absolute;
  width: 100%;
  inset: 0px auto auto 0px;
  z-index: 5;
  max-height: 32px;
  max-width: 32px;

  /* &:before {
    border-radius: 50%;
    border: 1px solid rgba(0, 0, 0, 0.25);
    content: "";
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: 7;
  } */
`
const Farm: React.FunctionComponent<FarmProps> = ({ token, quoteToken, label, pid }) => {
  const { stakedBalance } = useFarmUser(pid)
  const { t } = useTranslation()
  const rawStakedBalance = getBalanceNumber(stakedBalance)

  const handleRenderFarming = (): JSX.Element => {
    if (rawStakedBalance) {
      return (
        <Text color="secondary" fontSize="12px" bold textTransform="uppercase">
          {t('Farming')}
        </Text>
      )
    }

    return null
  }

  return (
    <Container>
      <TokenWrapper>
        {/* 注释 */}
        {/* <TokenPairImage variant="inverted" primaryToken={token} secondaryToken={quoteToken} width={40} height={40} /> */}
        <TokenPairImage>
          <StyledPrimaryImage>
            <TokenImage src={token.logoURI} />
          </StyledPrimaryImage>
          <StyledSecondaryImage>
            <TokenImage src={quoteToken.logoURI} />
          </StyledSecondaryImage>
        </TokenPairImage>
      </TokenWrapper>
      <div>
        {handleRenderFarming()}
        <Text bold>{label}</Text>
      </div>
    </Container>
  )
}

export default Farm
