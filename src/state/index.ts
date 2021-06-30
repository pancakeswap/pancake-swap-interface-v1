import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { save, load } from 'redux-localstorage-simple'
import { useDispatch } from 'react-redux'

import application from './application/reducer'
import user from './user/reducer'
import transactions from './transactions/reducer'
import swap from './swap/reducer'
import mint from './mint/reducer'
import lists from './lists/reducer'
import burn from './burn/reducer'
import multicall from './multicall/reducer'
import toasts from './toasts'

import farms from './farms'
import pools from './pools'
import block from './block'
import profile from './profile'
import { getThemeCache } from '../utils/theme'

type MergedState = {
  [key: string]: any
}

const PERSISTED_KEYS: string[] = ['user', 'transactions']
const loadedState = load({ states: PERSISTED_KEYS }) as MergedState
if (loadedState.user) {
  loadedState.user.userDarkMode = getThemeCache()
}
const store = configureStore({
  reducer: {
    user,
    transactions,
    application,
    swap,
    mint,
    burn,
    multicall,
    lists,
    toasts,
    farms,
    pools,
    block,
    profile,
  },
  middleware: getDefaultMiddleware().concat(save({ states: PERSISTED_KEYS })),
  preloadedState: loadedState,
})

export default store

export type AppState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()
