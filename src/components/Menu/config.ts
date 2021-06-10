import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Dashboard',
    icon: 'Dashboard',
    href: '/look',
  },
  {
    label: 'Exchange HUB',
    icon: 'ExchangeHUB',
    href: '/look',
    items: [
      {
        label: 'Bridge',
        href: 'https://bridge.poly.network/',
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
    label: 'Stake HUB',
    icon: 'StakeHUB',
    items: [
      {
        label: 'Yield Farming',
        href: '/look',
      },
      {
        label: 'Community Pool',
        href: '/look',
      },
      {
        label: 'Fixed Staking',
        href: '/look',
      },
    ],
  },
  {
    label: 'Start-up HUB',
    icon: 'StartUpHUB',
    items: [
      {
        label: 'IHO',
        href: '/look',
      },
    ],
  },
  {
    label: 'Prediction HUB',
    icon: 'PredictionHUB',
    items: [
      {
        label: 'Lottery',
        href: '/look',
      },
    ],
  },
  {
    label: 'Vote',
    icon: 'Vote',
    href: '/look',
  },
  {
    label: 'Lending HUB',
    icon: 'LendingHUB',
    href: '/look',
  },
  {
    label: 'Analytics',
    icon: 'Analytics',
    href: 'https://info.hubdao.io',
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Github',
        href: 'https://github.com/hub-dao',
      },
      {
        label: 'Docs',
        href: 'https://app.gitbook.com/@hubdao/teams',
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
