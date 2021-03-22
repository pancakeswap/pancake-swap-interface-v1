import { useEffect } from 'react'
import BigNumber from 'bignumber.js'
import useGetPriceData from './useGetPriceData'

const useGetDocumentTitlePrice = () => {
  const priceData = useGetPriceData()
  const cakePriceUsd = priceData ? new BigNumber(priceData.prices.Cake) : new BigNumber(0)

  const cakePriceUsdString =
    cakePriceUsd.isNaN() || cakePriceUsd.eq(0)
      ? ''
      : ` - $${cakePriceUsd.toNumber().toLocaleString(undefined, {
          minimumFractionDigits: 3,
          maximumFractionDigits: 3,
        })}`

  useEffect(() => {
    document.title = `PancakeSwap${cakePriceUsdString}`
  }, [cakePriceUsdString])
}
export default useGetDocumentTitlePrice
