import React from 'react'
import styled from 'styled-components'
import { Heading, Text, Card, CardHeader, CardBody, Image } from '@pancakeswap-libs/uikit'
import FoldableText from 'components/FoldableText'
import Container from 'components/Container'
import useI18n from 'hooks/useI18n'
import config from './config'

const Wrapper = styled(Container)`
  background: ${({ theme }) => theme.colors.gradients.violetAlt};
`

const FAQ = () => {
  const TranslateString = useI18n()

  return (
    <Wrapper>
      <Heading as="h2" size="xl" color="secondary" mb="24px">
        Learn more
      </Heading>
      <Text bold mb="24px">
        Here’s what you need to know about the PancakeSwap LP Token Migration.
      </Text>
      <Card>
        <CardHeader>
          <Text fontSize="24px" color="secondary" bold>
            FAQ
          </Text>
        </CardHeader>
        <CardBody>
          {config.map(({ title, description }) => (
            <FoldableText
              key={title.fallback}
              id={title.fallback}
              mb="24px"
              title={TranslateString(title.id, title.fallback)}
            >
              {description.map(({ id, fallback }) => {
                return (
                  <Text key={fallback} color="textSubtle" as="p">
                    {TranslateString(id, fallback)}
                  </Text>
                )
              })}
            </FoldableText>
          ))}
        </CardBody>
      </Card>
      <Image src="/images/migrate.svg" width={242} height={227} mt="16px" />
    </Wrapper>
  )
}

export default FAQ
