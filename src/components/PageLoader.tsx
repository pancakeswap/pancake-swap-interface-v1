import React from 'react'
import styled from 'styled-components'
// import { Spinner } from '@pancakeswap-libs/uikit'
import { LogoIcon } from '@pancakeswap-libs/uikit'

import Page from './layout/Page'

const Wrapper = styled(Page)`
  display: flex;
  justify-content: center;
  align-items: center;
`

const PageLoader: React.FC = () => {
  return (
    <Wrapper>
      {/* <Spinner /> */}
      <LogoIcon width="80px" />
    </Wrapper>
  )
}

export default PageLoader
