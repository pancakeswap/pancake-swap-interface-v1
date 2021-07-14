const tokens = {
  bnb: {
    symbol: 'HT',
    projectLink: 'https://hecoinfo.com',
    logoURI: '/images/coins/ht.png',
  },
  wbnb: {
    symbol: 'WHT',
    address: {
      128: '0x5545153CCFcA01fbd7Dd11C0b23ba694D9509A6F',
      256: '',
    },
    decimals: 18,
    projectLink: 'https://hecoinfo.com',
    logoURI: 'https://s2.coinmarketcap.com/static/img/coins/64x64/2502.png',
  },
  cake: {
    symbol: 'HD',
    address: {
      128: '0xA161658ad97F70915136B773beecb72Cde221F31',
      256: '',
    },
    decimals: 18,
    projectLink: 'https://app.hubdao.io',
    logoURI: 'https://info.hubdao.io/coin/0xa161658ad97f70915136b773beecb72cde221f31.svg',
  },
  busd: {
    symbol: 'HUSD',
    address: {
      128: '0x0298c2b32eaE4da002a15f36fdf7615BEa3DA047',
      256: '',
    },
    decimals: 8,
    projectLink: 'https://hecoinfo.com',
    logoURI: 'https://s2.coinmarketcap.com/static/img/coins/64x64/4779.png',
  },

  ht: {
    symbol: 'HT',
    projectLink: 'https://hecoinfo.com',
    logoURI: '/images/coins/ht.png',
  },
  wht: {
    symbol: 'WHT',
    address: {
      128: '0x5545153CCFcA01fbd7Dd11C0b23ba694D9509A6F',
      256: '',
    },
    decimals: 18,
    projectLink: 'https://hecoinfo.com',
    logoURI: 'https://s2.coinmarketcap.com/static/img/coins/64x64/2502.png',
  },
  hd: {
    symbol: 'HD',
    address: {
      128: '0xA161658ad97F70915136B773beecb72Cde221F31',
      256: '',
    },
    decimals: 18,
    projectLink: 'https://app.hubdao.io',
    logoURI: 'https://info.hubdao.io/coin/0xa161658ad97f70915136b773beecb72cde221f31.svg',
  },
  hdt: {
    symbol: 'HDT',
    address: {
      128: '0x3d5d17243307B1E236BFbDed127a7f4d0b62E185',
      256: '',
    },
    decimals: 18,
    projectLink: 'https://app.hubdao.io',
    logoURI: 'https://info.hubdao.io/coin/0x3d5d17243307b1e236bfbded127a7f4d0b62e185.SVG',
  },
  husd: {
    symbol: 'HUSD',
    address: {
      128: '0x0298c2b32eaE4da002a15f36fdf7615BEa3DA047',
      256: '',
    },
    decimals: 8,
    projectLink: 'https://www.stcoins.com',
    logoURI: 'https://s2.coinmarketcap.com/static/img/coins/64x64/4779.png',
  },
  usdt: {
    symbol: 'USDT',
    address: {
      128: '0xa71EdC38d189767582C38A3145b5873052c3e47a',
      256: '',
    },
    decimals: 18,
    projectLink: 'https://www.htokens.finance',
    logoURI: 'https://mdex.co/token-icons/heco/0xa71edc38d189767582c38a3145b5873052c3e47a.png',
  },
  eth: {
    symbol: 'ETH',
    address: {
      128: '0x64FF637fB478863B7468bc97D30a5bF3A428a1fD',
      256: '',
    },
    decimals: 18,
    projectLink: 'https://ethereum.org',
    logoURI: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png',
  },
  hpt: {
    symbol: 'HPT',
    address: {
      128: '0xE499Ef4616993730CEd0f31FA2703B92B50bB536',
      256: '',
    },
    decimals: 18,
    projectLink: 'https://www.htokens.finance',
    logoURI: 'https://mdex.co/token-icons/heco/0xe499ef4616993730ced0f31fa2703b92b50bb536.png',
  },
  bkc: {
    symbol: 'BKC',
    address: {
      128: '0x36278870A563f5F2964016eed3a6E329375F6A6E',
      256: '',
    },
    decimals: 18,
    projectLink: 'https://app.hubdao.io',
    logoURI: 'https://info.hubdao.io/coin/0x36278870A563f5F2964016eed3a6E329375F6A6E.svg',
  },
  boo: {
    symbol: 'BOO',
    address: {
      128: '0xff96dccf2763D512B6038Dc60b7E96d1A9142507',
      256: '',
    },
    decimals: 18,
    projectLink: 'https://booster.farm',
    logoURI: 'https://mdex.co/token-icons/heco/0xff96dccf2763d512b6038dc60b7e96d1a9142507.png',
  },
  mdx: {
    symbol: 'MDX',
    address: {
      128: '0x25D2e80cB6B86881Fd7e07dd263Fb79f4AbE033c',
      256: '',
    },
    decimals: 18,
    projectLink: 'https://mdex.com',
    logoURI: 'https://mdex.co/token-icons/heco/0x25d2e80cb6b86881fd7e07dd263fb79f4abe033c.png',
  },
  hdot: {
    symbol: 'HDOT',
    address: {
      128: '0xA2c49cEe16a5E5bDEFDe931107dc1fae9f7773E3',
      256: '',
    },
    decimals: 18,
    projectLink: 'https://www.htokens.finance',
    logoURI: 'https://s2.coinmarketcap.com/static/img/coins/64x64/6636.png',
  },
  flux: {
    symbol: 'FLUX',
    address: {
      128: '0xd10852DF03Ea8b8Af0CC0B09cAc3f7dbB15e0433',
      256: '',
    },
    decimals: 18,
    projectLink: 'http://flux.01.finance/heco',
    logoURI: 'https://mdex.co/token-icons/heco/0xd10852df03ea8b8af0cc0b09cac3f7dbb15e0433.png',
  },
  hbtc: {
    symbol: 'HBTC',
    address: {
      128: '0x66a79D23E58475D2738179Ca52cd0b41d73f0BEa',
      256: '',
    },
    decimals: 18,
    projectLink: 'https://www.htokens.finance/en-us',
    logoURI: 'https://mdex.co/token-icons/heco/0x66a79d23e58475d2738179ca52cd0b41d73f0bea.png',
  },
}

export default tokens
