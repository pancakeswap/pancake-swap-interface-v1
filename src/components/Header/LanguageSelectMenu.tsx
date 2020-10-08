import React, { useRef, useContext } from 'react'
import styled from 'styled-components'
import { Text } from 'rebass'
import { useOnClickOutside } from '../../hooks/useOnClickOutside'
import useToggle from '../../hooks/useToggle'
import { LanguageContext, LanguageObject } from '../../hooks/LanguageContext'
import { allLanguages } from '../../constants/localisation/languageCodes'
import { Globe } from 'react-feather'

const StyledMenuButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  border: none;
  background-color: transparent;
  margin: 0;
  padding: 0;
  height: 35px;
  background-color: ${({ theme }) => theme.colors.bg3};
  color: ${({ theme }) => theme.colors.text1};
  padding: 0.15rem 0.5rem;
  border-radius: 0.5rem;

  :hover,
  :focus {
    cursor: pointer;
    outline: none;
    background-color: ${({ theme }) => theme.colors.bg4};
  }

  svg {
    height: 19px;
    width: 19px;
    margin-right: 0.2rem;

    > * {
      stroke: ${({ theme }) => theme.colors.text1};
    }
  }
`

const StyledMenu = styled.div`
  margin-left: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  border: none;
  text-align: left;
`

const MenuFlyout = styled.span`
  min-width: 8.125rem;
  background-color: ${({ theme }) => theme.colors.bg3};
  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.01), 0px 4px 8px rgba(0, 0, 0, 0.04), 0px 16px 24px rgba(0, 0, 0, 0.04),
    0px 24px 32px rgba(0, 0, 0, 0.01);
  border-radius: 0.5rem;
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  font-size: 1rem;
  position: absolute;
  top: 3rem;
  right: 0rem;
  z-index: 100;
`

const MenuItem = styled.div`
  flex: 1;
  padding: 0.25rem 0.5rem;
  color: ${({ theme }) => theme.colors.text2};
  :hover {
    color: ${({ theme }) => theme.colors.text1};
    cursor: pointer;
    text-decoration: none;
  }
  > svg {
    margin-right: 8px;
  }
`

const StyledText = styled(Text)`
  padding: 0 0.5rem;
`

const MenuItemsWrapper = styled.div`
  max-height: 50vh;
  overflow-y: scroll;
`

export default function Menu() {
  const node = useRef<HTMLDivElement>()
  const [open, toggle] = useToggle(false)

  useOnClickOutside(node, open ? toggle : undefined)

  const { selectedLanguage, setSelectedLanguage } = useContext(LanguageContext)

  const parseLanguageTextRendering = (languageCode: string) => {
    switch (languageCode) {
      case 'pt-BR':
        return 'PT'
      case 'es-ES':
        return 'ES'
      case 'sv-SE':
        return 'SE'
      case 'zh-CN':
        return 'CN'
      case 'zh-TW':
        return 'TW'
      default:
        return languageCode.toUpperCase()
    }
  }

  const handleLanguageSelect = (langObject: LanguageObject) => {
    setSelectedLanguage(langObject)
    toggle()
    localStorage.setItem('pancakeSwapLanguage', langObject.code)
  }

  return (
    <StyledMenu ref={node as any}>
      <StyledMenuButton onClick={toggle}>
        <Globe />
        {(selectedLanguage && parseLanguageTextRendering(selectedLanguage.code)) || 'EN'}
      </StyledMenuButton>
      {open && (
        <MenuFlyout>
          <StyledText fontWeight={500} fontSize={14}>
            Language
          </StyledText>
          <MenuItemsWrapper>
            {allLanguages.map(langObject => {
              return (
                <MenuItem key={langObject.code} onClick={() => handleLanguageSelect(langObject)}>
                  {langObject.language}
                </MenuItem>
              )
            })}
          </MenuItemsWrapper>
        </MenuFlyout>
      )}
    </StyledMenu>
  )
}
