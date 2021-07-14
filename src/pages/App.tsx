import React, { Suspense, useEffect, useState, lazy } from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'
import styled from 'styled-components'
import { LangType } from '@pancakeswap-libs/uikit'
import { usePollBlockNumber, useFetchProfile, usePollCoreFarmData } from 'state/hooks'
import useTheme from 'hooks/useTheme'
import Popups from '../components/Popups'
import Web3ReactManager from '../components/Web3ReactManager'
import { RedirectDuplicateTokenIds, RedirectOldAddLiquidityPathStructure } from './AddLiquidity/redirects'
import { RedirectOldRemoveLiquidityPathStructure } from './RemoveLiquidity/redirects'
import { RedirectPathToSwapOnly } from './Swap/redirects'
import { EN, allLanguages } from '../constants/localisation/languageCodes'
import { LanguageContext } from '../hooks/LanguageContext'
import { TranslationsContext } from '../hooks/TranslationsContext'

import Menu from '../components/Menu'
import useGetDocumentTitlePrice from '../hooks/useGetDocumentTitlePrice'

const Farms = lazy(() => import('../views/Farms'))
const Lottery = lazy(() => import('../views/Lottery'))
const Ihos = lazy(() => import('../views/Ihos'))
const Collectibles = lazy(() => import('../views/Collectibles'))
const Teams = lazy(() => import('../views/Teams'))
const Team = lazy(() => import('../views/Teams/Team'))
const AddLiquidity = lazy(() => import('./AddLiquidity'))
const PoolFinder = lazy(() => import('./PoolFinder'))
const Pool = lazy(() => import('./Pool'))
const Swap = lazy(() => import('./Swap'))
const RemoveLiquidity = lazy(() => import('./RemoveLiquidity'))
const Look = lazy(() => import('./Look'))
const Pro = lazy(() => import('../views/Profile'))
const Pools = lazy(() => import('../views/Pools'))
const Dashboard = lazy(() => import('../views/Dashboard'))


const AppWrapper = styled.div<{ isDark: any }>`
  display: flex;
  flex-flow: column;
  align-items: flex-start;
  overflow-x: hidden;
  .button-checked {
    color: ${({ isDark }) => (isDark ? '#030226' : '#ffffff')};
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

  usePollBlockNumber()
  useFetchProfile()
  usePollCoreFarmData()

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
    setTranslations(selectedLanguage.src)
  }

  useEffect(() => {
    if (selectedLanguage) {
      fetchTranslationsForSelectedLanguage()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedLanguage])

  const handleLanguageSelect = (langObject: LangType) => {
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
                      <Route exact strict path="/Dashboard" component={Dashboard} />
                      <Route path="/IHO" component={Ihos} />
                      <Route path="/profile" component={Pro} />
                      <Route exact strict path="/Lottery" component={Lottery} />
                      <Route exact strict path="/Vote" component={Look} />
                      <Route path="/Farms" component={Farms} />
                      <Route exact path="/Teams" component={Teams} />
                      <Route path="/Teams/:id" component={Team} />
                      <Route path="/Pools" component={Pools} />
                      <Route path="/collectibles" component={Collectibles} />

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
