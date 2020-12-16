import React from 'react'
import styled from 'styled-components'
import { Button, ButtonProps as UIKitButtonProps, ChevronDownIcon } from '@pancakeswap-libs/uikit'
import { darken } from 'polished'
import { Button as RebassButton, ButtonProps } from 'rebass/styled-components'

const Base = styled(RebassButton)<{
  padding?: string
  width?: string
  borderRadius?: string
  altDisabledStyle?: boolean
}>`
  padding: ${({ padding }) => (padding ? padding : '18px')};
  width: ${({ width }) => (width ? width : '100%')};
  font-weight: 500;
  text-align: center;
  border-radius: 20px;
  border-radius: ${({ borderRadius }) => borderRadius && borderRadius};
  outline: none;
  border: 1px solid transparent;
  color: white;
  text-decoration: none;
  display: flex;
  justify-content: center;
  flex-wrap: nowrap;
  align-items: center;
  cursor: pointer;
  position: relative;
  z-index: 1;
  &:disabled {
    cursor: auto;
  }

  > * {
    user-select: none;
  }
`

export const ButtonPrimary = styled(Base)`
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.background};
  &:focus {
    box-shadow: 0 0 0 1pt ${({ theme }) => darken(0.05, theme.colors.primary)};
  }
  &:active {
    box-shadow: 0 0 0 1pt ${({ theme }) => darken(0.1, theme.colors.primary)};
  }
  &:disabled {
    background: ${({ theme, altDisabledStyle }) => (altDisabledStyle ? theme.colors.primary : theme.colors.tertiary)};
    color: ${({ theme, altDisabledStyle }) => (altDisabledStyle ? 'white' : theme.colors.textDisabled)};
    cursor: auto;
    box-shadow: none;
    border: 1px solid transparent;
    outline: none;
    opacity: ${({ altDisabledStyle }) => (altDisabledStyle ? '0.7' : '1')};
  }
`

export const ButtonLight = styled(Base)`
  background: ${({ theme }) => theme.colors.primary};
  color: #ffffff;
  font-size: 16px;
  font-weight: 500;
  &:focus {
    box-shadow: 0 0 0 1pt ${({ theme, disabled }) => !disabled && darken(0.03, theme.colors.primaryDark)};
    background-color: ${({ theme, disabled }) => !disabled && darken(0.03, theme.colors.primaryDark)};
  }
  &:hover {
    background-color: ${({ theme, disabled }) => !disabled && darken(0.03, theme.colors.primaryDark)};
  }
  &:active {
    box-shadow: 0 0 0 1pt ${({ theme, disabled }) => !disabled && darken(0.05, theme.colors.primaryDark)};
    background-color: ${({ theme, disabled }) => !disabled && darken(0.05, theme.colors.primaryDark)};
  }
  :disabled {
    opacity: 0.4;
    :hover {
      cursor: auto;
      background-color: ${({ theme }) => theme.colors.primaryDark};
      box-shadow: none;
      border: 1px solid transparent;
      outline: none;
    }
  }
`

export const ButtonGray = styled(Base)`
  background-color: ${({ theme }) => theme.colors.tertiary};
  color: ${({ theme }) => theme.colors.textSubtle};
  font-size: 16px;
  font-weight: 500;
  &:focus {
    box-shadow: 0 0 0 1pt ${({ theme, disabled }) => !disabled && darken(0.05, theme.colors.invertedContrast)};
    background-color: ${({ theme, disabled }) => !disabled && darken(0.05, theme.colors.invertedContrast)};
  }
  &:hover {
    background-color: ${({ theme, disabled }) => !disabled && darken(0.05, theme.colors.invertedContrast)};
  }
  &:active {
    box-shadow: 0 0 0 1pt ${({ theme, disabled }) => !disabled && darken(0.1, theme.colors.invertedContrast)};
    background-color: ${({ theme, disabled }) => !disabled && darken(0.1, theme.colors.invertedContrast)};
  }
`

export const ButtonSecondary = styled(Base)`
  background-color: ${({ theme }) => theme.colors.primaryDark};
  color: ${({ theme }) => theme.colors.primaryDark};
  font-size: 16px;
  border-radius: 8px;
  padding: ${({ padding }) => (padding ? padding : '10px')};

  &:focus {
    box-shadow: 0 0 0 1pt ${({ theme }) => theme.colors.primaryDark};
    background-color: ${({ theme }) => theme.colors.primaryDark};
  }
  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryDark};
  }
  &:active {
    box-shadow: 0 0 0 1pt ${({ theme }) => theme.colors.primaryDark};
    background-color: ${({ theme }) => theme.colors.primaryDark};
  }
  &:disabled {
    background-color: ${({ theme }) => theme.colors.primaryDark};
    opacity: 50%;
    cursor: auto;
  }
`

export const ButtonPink = styled(Base)`
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;

  &:focus {
    box-shadow: 0 0 0 1pt ${({ theme }) => darken(0.05, theme.colors.primary)};
    background-color: ${({ theme }) => darken(0.05, theme.colors.primary)};
  }
  &:hover {
    background-color: ${({ theme }) => darken(0.05, theme.colors.primary)};
  }
  &:active {
    box-shadow: 0 0 0 1pt ${({ theme }) => darken(0.1, theme.colors.primary)};
    background-color: ${({ theme }) => darken(0.1, theme.colors.primary)};
  }
  &:disabled {
    background-color: ${({ theme }) => theme.colors.primary};
    opacity: 50%;
    cursor: auto;
  }
`

export const ButtonOutlined = styled(Base)`
  border: 1px solid ${({ theme }) => theme.colors.invertedContrast};
  background-color: transparent;
  color: ${({ theme }) => theme.colors.text};

  &:focus {
    box-shadow: 0 0 0 1px ${({ theme }) => theme.colors.backgroundDisabled};
  }
  &:hover {
    box-shadow: 0 0 0 1px ${({ theme }) => theme.colors.backgroundDisabled};
  }
  &:active {
    box-shadow: 0 0 0 1px ${({ theme }) => theme.colors.backgroundDisabled};
  }
  &:disabled {
    opacity: 50%;
    cursor: auto;
  }
`

export const ButtonEmpty = styled(Base)`
  background-color: transparent;
  color: ${({ theme }) => theme.colors.primary};
  display: flex;
  justify-content: center;
  align-items: center;

  &:focus {
    background-color: ${({ theme }) => theme.colors.background};
  }
  &:hover {
    background-color: ${({ theme }) => theme.colors.background};
  }
  &:active {
    background-color: ${({ theme }) => theme.colors.background};
  }
  &:disabled {
    opacity: 50%;
    cursor: auto;
  }
`

export const ButtonWhite = styled(Base)`
  border: 1px solid #edeef2;
  background-color: ${({ theme }) => theme.colors.invertedContrast};
  color: black;

  &:focus {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    box-shadow: 0 0 0 1pt ${darken(0.05, '#edeef2')};
  }
  &:hover {
    box-shadow: 0 0 0 1pt ${darken(0.1, '#edeef2')};
  }
  &:active {
    box-shadow: 0 0 0 1pt ${darken(0.1, '#edeef2')};
  }
  &:disabled {
    opacity: 50%;
    cursor: auto;
  }
`

export const ButtonDropdown = (props: UIKitButtonProps) => {
  return <Button {...props} endIcon={<ChevronDownIcon />} />
}

export function ButtonRadio({ active, ...rest }: { active?: boolean } & ButtonProps) {
  if (!active) {
    return <ButtonWhite {...rest} />
  } else {
    return <ButtonPrimary {...rest} />
  }
}
