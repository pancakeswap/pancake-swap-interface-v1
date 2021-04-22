import React, { useState } from 'react'
import styled from 'styled-components'
import {
  Card,
  CardHeader,
  CardBody,
  Text,
  Button,
  Link,
  Flex,
  ExpandableLabel,
  ArrowDownIcon,
  ErrorIcon,
  OpenNewIcon,
} from '@pancakeswap-libs/uikit'

const otherProjects = [
  {
    label: 'ACryptoS',
    href: 'https://app.acryptos.com/',
  },
  {
    label: 'Autofarm',
    href: 'https://autofarm.network/',
  },
  {
    label: 'Alpha Homora',
    href: 'https://homora-bsc.alphafinance.io/',
  },
  {
    label: 'Alpaca Finance',
    href: 'https://app.alpacafinance.org/',
  },
  {
    label: 'Beefy',
    href: 'https://app.beefy.finance/',
  },
  {
    label: 'bEARN',
    href: 'https://bearn.fi/',
  },
  {
    label: 'Cream Finance',
    href: 'https://app.cream.finance/',
  },
  {
    label: 'Harvest',
    href: 'https://harvest.finance/',
  },
  {
    label: 'JetFuel',
    href: 'https://jetfuel.finance/vaults',
  },
  {
    label: 'PancakeBunny',
    href: 'https://pancakebunny.finance/',
  },
  {
    label: 'ValueDeFi',
    href: 'https://bsc.valuedefi.io/#/',
  },
]

const FoldableContent = styled(CardBody)<{ isVisible: boolean }>`
  display: ${({ isVisible }) => (isVisible ? 'block' : 'none')};
`

const FirstCard = () => {
  const [isVisible, setIsVisible] = useState(false)

  return (
    <Card>
      <CardHeader>
        <Text bold>Move LP tokens to wallet</Text>
        <Text small color="textSubtle">
          You need to unstake your legacy LP tokens from farms and other places
        </Text>
      </CardHeader>
      <CardBody>
        <Text bold>Unstake LP tokens from old Farms</Text>
        <Card>
          <CardBody>
            <Button as={Link} external href="https://pancakeswap.finance/farms/history" style={{ width: '100%' }}>
              Go to Farms
            </Button>
          </CardBody>
        </Card>
        <Flex mt="24px">
          <ErrorIcon color="warning" mr="8px" />
          <Text>You DON’T need to unstake from Syrup Pools.</Text>
        </Flex>
        <Flex justifyContent="center" my="24px">
          <ArrowDownIcon color="textSubtle" />
        </Flex>
        <Text bold>Unstake from other projects</Text>
        <Card>
          <Flex justifyContent="space-between" alignItems="center" p="24px">
            <Text bold>Suggested projects</Text>
            <ExpandableLabel expanded={isVisible} onClick={() => setIsVisible((prev) => !prev)}>
              {isVisible ? 'Hide' : 'Details'}
            </ExpandableLabel>
          </Flex>
          <FoldableContent isVisible={isVisible}>
            <Text mb="16px">
              Unstake any PancakeSwap LP Tokens that you’ve staked in yield aggregators or other projects. Here are some
              projects you might already be using:
            </Text>
            <ul>
              {otherProjects.map((project) => (
                <li key={project.href}>
                  <Link external href={project.href}>
                    {project.label}
                  </Link>
                </li>
              ))}
            </ul>
            <Text my="16px">You can also easily check the location of your LP tokens via Yieldwatch:</Text>
            <Button
              endIcon={<OpenNewIcon color="white" />}
              as={Link}
              external
              href="https://www.yieldwatch.net/"
              style={{ width: '100%' }}
            >
              Locate other LP
            </Button>
          </FoldableContent>
        </Card>
      </CardBody>
    </Card>
  )
}

export default FirstCard
