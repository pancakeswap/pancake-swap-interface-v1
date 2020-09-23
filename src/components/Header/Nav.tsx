import React from 'react'
import styled from 'styled-components'

const Nav: React.FC = () => {
  return (
    <StyledNav>
      <StyledAbsoluteLink href="https://pancakeswap.finance/farms">Farm</StyledAbsoluteLink>
      <StyledAbsoluteLink href="https://pancakeswap.finance/staking">Staking</StyledAbsoluteLink>

      <StyledAbsoluteLink href="https://exchange.pancakeswap.finance" className="active">
        Exchange
      </StyledAbsoluteLink>
      <StyledAbsoluteLink href="https://pancakeswap.finance/voting">Voting</StyledAbsoluteLink>
      <StyledAbsoluteLink href="https://pancakeswap.finance/lottery">Lottery</StyledAbsoluteLink>
    </StyledNav>
  )
}

const StyledNav = styled.nav`
  align-items: center;
  display: flex;
  font-size: 20px;
  line-height: 45px;
  font-weight: 500;
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
