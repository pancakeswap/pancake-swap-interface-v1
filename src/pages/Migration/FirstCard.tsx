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
import useI18n from 'hooks/useI18n'

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

const FoldableContent = styled(CardBody) <{ isVisible: boolean }>`
  display: ${({ isVisible }) => (isVisible ? 'block' : 'none')};
`

const FirstCard = () => {
  const [isVisible, setIsVisible] = useState(false)
  const TranslateString = useI18n()

  return (
    <Card>
      <CardHeader>
        <Text bold>{TranslateString(1, "Move LP tokens to wallet")}</Text>
        <Text small color="textSubtle">
          {TranslateString(1, "Unstake your old LP tokens from farms and other projects.")}
        </Text>
      </CardHeader>
      <CardBody>
        <Text bold>{TranslateString(1, "Unstake LP tokens from old Farms")}</Text>
        <Card>
          <CardBody>
            <Text mb="16px">
              {TranslateString(1, "All farms will gradually switch to new farms, one-by-one. You can wait until farms switch over, or you can unstake in advance.")}

            </Text>
            <Button as={Link} external href="https://hubdao.io/farms/history" style={{ width: '100%' }}>
              {TranslateString(1, "Go to Farms")}
            </Button>
          </CardBody>
        </Card>
        <Flex mt="24px">
          <ErrorIcon color="warning" mr="8px" />
          <Text>{TranslateString(1, "You DON’T need to unstake from Syrup Pools.")}</Text>
        </Flex>
        <Flex justifyContent="center" my="24px">
          <ArrowDownIcon color="textSubtle" />
        </Flex>
        <Text bold>{TranslateString(1, "Unstake from other projects")}</Text>
        <Card>
          <Flex justifyContent="space-between" alignItems="center" p="24px">
            <Text bold>{TranslateString(1, "Suggested projects")}</Text>
            <ExpandableLabel expanded={isVisible} onClick={() => setIsVisible((prev) => !prev)}>
              {isVisible ? 'Hide' : 'Details'}
            </ExpandableLabel>
          </Flex>
          <FoldableContent isVisible={isVisible}>
            <Text mb="16px">
              {TranslateString(1, "You may need to unstake any PancakeSwap LP Tokens that you’ve staked in yield aggregators or other projects. Here are some projects you might be using:")}
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
            <Text my="16px">
              <strong>{TranslateString(1, "Please follow your chosen project’s social media and community")}</strong> {TranslateString(1, "to find out how they will handle the migration, and what you need to do.")}
            </Text>
            <Text my="16px">{TranslateString(1, "You can also easily check the location of your LP tokens via Yieldwatch:")}</Text>
            <Button
              endIcon={<OpenNewIcon color="white" />}
              as={Link}
              external
              href="https://www.yieldwatch.net/"
              style={{ width: '100%' }}
            >
              {TranslateString(1, "Locate other LP")}
            </Button>
          </FoldableContent>
        </Card>
      </CardBody>
    </Card>
  )
}

export default FirstCard
