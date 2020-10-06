import React from 'react'
import { useContext } from 'react'
import { TranslationsContext } from '../../hooks/TranslationsContext'

export interface TranslatedTextProps {
  translationId: number
  children: string
}

const TranslatedText = ({ translationId, children }: TranslatedTextProps) => {
  const getTranslation = (translations: Array<any>, id: number) => {
    const foundTranslation = translations.find(translation => {
      return translation.data.stringId === id
    })
    return foundTranslation && foundTranslation.data.text
  }

  const TranslateString = (translationId: number, fallback: string) => {
    const { translations } = useContext(TranslationsContext)
    if (translations.length > 0) {
      return getTranslation(translations, translationId)
    }
    return fallback
  }

  return <>{TranslateString(translationId, children)}</>
}

export default TranslatedText
