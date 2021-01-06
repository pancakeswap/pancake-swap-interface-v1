import { Text } from '@pancakeswap-libs/uikit'
import styled from 'styled-components'

export const Wrapper = styled.div`
  position: relative;
`

export const ClickableText = styled(Text)`
  :hover {
    cursor: pointer;
  }
  color: ${({ theme }) => theme.colors.primary};
`
export const MaxButton = styled.button<{ width: string }>`
  padding: 0.5rem 1rem;
  background-color: ${({ theme }) => theme.colors.primaryDark};
  border: 1px solid ${({ theme }) => theme.colors.primaryDark};
  border-radius: 0.5rem;
  font-size: 1rem;
  ${({ theme }) => theme.mediaQueries.sm} {
    padding: 0.25rem 0.5rem;
  }
  font-weight: 500;
  cursor: pointer;
  margin: 0.25rem;
  overflow: hidden;
  color: ${({ theme }) => theme.colors.primary};
  :hover {
    border: 1px solid ${({ theme }) => theme.colors.primary};
  }
  :focus {
    border: 1px solid ${({ theme }) => theme.colors.primary};
    outline: none;
  }
`

export const Dots = styled.span`
  &::after {
    display: inline-block;
    animation: ellipsis 1.25s infinite;
    content: '.';
    width: 1em;
    text-align: left;
  }
  @keyframes ellipsis {
    0% {
      content: '.';
    }
    33% {
      content: '..';
    }
    66% {
      content: '...';
    }
  }
`
