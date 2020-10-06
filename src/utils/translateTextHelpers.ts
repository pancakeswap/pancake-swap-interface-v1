import { useContext } from 'react'
import { TranslationsContext } from '../hooks/TranslationsContext'

export const getTranslation = (translations: Array<any>, translationId: number) => {
  const foundTranslation = translations.find(translation => {
    return translation.data.stringId === translationId
  })
  return foundTranslation && foundTranslation.data.text
}

export const TranslateString = (translationId: number, fallback: string) => {
  const { translations } = useContext(TranslationsContext)
  if (translations.length > 0) {
    return getTranslation(translations, translationId)
  }
  return fallback
}
