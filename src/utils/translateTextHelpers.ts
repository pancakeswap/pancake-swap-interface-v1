import { useContext } from 'react'
import { TranslationsContext } from '../hooks/TranslationsContext'

export const getTranslation = (translations: Array<any>, translationId: number, fallback: string) => {
  const foundTranslation = translations.find(translation => {
    return translation.data.stringId === translationId
  })
  if (foundTranslation) {
    return foundTranslation.data.text
  } else {
    return fallback
  }
}

export const TranslateString = (translationId: number, fallback: string) => {
  const { translations } = useContext(TranslationsContext)
  if (translations.length > 0) {
    return getTranslation(translations, translationId, fallback)
  }
}

// export const getTranslation = (translations: Array<any>, translationId: number) => {
//   const foundTranslation = translations.find(translation => {
//     return translation.data.stringId === translationId
//   })
//   if (foundTranslation) {
//     return foundTranslation.data.text
//   }
// }

// export const TranslateString = (translationId: number, fallback: string) => {
//   const { translations } = useContext(TranslationsContext)
//   if (translations.length > 0) {
//     return getTranslation(translations, translationId)
//   }
//   return fallback
// }
