import { MenuEntry } from 'greenteaswap-ui-kit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: 'https://greenteaswap.dev/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    initialOpenState: true,
    items: [
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
  // {
  //   label: 'Farms',
  //   icon: 'FarmIcon',
  //   href: 'https://greenteaswap.dev/farms',
  // },
  // {
  //   label: 'Pools',
  //   icon: 'PoolIcon',
  //   href: 'https://greenteaswap.dev/syrup',
  // },
  {
    label: 'Lottery',
    icon: 'TicketIcon',
    href: 'https://greenteaswap.dev/lottery',
  },
  // {
  //   label: 'NFT',
  //   icon: 'NftIcon',
  //   href: 'https://greenteaswap.dev/nft',
  // },
  // {
  //   label: 'Teams & Profile',
  //   icon: 'GroupsIcon',
  //   calloutClass: 'rainbow',
  //   items: [
  //     {
  //       label: 'Leaderboard',
  //       href: 'https://greenteaswap.dev/teams',
  //     },
  //     {
  //       label: 'Task Center',
  //       href: 'https://greenteaswap.dev/profile/tasks',
  //     },
  //     {
  //       label: 'Your Profile',
  //       href: 'https://greenteaswap.dev/profile',
  //     },
  //   ],
  // },
  // {
  //   label: 'Info',
  //   icon: 'InfoIcon',
  //   items: [
  //     {
  //       label: 'Overview',
  //       href: 'https://pancakeswap.info',
  //     },
  //     {
  //       label: 'Tokens',
  //       href: 'https://pancakeswap.info/tokens',
  //     },
  //     {
  //       label: 'Pairs',
  //       href: 'https://pancakeswap.info/pairs',
  //     },
  //     {
  //       label: 'Accounts',
  //       href: 'https://pancakeswap.info/accounts',
  //     },
  //   ],
  // },
  // {
  //   label: 'IFO',
  //   icon: 'IfoIcon',
  //   href: 'https://greenteaswap.dev/ifo',
  // },
  // {
  //   label: 'More',
  //   icon: 'MoreIcon',
  //   items: [
  //     {
  //       label: 'Voting',
  //       href: 'https://voting.pancakeswap.finance',
  //     },
  //     {
  //       label: 'Github',
  //       href: 'https://github.com/pancakeswap',
  //     },
  //     {
  //       label: 'Docs',
  //       href: 'https://docs.pancakeswap.finance',
  //     },
  //     {
  //       label: 'Blog',
  //       href: 'https://pancakeswap.medium.com',
  //     },
  //   ],
  // },
]

export default config
