import { useContext } from 'react'
import { TranslationsContext } from '../hooks/TranslationsContext'

const getTranslation = (translations: Array<any>, id: number) => {
  const foundTranslation = translations.find(translation => {
    return translation.data.stringId === id
  })
  return foundTranslation && foundTranslation.data.text
}

export const TranslateString = (id: number, fallback: string) => {
  const { translations } = useContext(TranslationsContext)
  if (translations.length > 0) {
    return getTranslation(translations, id)
  }
  return fallback
}
