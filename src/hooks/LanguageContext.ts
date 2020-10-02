import { createContext } from 'react'
import { EN } from '../constants/localisation/languageCodes'

export const LanguageContext = createContext({ selectedLanguage: EN, translatedLanguage: EN })
