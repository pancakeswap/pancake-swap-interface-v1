import React, { useState } from 'react'
import { Box, ExpandableLabel, Flex } from '@pancakeswap-libs/uikit'
import styled from 'styled-components'

interface Props {
  title: React.ReactNode
}

const Wrapper = styled(Box)<{ isVisible: boolean }>`
  background: #452a7a;
  box-shadow: inset 0px -4px 4px rgba(0, 0, 0, 0.25);
  padding: 32px;
  ${({ theme }) => theme.mediaQueries.sm} {
    flex-direction: row;
  }
`

const Content = styled.div<{ isVisible: boolean }>`
  display: ${({ isVisible }) => (isVisible ? 'block' : 'none')};
`

const Banner: React.FC<Props> = ({ title, children, ...props }) => {
  const [isVisible, setIsVisible] = useState(true)
  return (
    <Wrapper isVisible={isVisible} {...props}>
      <Flex justifyContent="space-between" flexDirection={['column', 'row']}>
        {title}
        <ExpandableLabel expanded={isVisible} onClick={() => setIsVisible((prev) => !prev)}>
          {isVisible ? 'Hide' : 'Details'}
        </ExpandableLabel>
      </Flex>
      <Content isVisible={isVisible}>{children}</Content>
    </Wrapper>
  )
}

export default Banner
