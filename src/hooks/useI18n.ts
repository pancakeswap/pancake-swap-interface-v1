import { useCallback, useContext } from 'react'
import { TranslationsContext } from 'hooks/TranslationsContext'
import { isEmpty } from 'lodash'

interface ContextData {
  [key: string]: number | string
}

const useI18n = () => {
  const { translations } = useContext(TranslationsContext)

  /**
   * As a temporary fix memoize the translation function so it can be used in an effect.
   * It appears the TranslationsContext is always empty and is not currently used
   * TODO: Figure out if the context is used and if not, remove it.
   */
  return useCallback(
    (translationId: number, fallback: string, data: ContextData = {}) => {
      if (translations.length === 0) {
        return fallback
      }

      const foundTranslation = translations.find((translation) => {
        return translation.data.stringId === translationId
      })

      if (foundTranslation) {
        const { text } = foundTranslation.data
        const includesVariable = text.includes('%')

        if (includesVariable) {
          let interpolatedText = text

          // If dynamic tags are found but no data was passed return the fallback
          if (isEmpty(data)) {
            return fallback
          }

          Object.keys(data).forEach((dataKey) => {
            const templateKey = new RegExp(`%${dataKey}%`, 'g')
            interpolatedText = interpolatedText.replace(templateKey, data[dataKey])
          })

          return interpolatedText
        }

        return text
      }

      return fallback
    },
    [translations])
}

export default useI18n
