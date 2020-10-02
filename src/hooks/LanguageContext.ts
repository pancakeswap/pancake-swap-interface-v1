import React, { createContext } from 'react'
import { EN } from '../constants/localisation/languageCodes'

interface LanguageState {
  selectedLanguage: string
  setSelectedLanguage: React.Dispatch<React.SetStateAction<string>>
  translatedLanguage: string
  setTranslatedLanguage: React.Dispatch<React.SetStateAction<string>>
}

const defaultLanguageState: LanguageState = {
  selectedLanguage: EN,
  setSelectedLanguage: (): void => {},
  translatedLanguage: EN,
  setTranslatedLanguage: (): void => {}
}

export const LanguageContext = createContext(defaultLanguageState as LanguageState)
