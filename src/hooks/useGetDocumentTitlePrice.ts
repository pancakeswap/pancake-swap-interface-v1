import { useEffect } from 'react'
import useGetPriceData from './useGetPriceData'

const useGetDocumentTitlePrice = () => {
  const priceData = useGetPriceData()
  const cakePriceUsdNumber = priceData ? Number(priceData.prices.Cake) : Number.NaN

  const cakePriceUsdString = Number.isNaN(cakePriceUsdNumber)
    ? ''
    : ` - $${cakePriceUsdNumber.toLocaleString(undefined, {
        minimumFractionDigits: 3,
        maximumFractionDigits: 3,
      })}`

  useEffect(() => {
    document.title = `PancakeSwap${cakePriceUsdString}`
  })
}
export default useGetDocumentTitlePrice
