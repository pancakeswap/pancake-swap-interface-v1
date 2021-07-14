import { useContext } from 'react'
import { TranslationsContext } from 'hooks/TranslationsContext'

const variableRegex = /%(.*?)%/

const replaceDynamicString = (foundTranslation: string, key) => {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const stringToReplace = variableRegex.exec(foundTranslation)![0]
  // const indexToReplace = foundTranslation.split(' ').indexOf(stringToReplace)
  const value = key[variableRegex.exec(foundTranslation)[1]]
  return foundTranslation.replaceAll(stringToReplace, value)
}
/**
 *
 * @param translations
 * @param translationId
 * @param fallback 默认传递的语言
 * @returns 返回应该显示的语言
 */
export const getTranslation = (translations: Array<any>, translationId: number, fallback: string,key?:any) => {
  if (translations === null || translations.length === 0) {
    if(fallback.includes('%') && key !== undefined){
      return replaceDynamicString(fallback, key)
    }
    return fallback
  }
  const translatedString = translations[fallback]
  if (translatedString === undefined) {
    return fallback
  }
  const includesVariable = translatedString.includes('%')
  // 如果字符串中包含%说明字符串需要被替换，并且拥有第二个值
  if (includesVariable && key !== undefined) {
    return replaceDynamicString(translatedString, key)
  }
  return translatedString
}

export const TranslateString = (translationId: number, fallback: string) => {
  const { translations } = useContext(TranslationsContext)
  if (translations[0] === 'error') {
    return fallback
  }
  if (translations.length > 0) {
    return getTranslation(translations, translationId, fallback)
  }
  return null
}
