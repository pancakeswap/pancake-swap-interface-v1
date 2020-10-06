import React, { createContext } from 'react'
import { EN } from '../constants/localisation/languageCodes'

interface LanguageObject {
  code: string
  language: string
}
interface LanguageState {
  selectedLanguage: LanguageObject
  setSelectedLanguage: React.Dispatch<React.SetStateAction<LanguageObject>>
  translatedLanguage: LanguageObject
  setTranslatedLanguage: React.Dispatch<React.SetStateAction<LanguageObject>>
}

const defaultLanguageState: LanguageState = {
  selectedLanguage: EN,
  setSelectedLanguage: (): void => {},
  translatedLanguage: EN,
  setTranslatedLanguage: (): void => {}
}

export const LanguageContext = createContext(defaultLanguageState as LanguageState)
