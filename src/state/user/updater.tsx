import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../index'
import { updateMatchesDarkMode } from './actions'
import mediaObserve from '../../utils/mediaObserve'

export default function Updater(): null {
  const dispatch = useDispatch<AppDispatch>()

  // keep dark mode in sync with the system
  useEffect(() => {
    const darkHandler = (isDark: boolean) => {
      dispatch(updateMatchesDarkMode({ matchesDarkMode: isDark }))
    }
    const unSubscribe = mediaObserve.subscribe(({ isDark = false }) => {
      darkHandler(isDark)
    })
    return unSubscribe
  }, [dispatch])

  return null
}
