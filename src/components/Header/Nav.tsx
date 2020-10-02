import React, { useContext } from 'react'
import styled from 'styled-components'
import { LanguageContext } from '../../hooks/LanguageContext'
import { TranslateString } from '../../utils/translateString'

const Nav: React.FC = () => {
  const { selectedLanguage, translatedLanguage } = useContext(LanguageContext)
  console.log(`selected: ${selectedLanguage}`)
  console.log(`translated: ${translatedLanguage}`)

  return (
    <StyledNav>
      <StyledAbsoluteLink href="https://pancakeswap.finance/farms">{TranslateString(2, 'Farm')}</StyledAbsoluteLink>
      <StyledAbsoluteLink href="https://pancakeswap.finance/staking">
        {TranslateString(4, 'Staking')}
      </StyledAbsoluteLink>
      <StyledAbsoluteLink href="https://exchange.pancakeswap.finance" className="active">
        {TranslateString(8, 'Exchange')}
      </StyledAbsoluteLink>
      <StyledAbsoluteLink href="https://voting.pancakeswap.finance">{TranslateString(12, 'Voting')}</StyledAbsoluteLink>
      <StyledAbsoluteLink href="https://pancakeswap.finance/lottery">
        {TranslateString(14, 'Lottery')}
      </StyledAbsoluteLink>
    </StyledNav>
  )
}

const StyledNav = styled.nav`
  align-items: center;
  display: flex;
  font-size: 20px;
  line-height: 45px;
  font-weight: 500;
  @media (max-width: 600px) {
    display: none;
  }
`

const StyledAbsoluteLink = styled.a`
  color: #12aab5;
  padding-left: 10px;
  padding-right: 10px;
  text-decoration: none;
  &:hover {
    color: #452a7a;
  }
  &.active {
    color: #452a7a;
  }
  @media (max-width: 400px) {
    padding-left: 10px;
    padding-right: 10px;
  }
`

export default Nav
