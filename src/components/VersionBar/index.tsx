import React from 'react'
import styled from 'styled-components'
import { Text, ButtonMenu, ButtonMenuItem, Button, HelpIcon, Link } from '@pancakeswap-libs/uikit'

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  background-color: ${({ theme }) => theme.colors.tertiary};
  padding: 16px;
`

const VersionBar = () => {
  return (
    <Wrapper>
      <Text bold mr="16px">
        Version:
      </Text>
      <ButtonMenu variant="primary" scale="sm" activeIndex={1}>
        <ButtonMenuItem as="a" href="https://exchange.pancakeswap.finance/">
          New
        </ButtonMenuItem>
        <ButtonMenuItem as="a" href="https://v1exchange.pancakeswap.finance/#/">
          V1 (old)
        </ButtonMenuItem>
      </ButtonMenu>
      <Button
        variant="subtle"
        as={Link}
        href="https://v1exchange.pancakeswap.finance/#/migrate"
        endIcon={<HelpIcon color="white" />}
        scale="sm"
        ml="16px"
      >
        Help
      </Button>
    </Wrapper>
  )
}

export default VersionBar
