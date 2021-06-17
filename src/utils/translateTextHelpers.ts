import { useContext } from 'react'
import { TranslationsContext } from '../hooks/TranslationsContext'

const variableRegex = /%(.*?)%/

const replaceDynamicString = (foundTranslation: string, fallback: string) => {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const stringToReplace = variableRegex.exec(foundTranslation)![0]
  const indexToReplace = foundTranslation.split(' ').indexOf(stringToReplace)
  const fallbackValueAtIndex = fallback.split(' ')[indexToReplace]
  return foundTranslation.replace(stringToReplace, fallbackValueAtIndex)
}
/**
 * 
 * @param translations 
 * @param translationId 
 * @param fallback 默认传递的语言
 * @returns 返回应该显示的语言
 */
export const getTranslation = (translations: Array<any>, translationId: number, fallback: string) => {
  // console.log('---------------------')
  // console.log(translations)
  // console.log(translationId)
  // console.log(fallback)
  // console.log('---------------------')
  // 由于 translations 变量始终是个空值不才用此值来进行判断
  // const foundTranslation = translations.find((translation) => {
  //   return translation.data.stringId === translationId
  // })
  // if (foundTranslation) {
  // console.log(translations[fallback])
  // console.log(translations)
  if(translations===null){
    return fallback
  }
  const translatedString = translations[fallback]
  if (translatedString === undefined) {
    // console.table(fallback)
    return fallback
  }
  // debugger
  // console.log(fallback)
  const includesVariable = translatedString.includes('%')
  if (includesVariable) {
    return replaceDynamicString(translatedString, fallback)
  }
  return translatedString
}

export const TranslateString = (translationId: number, fallback: string) => {
  const { translations } = useContext(TranslationsContext)
  // console.log(translations)
  if (translations[0] === 'error') {
    return fallback
  }
  if (translations.length > 0) {
    return getTranslation(translations, translationId, fallback)
  }
  return null
}
