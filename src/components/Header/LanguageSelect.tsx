import React, { useContext } from 'react'
import styled from 'styled-components'
import { Flag } from 'react-feather'
import { LanguageContext } from '../../hooks/LanguageContext'
import { DE, EN } from '../../constants/localisation/languageCodes'

const StyledLanguageIcon = styled(Flag)`
  height: 20px;
  width: 20px;

  > * {
    stroke: ${({ theme }) => theme.text1};
  }
`

const StyledLanguageMenuButton = styled.button`
  position: relative;
  width: 100%;
  height: 100%;
  border: none;
  background-color: transparent;
  margin: 0;
  padding: 0;
  height: 35px;
  background-color: ${({ theme }) => theme.bg3};

  padding: 0.15rem 0.5rem;
  border-radius: 0.5rem;

  :hover,
  :focus {
    cursor: pointer;
    outline: none;
    background-color: ${({ theme }) => theme.bg4};
  }

  svg {
    margin-top: 2px;
  }
`

export default function SettingsTab() {
  const { selectedLanguage, setSelectedLanguage } = useContext(LanguageContext)

  const toggleLanguage = () => {
    if (selectedLanguage === EN) {
      setSelectedLanguage(DE)
      return
    }
    setSelectedLanguage(EN)
    return
  }

  return (
    <StyledLanguageMenuButton onClick={toggleLanguage} id="open-settings-dialog-button">
      <StyledLanguageIcon />
    </StyledLanguageMenuButton>
  )
}
