import { NavProps } from '@pancakeswap-libs/uikit'

const links: NavProps['links'] = [
  {
    label: 'Trade',
    items: [
      {
        label: 'Exchange',
        href: '/swap'
      },
      {
        label: 'Liquidity',
        href: '/pool'
      }
    ]
  },
  {
    label: 'Farms',
    href: 'https://pancakeswap.finance/farms'
  },
  {
    label: 'Pools',
    href: 'https://pancakeswap.finance/pools'
  },
  {
    label: 'Lottery',
    href: 'https://pancakeswap.finance/lottery'
  },
  {
    label: 'Info',
    href: 'https://pancakeswap.info'
  },
  {
    label: 'IFO',
    href: 'https://pancakeswap.finance/ifo'
  },
  {
    label: 'NFT',
    href: 'https://pancakeswap.finance/nft'
  }
]

export default links
