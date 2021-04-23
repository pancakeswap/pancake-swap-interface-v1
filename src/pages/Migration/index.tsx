import React from 'react'
import styled from 'styled-components'
import { Heading, Card, CardHeader, CardBody, Text, Button, Link, Flex, ArrowDownIcon } from '@pancakeswap-libs/uikit'
import Container from 'components/Container'
import FirstCard from './FirstCard'
import SecondCard from './SecondCard'
import FAQ from './FAQ'

const Wrapper = styled.div`
  max-width: 436px;
  width: 100%;
  z-index: 5;
`

const Header = styled.div`
  background: ${({ theme }) => theme.colors.gradients.bubblegum};
  width: 100%;
  padding: 32px;
`

const ArrowSeparator = () => (
  <Flex justifyContent="center" my="24px">
    <ArrowDownIcon color="textSubtle" width="24px" />
  </Flex>
)

const Migration = () => {
  return (
    <>
      <Header>
        <Heading as="h1" size="xxl" color="secondary" mb="24px">
          LP Token Migration
        </Heading>
        <Text bold fontSize="24px">
          PancakeSwap is being upgraded! <br />
          Migrate your LP tokens to continue earning.
        </Text>
      </Header>
      <Container>
        <Wrapper>
          <FirstCard />
          <ArrowSeparator />
          <SecondCard />
          <ArrowSeparator />
          <Card mb="32px">
            <CardHeader>
              <Text bold>Add Liquidity to new Liquidity Pools</Text>
              <Text small color="textSubtle">
                Stake your tokens in the updated Liquidity Pools
              </Text>
            </CardHeader>
            <CardBody>
              <Text mb="24px">Any new liquidity you add will use the updated system by default. Simple!</Text>
              <Button as={Link} external href="https://exchange.pancakeswap.finance/#/pool" style={{ width: '100%' }}>
                Add liquidity
              </Button>
            </CardBody>
          </Card>
          <ArrowSeparator />
          <Card>
            <CardHeader>
              <Text bold>Stake in New Farms</Text>
              <Text small color="textSubtle">
                Stake your updated LP tokens in PancakeSwap farms
              </Text>
            </CardHeader>
            <CardBody>
              <Text mb="24px">
                If you are able to stake in a farm with your new LP tokens, that means it’s the updated type. Stake as
                usual and you’re done!
              </Text>
              <Button as={Link} external href="https://pancakeswap.finance/farms" style={{ width: '100%' }}>
                Go to farms
              </Button>
            </CardBody>
          </Card>
        </Wrapper>
      </Container>
      <FAQ />
    </>
  )
}

export default Migration
