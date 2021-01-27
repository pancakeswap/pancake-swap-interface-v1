import React from 'react'
import styled from 'styled-components'
import { Card } from '@pancakeswap-libs/uikit'

export const BodyWrapper = styled(Card)`
  position: relative;
  max-width: 436px;
  width: 100%;
  z-index: 5;
`

/**
 * The styled container element that wraps the content of most pages and the tabs.
 */
export default function AppBody({ children }: { children: React.ReactNode }) {
  return <BodyWrapper>{children}</BodyWrapper>
}
