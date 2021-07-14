import tokens from './tokens'
import { FarmCategory, FarmConfig } from './types'

const farms: FarmConfig[] = [
  /**
   * These 3 farms (PID 0, 251, 252) should always be at the top of the file.
   */
  {
    pid: 0,
    lpSymbol: 'HD',
    lpAddresses: {
      128: '0xA161658ad97F70915136B773beecb72Cde221F31',
      256: '',
    },
    token: tokens.hd,
    quoteToken: tokens.husd,
    farmCategory: FarmCategory.HD,
  },
  {
    pid: 1,
    lpSymbol: 'HD-USDT LP',
    lpAddresses: {
      128: '0xCBB9263a6074904905089e753f4084EAEFe16405',
      256: '',
    },
    token: tokens.hd,
    quoteToken: tokens.usdt,
    farmCategory: FarmCategory.HD,
  },
  {
    pid: 2,
    lpSymbol: 'HD-HUSD LP',
    lpAddresses: {
      128: '0x085D8cc74230440591073c298117AFF1aAc54D6e',
      256: '',
    },
    token: tokens.husd,
    quoteToken: tokens.hd,
    farmCategory: FarmCategory.HD,
  },
  {
    pid: 3,
    lpSymbol: 'HD-HDT LP',
    lpAddresses: {
      128: '0xfc718634DB3e0d178c291De69F27E0AB9D32ca07',
      256: '',
    },
    token: tokens.hdt,
    quoteToken: tokens.hd,
    farmCategory: FarmCategory.HD,
  },
  {
    pid: 4,
    lpSymbol: 'HD-ETH LP',
    lpAddresses: {
      128: '0x2c7eA16f81986a04B3A3Aa9f95631733D3d07cFd',
      256: '',
    },
    token: tokens.eth,
    quoteToken: tokens.hd,
    farmCategory: FarmCategory.HD,
  },
  {
    pid: 5,
    lpSymbol: 'HD-HT LP',
    lpAddresses: {
      128: '0x8F593038Ab8F85bc68DE3F3D7982E9199898EF13',
      256: '',
    },
    token: tokens.wht,
    quoteToken: tokens.hd,
    farmCategory: FarmCategory.HD,
  },
  {
    pid: 6,
    lpSymbol: 'HD-HPT LP',
    lpAddresses: {
      128: '0x397d53b4F599D456Ea09734BdFe93D35A2c20050',
      256: '',
    },
    token: tokens.hpt,
    quoteToken: tokens.hd,
    farmCategory: FarmCategory.HD,
  },
  {
    pid: 7,
    lpSymbol: 'HD-BOO LP',
    lpAddresses: {
      128: '0x0B357bf28B57800E73fF4da867b09930cBaddc85',
      256: '',
    },
    token: tokens.boo,
    quoteToken: tokens.hd,
    farmCategory: FarmCategory.HD,
  },
  {
    pid: 8,
    lpSymbol: 'HD-MDX LP',
    lpAddresses: {
      128: '0x761D5B3240E54bD4Cda18b8f7ffa5B9bc2A820A8',
      256: '',
    },
    token: tokens.mdx,
    quoteToken: tokens.hd,
    farmCategory: FarmCategory.HD,
  },
  {
    pid: 9,
    lpSymbol: 'HD-HDOT LP',
    lpAddresses: {
      128: '0x67C821ad2b76Eb0482191Bc182A9D3db420Df230',
      256: '',
    },
    token: tokens.hdot,
    quoteToken: tokens.hd,
    farmCategory: FarmCategory.HD,
  },
  {
    pid: 10001,
    lpSymbol: 'HDT-HT LP',
    lpAddresses: {
      128: '0x213cB7E549faE13717130b139C5F2D2F919792a8',
      256: '',
    },
    token: tokens.hdt,
    quoteToken: tokens.wht,
    farmCategory: FarmCategory.HDT,
  },
  {
    pid: 10002,
    lpSymbol: 'HDT-ETH LP',
    lpAddresses: {
      128: '0xfdD587baC04Dce481AEbF225BFAE8214D06b6C24',
      256: '',
    },
    token: tokens.hdt,
    quoteToken: tokens.eth,
    farmCategory: FarmCategory.HDT,
  },
  {
    pid: 10003,
    lpSymbol: 'HDT-HD LP',
    lpAddresses: {
      128: '0xfc718634DB3e0d178c291De69F27E0AB9D32ca07',
      256: '',
    },
    token: tokens.hdt,
    quoteToken: tokens.hd,
    farmCategory: FarmCategory.HDT,
  },
  {
    pid: 10004,
    lpSymbol: 'HDT-HUSD LP',
    lpAddresses: {
      128: '0x4fE1D8753C6f4a07e84D3fD2B69B0Aa476c93524',
      256: '',
    },
    token: tokens.husd,
    quoteToken: tokens.hdt,
    farmCategory: FarmCategory.HDT,
  },
  {
    pid: 10005,
    lpSymbol: 'HDT-USDT LP',
    lpAddresses: {
      128: '0xF79B742A21E05f8DBEE896Ec3Ce838149272Cf4F',
      256: '',
    },
    token: tokens.hdt,
    quoteToken: tokens.usdt,
    farmCategory: FarmCategory.HDT,
  },
  {
    pid: 10006,
    lpSymbol: 'HDT-FLUX LP',
    lpAddresses: {
      128: '0x3188472E34D266396aa1e80fc1741c4A4C0D526f',
      256: '',
    },
    token: tokens.hdt,
    quoteToken: tokens.flux,
    farmCategory: FarmCategory.HDT,
  },
  {
    pid: 10007,
    lpSymbol: 'HDT-MDX LP',
    lpAddresses: {
      128: '0x83f37b392B8Ac7d1e0AebA10C841FAE428447e24',
      256: '',
    },
    token: tokens.mdx,
    quoteToken: tokens.hdt,
    farmCategory: FarmCategory.HDT,
  },
  {
    pid: 10008,
    lpSymbol: 'HDT-BOO LP',
    lpAddresses: {
      128: '0x06d2698588A211013A3383396b043096eAb3Df4e',
      256: '',
    },
    token: tokens.hdt,
    quoteToken: tokens.boo,
    farmCategory: FarmCategory.HDT,
  },
  {
    pid: 20001,
    lpSymbol: 'BKC-HD LP',
    lpAddresses: {
      128: '0x2b0225c98DCBd6127E59dc0741448d468DF21e40',
      256: '',
    },
    token: tokens.bkc,
    quoteToken: tokens.hd,
    farmCategory: FarmCategory.BKC,
    isCommunity: true,
  },
  {
    pid: 20002,
    lpSymbol: 'BKC-USDT LP',
    lpAddresses: {
      128: '0xc3A8128869dE0F7371D5c41cf2728FE8a88a5C53',
      256: '',
    },
    token: tokens.bkc,
    quoteToken: tokens.usdt,
    farmCategory: FarmCategory.BKC,
    isCommunity: true,
  },
]

export default farms
