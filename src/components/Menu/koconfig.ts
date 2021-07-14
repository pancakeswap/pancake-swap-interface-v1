import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: '대시보드',
    icon: 'Dashboard',
    href: '/Dashboard',
  },
  {
    label: '교환 허브',
    icon: 'ExchangeHUB',
    items: [
      {
        label: '체인변환',
        href: 'https://bridge.poly.network/',
      },
      {
        label: '교환',
        href: '/swap',
      },
      {
        label: '유동성',
        href: '/pool',
      },
    ],
  },
  {
    label: '스테이킹 허브',
    icon: 'StakeHUB',
    items: [
      {
        label: '이자농사',
        href: '/Farms',
      },
      {
        label: '커뮤니티 풀',
        href: '/Pools',
      },
    ],
  },
  {
    label: '스타트업 허브',
    icon: 'StartUpHUB',
    items: [
      {
        label: 'IHO',
        href: '/IHO',
      },
      {
        label: 'Leaderboard',
        href: '/teams',
      },
      {
        label: 'Your Profile',
        href: '/profile',
      },
    ],
  },
  {
    label: '예측 허브',
    icon: 'PredictionHUB',
    items: [
      {
        label: '복권',
        href: '/Lottery',
      },
    ],
  },
  {
    label: '투표',
    icon: 'Vote',
    href: '/Vote',
  },
  {
    label: '분석',
    icon: 'Analytics',
    href: 'https://info.hubdao.io',
  },
  {
    label: '더보기',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Github',
        href: 'https://github.com/hub-dao',
      },
      {
        label: 'Docs',
        href: 'https://docs.hubdao.io/',
      },
      {
        label: 'Blog',
        href: 'https://hub-dao.medium.com/',
      },
    ],
  },

  /* {
    label: 'Home',
    icon: 'HomeIcon',
    href: 'https://hubdao.io/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    initialOpenState: true,
    status: {
      text: 'MIGRATE',
      color: 'warning',
    },
    items: [
      {
        label: 'Bridge',
        href: 'https://www.binance.org/en/bridge?utm_source=PancakeSwap',
      },
     {
        label: 'Exchange',
        href: '/swap',
      },
      {
        label: 'Liquidity',
        href: '/pool',
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: 'https://hubdao.io/farms',
  },
  {
    label: 'Pools',
    icon: 'PoolIcon',
    href: 'https://hubdao.io/pools',
  },
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'Overview',
        href: 'https://pancakeswap.info',
      },
      {
        label: 'Tokens',
        href: 'https://pancakeswap.info/tokens',
      },
      {
        label: 'Pairs',
        href: 'https://pancakeswap.info/pairs',
      },
      {
        label: 'Accounts',
        href: 'https://pancakeswap.info/accounts',
      },
    ],
  },
  {
    label: 'IFO',
    icon: 'IfoIcon',
    href: 'https://hubdao.io/ifo',
  }, */
]

export default config
