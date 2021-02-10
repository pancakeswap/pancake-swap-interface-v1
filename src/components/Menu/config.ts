import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'หน้าหลัก',
    icon: 'HomeIcon',
    href: 'https://pancakeswap.finance/',
  },
  {
    label: 'เทรด',
    icon: 'TradeIcon',
    initialOpenState: true,
    items: [
      {
        label: 'แลกเปลี่ยน',
        href: '/swap',
      },
      {
        label: 'สภาพคล่อง',
        href: '/pool',
      },
    ],
  },
  {
    label: 'ฟาร์ม',
    icon: 'FarmIcon',
    href: 'https://pancakeswap.finance/farms',
  },
  {
    label: 'พูลล์',
    icon: 'PoolIcon',
    href: 'https://pancakeswap.finance/syrup',
  },
  {
    label: 'ลอตเตอรี่',
    icon: 'TicketIcon',
    href: 'https://pancakeswap.finance/lottery',
  },

  {
    label: 'ทีมและโปรไฟล์',
    icon: 'GroupsIcon',
    items: [
      {
        label: 'Leaderboard',
        href: 'https://pancakeswap.finance/teams',
      },
      {
        label: 'Your Profile',
        href: 'https://pancakeswap.finance/profile',
      },
    ],
  },
  {
    label: 'ข้อมูล',
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
    label: 'เพิ่มเติม',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Voting',
        href: 'https://voting.pancakeswap.finance',
      },
      {
        label: 'Github',
        href: 'https://github.com/pancakeswap',
      },
      {
        label: 'Docs',
        href: 'https://docs.pancakeswap.finance',
      },
      {
        label: 'Blog',
        href: 'https://pancakeswap.medium.com',
      },
    ],
  },
]

export default config
