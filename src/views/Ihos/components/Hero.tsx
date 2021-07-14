import React from 'react'
import styled from 'styled-components'
import { Box, Heading, Text } from '@pancakeswap-libs/uikit'
import Container from 'components/layout/Container'
import { useTranslation } from 'hooks/useI18n'

const getGradient = (isDark: boolean) => {
  if (isDark) {
    return 'repeating-linear-gradient(to right, #332453, #332453 40px, #281D44 40px, #281D44 80px)'
  }

  return 'repeating-linear-gradient(to right, #21d4e2, #21d4e2 40px, #53dee9 40px, #53dee9 80px)'
}

const StyledHero = styled.div`
  /* background: ${({ theme }) => getGradient(theme.isDark)}; */
  background-image: linear-gradient(272deg, #11122e 0%, #2c3053 32%, #1e1d47 86%);;
  /* padding-bottom: 40px; */
  /* padding-top: 40px; */
  > div {
    background-image: url(/images/ihos/rockets2.png);
    /* background-size: 463px 212px; */
    background-repeat: no-repeat;
    @media screen and (min-width: 1024px) {
      background-position: right;
    }
    @media screen and (max-width: 1024px) {
      background-position: right 30px;
    }
    padding-bottom: 56px;
    /* padding-bottom: 40px; */
    padding-top: 40px;
  }
`

const CurtainBottom = styled.div`
  background-image: url('/images/curtain-bottom-${({ theme }) => (theme.isDark ? 'dark' : 'light')}.png');
  background-repeat: repeat-x;
  background-size: contain;
  height: 20px;
`

const HeadingStyle = styled(Heading)`
  color: #fff;
  font-family: NotoSansCJKkr;
  font-size: 36px;
  font-weight: bold;
  color: #ffffff;
`
const TextStyle = styled(Text)`
  color: #fff;
  font-family: NotoSansCJKkr;
  font-size: 24px;
  font-weight: 500;
  color: #ffffff;
`

const Hero = () => {
  const { t } = useTranslation()

  return (
    <Box mb="32px">
      <StyledHero>
        <Container>
          <HeadingStyle as="h1" scale="xl" mb="24px">
            {t('IHO (Initial Hubdao Offering)')}
          </HeadingStyle>
          <TextStyle bold fontSize="20px">
            {t('Buy new tokens with a brand new token sale model.')}
          </TextStyle>
        </Container>
      </StyledHero>
      <CurtainBottom />
    </Box>
  )
}

export default Hero
