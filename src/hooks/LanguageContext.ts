import React, { createContext } from 'react'
// import { EN } from '../constants/localisation/languageCodes'

export interface LanguageObject {
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
  selectedLanguage: { code: '', language: '' },
  setSelectedLanguage: (): void => {},
  translatedLanguage: { code: '', language: '' },
  setTranslatedLanguage: (): void => {}
}

export const LanguageContext = createContext(defaultLanguageState as LanguageState)
