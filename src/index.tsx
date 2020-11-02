import { createWeb3ReactRoot, Web3ReactProvider } from '@web3-react/core'
import 'inter-ui'
import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { ThemeProvider as StyledThemeProvider } from 'styled-components'
import { NetworkContextName } from './constants'
import './i18n'
import App from './pages/App'
import store from './state'
import { useIsDarkMode } from './state/user/hooks'
import ApplicationUpdater from './state/application/updater'
import ListsUpdater from './state/lists/updater'
import MulticallUpdater from './state/multicall/updater'
import TransactionUpdater from './state/transactions/updater'
import UserUpdater from './state/user/updater'
import { lightTheme, darkTheme } from './theme'
import { FixedGlobalStyle, ThemedGlobalStyle } from './components/Shared'
import getLibrary from './utils/getLibrary'

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

function ThemeProvider({ children }: { children?: React.ReactNode }) {
  const isDark = useIsDarkMode()
  const theme = isDark ? darkTheme : lightTheme

  return <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>
}

ReactDOM.render(
  <StrictMode>
    <FixedGlobalStyle />
    <Web3ReactProvider getLibrary={getLibrary}>
      <Web3ProviderNetwork getLibrary={getLibrary}>
        <Provider store={store}>
          <Updaters />
          <ThemeProvider>
            <ThemedGlobalStyle />
            <App />
          </ThemeProvider>
        </Provider>
      </Web3ProviderNetwork>
    </Web3ReactProvider>
  </StrictMode>,
  document.getElementById('root')
)
