import { useCallback, useContext } from 'react'
import { TranslationsContext } from 'hooks/TranslationsContext'
import { getTranslation } from 'utils/translateTextHelpers'

const useI18n = () => {
  const { translations } = useContext(TranslationsContext)

  /**
   * As a temporary fix memoize the translation function so it can be used in an effect.
   * It appears the TranslationsContext is always empty and is not currently used
   * TODO: Figure out if the context is used and if not, remove it.
   */
  return useCallback(
    /**
     *
     * @param translationId 语言包的key
     * @param fallback 语言包的value
     * @returns
     */
    (translationId: number, fallback: string) => {
      return getTranslation(translations, translationId, fallback)
    },
    [translations]
  )
}
export const useTranslation = () => {
  const { translations } = useContext(TranslationsContext)

  return {
    t: useCallback(
      (fallback: string, key?: any) => {
        return getTranslation(translations, 0, fallback, key)
      },
      [translations]
    ),
  }
}
export default useI18n
