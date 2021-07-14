import tokens from './tokens'
import farms from './farms'

const cakeBnbLpToken = {
  symbol: farms[5].lpSymbol,
  address: farms[5].lpAddresses,
  decimals: 18,
}


const ifos = [
  {
    id: 'hdt',
    address: '0x84b0c933E236D604069489ef0dE4821bb6bAd7E4',
    isActive: true,
    name: 'HDTest (HDT)',
    poolBasic: {
      saleAmount: '375,000 HDT',
      raiseAmount: '$750,000',
      cakeToBurn: '$375,000',
      distributionRatio: 0.3,
    },
    poolUnlimited: {
      saleAmount: '875,000 HDT',
      raiseAmount: '$2,500,000',
      cakeToBurn: '$1,250,000',
      distributionRatio: 0.7,
    },
    currency: cakeBnbLpToken,
    token: tokens.hdt,
    releaseBlockNumber: 6566572,
    campaignId: '111110000',
    articleUrl: '#',
    tokenOfferingPrice: 2.0,
    version: 2,
  },
]

export default ifos
