import React from 'react'
import { CardHeader, Heading, Text, Flex } from '@pancakeswap-libs/uikit'
import styled from 'styled-components'
import { useTranslation } from 'hooks/useI18n'
import { Token } from 'config/constants/types'
import useTheme from 'hooks/useTheme'
// 注释
// import TokenPairImage from 'components/TokenPairImage'
// import CakeVaultTokenPairImage from '../CakeVaultCard/CakeVaultTokenPairImage'

const Wrapper = styled(CardHeader)<{ isFinished?: boolean; background?: string }>`
  /* background: ${({ isFinished, background, theme }) =>
    isFinished ? theme.colors.backgroundDisabled : theme.colors.gradients[background]}; */
  background: none;
  border-radius: ${({ theme }) => `${theme.radii.card} ${theme.radii.card} 0 0`};
`

const HeadingStyle = styled(Heading)`
  color: ${({ isDark }) => (isDark ? '#fff' : '#000')};
`

const TokenPairImage = styled.div`
  max-height: 100px;
  max-width: 100px;
  position: relative;
  width: 100%;
  &:after {
    content: '';
    display: block;
    padding-top: 33px;
  }
`
const StyledPrimaryImage = styled.div`
  position: absolute;
  width: 50%;
  inset: 17px auto auto 25px;
  z-index: 50;
  max-height: 32px;
  max-width: 32px;
  background-color: #fff;
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
`
const TokenImage = styled.img`
  border-radius: 50%;
  border: 1px solid rgba(0, 0, 0, 0.25);
`
const StyledSecondaryImage = styled.div`
  position: absolute;
  width: 50%;
  inset: 0px auto auto 0px;
  z-index: 5;
  max-height: 42px;
  max-width: 42px;

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

const StyledCardHeader: React.FC<{
  earningToken: Token
  stakingToken: Token
  isAutoVault?: boolean
  isFinished?: boolean
  isStaking?: boolean
}> = ({ earningToken, stakingToken, isFinished = false, isAutoVault = false, isStaking = false }) => {
  const { t } = useTranslation()
  const { isDark } = useTheme()
  const isCakePool = earningToken.symbol === 'HD' && stakingToken.symbol === 'HD'
  const background = isStaking ? 'bubblegum' : 'cardHeader'

  const getHeadingPrefix = () => {
    if (isAutoVault) {
      // vault
      return t('Auto')
    }
    if (isCakePool) {
      // manual cake
      return t('Manual')
    }
    // all other pools
    return t('Earn')
  }

  const getSubHeading = () => {
    if (isAutoVault) {
      return t('Automatic restaking')
    }
    if (isCakePool) {
      return t('Earn HD, stake HD')
    }
    return t('Stake %symbol%', { symbol: stakingToken.symbol })
  }

  return (
    <Wrapper isFinished={isFinished} background={background}>
      <Flex alignItems="center" justifyContent="left">
        {/* 注释 */}
        {/* {isAutoVault ? (
          <CakeVaultTokenPairImage width={64} height={64} />
        ) : (
          <TokenPairImage primaryToken={earningToken} secondaryToken={stakingToken} width={64} height={64} />
        )} */}
        <TokenPairImage>
          <StyledPrimaryImage>
            <TokenImage src={earningToken.logoURI} />
          </StyledPrimaryImage>
          <StyledSecondaryImage>
            <TokenImage src={stakingToken.logoURI} />
          </StyledSecondaryImage>
        </TokenPairImage>

        <Flex flexDirection="column">
          <HeadingStyle isDark={isDark} color={isFinished ? 'textDisabled' : 'body'} scale="lg">
            {`${getHeadingPrefix()} ${earningToken.symbol}`}
          </HeadingStyle>
          <Text color={isFinished ? 'textDisabled' : 'textSubtle'}>{getSubHeading()}</Text>
        </Flex>
      </Flex>
    </Wrapper>
  )
}

export default StyledCardHeader
