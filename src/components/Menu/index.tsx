import React, { useContext } from 'react'
import { Nav } from '@pancakeswap-libs/uikit'
import useTheme from '../../hooks/useTheme'
import { useWallet } from 'use-wallet'
import { LanguageContext } from '../../contexts/Localisation/languageContext'

import { allLanguages } from '../../constants/localisation/languageCodes'
import { useCakePriceUSD } from '../../hooks/useTokenBalance'

const Menu = () => {
  const { account, connect, reset } = useWallet()
  const { isDark, toggleTheme } = useTheme()
  const { selectedLanguage, setSelectedLanguage } = useContext(LanguageContext)
  const cakePriceUsd = useCakePriceUSD()

  return (
    <Nav
      account={account!}
      login={connect}
      logout={reset}
      isDark={isDark!}
      toggleTheme={toggleTheme}
      langs={allLanguages}
      setLang={setSelectedLanguage}
      currentLang={setSelectedLanguage && selectedLanguage.code}
      cakePriceUsd={cakePriceUsd}
    />
  )
}

export default Menu
