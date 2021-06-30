import React, { Suspense, useEffect, useState } from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'
// import styled, { keyframes } from 'styled-components'
import styled from 'styled-components'
import { LangType } from '@pancakeswap-libs/uikit'
import useTheme from 'hooks/useTheme'
import Popups from '../components/Popups'
import Web3ReactManager from '../components/Web3ReactManager'
import { RedirectDuplicateTokenIds, RedirectOldAddLiquidityPathStructure } from './AddLiquidity/redirects'
import { RedirectOldRemoveLiquidityPathStructure } from './RemoveLiquidity/redirects'
import AddLiquidity from './AddLiquidity'
import { RedirectPathToSwapOnly } from './Swap/redirects'
import Ihos from '../views/Ihos'
import Pro from '../views/Profile'
import Pools from '../views/Pools'
import Farms from '../views/Farms'
import PoolFinder from './PoolFinder'
import RemoveLiquidity from './RemoveLiquidity'
import Swap from './Swap'
import Pool from './Pool'
import Look from './Look'
import {
  EN, allLanguages
} from '../constants/localisation/languageCodes'
import { LanguageContext } from '../hooks/LanguageContext'
import { TranslationsContext } from '../hooks/TranslationsContext'

import Menu from '../components/Menu'
import useGetDocumentTitlePrice from '../hooks/useGetDocumentTitlePrice'

const AppWrapper = styled.div<{ isDark: any }>`
  display: flex;
  flex-flow: column;
  align-items: flex-start;
  overflow-x: hidden;
  /* . {
    color={isDark ? "#030226" : "#ffffff"} 
  } */
  .button-checked {
    color: ${({ isDark }) => isDark ? "#030226" : "#ffffff"}
  }
`

const BodyWrapper = styled.div`
  overflow-y: auto;
  overflow-x: hidden;
  z-index: 1;
  margin-bottom: 64px;
  ${({ theme }) => theme.mediaQueries.lg} {
    margin-bottom: 0;
  }
`

const CACHE_KEY = 'hubdaoSwapLanguage'

export default function App() {
  const [selectedLanguage, setSelectedLanguage] = useState<any>(undefined)
  const [translatedLanguage, setTranslatedLanguage] = useState<any>(undefined)
  const [translations, setTranslations] = useState<Array<any>>([])
  const { isDark } = useTheme()

  const getStoredLang = (storedLangCode: string) => {
    return allLanguages.filter((language) => {
      return language.code === storedLangCode
    })[0]
  }

  useEffect(() => {
    const storedLangCode = localStorage.getItem(CACHE_KEY)
    if (storedLangCode) {
      const storedLang = getStoredLang(storedLangCode)
      setSelectedLanguage(storedLang)
    } else {
      setSelectedLanguage(EN)
    }
  }, [])

  const fetchTranslationsForSelectedLanguage = async () => {
    // console.log('切换语言')
    // 临时
    // setTranslations(['error'])
    setTranslations(selectedLanguage.src)
  }

  useEffect(() => {
    if (selectedLanguage) {
      // console.log('selectedLanguage=>%s',selectedLanguage)
      // console.log(selectedLanguage)
      fetchTranslationsForSelectedLanguage()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedLanguage])

  const handleLanguageSelect = (langObject: LangType) => {
    // console.log(langObject)
    // 用户选择之后设置了语言
    setSelectedLanguage(langObject)
    // 并且放入了本地缓存来进行加载
    localStorage.setItem(CACHE_KEY, langObject.code)
  }

  useGetDocumentTitlePrice()

  return (
    <Suspense fallback={null}>
      <HashRouter>
        <AppWrapper isDark={isDark}>
          <LanguageContext.Provider
            value={{
              selectedLanguage,
              setSelectedLanguage: handleLanguageSelect,
              translatedLanguage,
              setTranslatedLanguage,
            }}
          >
            <TranslationsContext.Provider value={{ translations, setTranslations }}>
              <Menu>
                <BodyWrapper>
                  <Popups />
                  <Web3ReactManager>
                    <Switch>
                      <Route exact strict path="/look" component={Look} />
                      <Route exact strict path="/Dashboard" component={Look} />
                      <Route exact strict path="/FixedStaking" component={Look} />
                      <Route path="/IHO" component={Ihos} />
                      <Route path="/profile" component={Pro} />
                      <Route exact strict path="/Lottery" component={Look} />
                      <Route exact strict path="/Vote" component={Look} />
                      <Route path="/Farms" component={Farms} />
                      <Route path="/Pools" component={Pools} />
                      <Route exact strict path="/LendingHUB" component={Look} />

                      <Route exact strict path="/swap" component={Swap} />
                      <Route exact strict path="/find" component={PoolFinder} />
                      <Route exact strict path="/pool" component={Pool} />
                      <Route exact path="/add" component={AddLiquidity} />
                      <Route exact strict path="/remove/:currencyIdA/:currencyIdB" component={RemoveLiquidity} />

                      {/* Redirection: These old routes are still used in the code base */}
                      <Route exact path="/add/:currencyIdA" component={RedirectOldAddLiquidityPathStructure} />
                      <Route exact path="/add/:currencyIdA/:currencyIdB" component={RedirectDuplicateTokenIds} />
                      <Route exact strict path="/remove/:tokens" component={RedirectOldRemoveLiquidityPathStructure} />

                      <Route component={RedirectPathToSwapOnly} />
                    </Switch>
                  </Web3ReactManager>
                </BodyWrapper>
              </Menu>
            </TranslationsContext.Provider>
          </LanguageContext.Provider>
        </AppWrapper>
      </HashRouter>
    </Suspense>
  )
}
