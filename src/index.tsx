import { createWeb3ReactRoot, Web3ReactProvider } from '@web3-react/core'
import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { ResetCSS } from '@pancakeswap-libs/uikit'
import GlobalStyle from './style/Global'
import { NetworkContextName } from './constants'
import App from './pages/App'
import store from './state'
import ApplicationUpdater from './state/application/updater'
import ListsUpdater from './state/lists/updater'
import MulticallUpdater from './state/multicall/updater'
import TransactionUpdater from './state/transactions/updater'
import UserUpdater from './state/user/updater'
import getLibrary from './utils/getLibrary'
import { ThemeContextProvider } from './ThemeContext'
import 'inter-ui'
import './i18n'

const Web3ProviderNetwork = createWeb3ReactRoot(NetworkContextName)

if ('ethereum' in window) {
  ;(window.ethereum as any).autoRefreshOnNetworkChange = false
}

window.addEventListener('error', () => {
  localStorage && localStorage.removeItem('redux_localstorage_simple_lists')
})

function Updaters() {
  return (
    <>
      <ListsUpdater />
      <UserUpdater />
      <ApplicationUpdater />
      <TransactionUpdater />
      <MulticallUpdater />
    </>
  )
}

ReactDOM.render(
  <StrictMode>
    <Web3ReactProvider getLibrary={getLibrary}>
      <Web3ProviderNetwork getLibrary={getLibrary}>
        <Provider store={store}>
          <Updaters />
          <ThemeContextProvider>
            <ResetCSS />
            <GlobalStyle />
            <App />
          </ThemeContextProvider>
        </Provider>
      </Web3ProviderNetwork>
    </Web3ReactProvider>
  </StrictMode>,
  document.getElementById('root')
)
