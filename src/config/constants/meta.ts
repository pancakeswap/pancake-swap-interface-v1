import { useTranslation } from "hooks/useI18n"

import { PageMeta } from './types'

export const DEFAULT_META: PageMeta = {
  title: 'HubDao',
  description:
    'The most popular AMM on HECO by user count! Earn HD through yield farming or win it in the Lottery, then stake it in Syrup Pools to earn more tokens! Initial Farm Offerings (new token launch model pioneered by HubDao), NFTs, and more, on a platform you can trust.',
  image: 'https://pancakeswap.finance/images/hero.png',
}

export const getCustomMeta = (path: string): PageMeta => {
  const { t } = useTranslation()
  switch (path) {
    case '/':
      return {
        title: `${t('Home')} | ${t('HubDao')}`,
      }
    case '/competition':
      return {
        title: `${t('Trading Battle')} | ${t('HubDao')}`,
      }
    case '/prediction':
      return {
        title: `${t('Prediction')} | ${t('HubDao')}`,
      }
    case '/farms':
      return {
        title: `${t('Farms')} | ${t('HubDao')}`,
      }
    case '/pools':
      return {
        title: `${t('Pools')} | ${t('HubDao')}`,
      }
    case '/lottery':
      return {
        title: `${t('Lottery')} | ${t('HubDao')}`,
      }
    case '/collectibles':
      return {
        title: `${t('Collectibles')} | ${t('HubDao')}`,
      }
    case '/ifo':
      return {
        title: `${t('Initial Farm Offering')} | ${t('HubDao')}`,
      }
    case '/teams':
      return {
        title: `${t('Leaderboard')} | ${t('HubDao')}`,
      }
    case '/profile/tasks':
      return {
        title: `${t('Task Center')} | ${t('HubDao')}`,
      }
    case '/profile':
      return {
        title: `${t('Your Profile')} | ${t('HubDao')}`,
      }
    default:
      return null
  }
}
