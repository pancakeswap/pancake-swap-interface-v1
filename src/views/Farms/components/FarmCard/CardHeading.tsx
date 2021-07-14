import React from 'react'
import styled from 'styled-components'
import { Tag, Flex, Heading } from '@pancakeswap-libs/uikit'
import { CommunityTag, CoreTag } from 'components/Tags'
import { Token } from 'config/constants/types'
// import TokenPairImage from 'components/TokenPairImage'
// import { getAddress } from 'utils/addressHelpers'
// import tokens from 'config/constants/tokens'

export interface ExpandableSectionProps {
  lpLabel?: string
  multiplier?: string
  isCommunityFarm?: boolean
  token: Token
  quoteToken: Token
}

const Wrapper = styled(Flex)`
  svg {
    margin-right: 4px;
  }
`

const MultiplierTag = styled(Tag)`
  margin-left: 4px;
  color: #fff;
  background-color: #000;
  border-radius: 9px;
  padding: 0 12px;
`

const TokenPairImage = styled.div`
  max-height: 64px;
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
  inset: 0px auto auto 25px;
  z-index: 50;
  max-height: 32px;
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
  img {
    width: 45px;
    height: 45px;
  }
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
const CardHeading: React.FC<ExpandableSectionProps> = ({ lpLabel, multiplier, isCommunityFarm, token, quoteToken }) => {
  // console.log(token.logoURI)
  // console.log(quoteToken.logoURI)
  // console.log(token.logoURI)
  // console.log(quoteToken.logoURI)
  return (
    <>
      <Wrapper justifyContent="left" alignItems="center" mb="22px">
        {/* variant="inverted" primaryToken={token} secondaryToken={quoteToken} width={64} height={64}  */}
        <TokenPairImage>
          <StyledPrimaryImage>
            <TokenImage src={token.logoURI} />
          </StyledPrimaryImage>
          <StyledSecondaryImage>
            <TokenImage src={quoteToken.logoURI} />
          </StyledSecondaryImage>
        </TokenPairImage>
        <Flex flexDirection="column" alignItems="flex-end">
          <Heading mb="4px">{lpLabel.split(' ')[0]}</Heading>
        </Flex>
      </Wrapper>

      <Flex justifyContent="left" mb="42px">
        {isCommunityFarm ? <CommunityTag /> : <CoreTag />}
        <MultiplierTag variant="secondary">{multiplier}</MultiplierTag>
      </Flex>
    </>
  )
}

export default CardHeading
