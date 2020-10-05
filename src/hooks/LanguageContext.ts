import React, { createContext } from 'react'
import { EN } from '../constants/localisation/languageCodes'

interface LanguageState {
  selectedLanguage: string
  setSelectedLanguage: React.Dispatch<React.SetStateAction<string>>
  translatedLanguage: string
  setTranslatedLanguage: React.Dispatch<React.SetStateAction<string>>
}

const defaultLanguageState: LanguageState = {
  selectedLanguage: EN.code,
  setSelectedLanguage: (): void => {},
  translatedLanguage: EN.code,
  setTranslatedLanguage: (): void => {}
}

export const LanguageContext = createContext(defaultLanguageState as LanguageState)
