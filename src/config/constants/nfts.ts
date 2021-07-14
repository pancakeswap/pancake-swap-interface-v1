import { Nft, NftSource, NftType } from './types'

export const IPFS_GATEWAY = ''

export const nftSources: NftSource = {
  [NftType.PANCAKE]: {
    address: {
      128: '0x68E0D2c403Fd6b29Bb622cdD59B2B3e78ec0d115',
      256: '',
    },
    identifierKey: 'image',
  },
}

const Nfts: Nft[] = [
  {
    name: 'Swapsies',
    description: 'These travelers are the expedition teams that travel around the planet for the best swap.',
    images: {
      lg: 'swapsies-lg.png',
      md: 'swapsies-md.png',
      sm: 'swapsies-sm.png',
      ipfs: 'https://gateway.pinata.cloud/ipfs/QmQgo9mn7mBxBQhAJijddQ5tf1KWtbKBVfrVsYiefhoTDR/swapsies.png',
      blur: 'swapsies-blur.png',
    },
    sortOrder: 999,
    identifier: 'swapsies',
    type: NftType.PANCAKE,
    variationId: 0,
  },
  {
    name: 'Drizzle',
    description: "They're exploring several planets to find the best APY. Did you find the best Mining Pool?",
    images: {
      lg: 'drizzle-lg.png',
      md: 'drizzle-md.png',
      sm: 'drizzle-sm.png',
      ipfs: 'https://gateway.pinata.cloud/ipfs/QmQgo9mn7mBxBQhAJijddQ5tf1KWtbKBVfrVsYiefhoTDR/drizzle.png',
      blur: 'drizzle-blur.png',
    },
    sortOrder: 999,
    identifier: 'drizzle',
    type: NftType.PANCAKE,
    variationId: 1,
  },
  {
    name: 'Blueberries',
    description: "This planet is composed of blueberry's primitive gemstones, which are primarily used as a base material for Mining tools.",
    images: {
      lg: 'blueberries-lg.png',
      md: 'blueberries-md.png',
      sm: 'blueberries-sm.png',
      ipfs: 'https://gateway.pinata.cloud/ipfs/QmQgo9mn7mBxBQhAJijddQ5tf1KWtbKBVfrVsYiefhoTDR/blueberries.png',
      blur: 'blueberries-blur.png',
    },
    sortOrder: 999,
    identifier: 'blueberries',
    type: NftType.PANCAKE,
    variationId: 2,
  },
  {
    name: 'Circular',
    description: "This is the basic concept of all decentralized trading methods, and the essence that enables the circulation of all materials.",
    images: {
      lg: 'circular-lg.png',
      md: 'circular-md.png',
      sm: 'circular-sm.png',
      ipfs: 'https://gateway.pinata.cloud/ipfs/QmQgo9mn7mBxBQhAJijddQ5tf1KWtbKBVfrVsYiefhoTDR/circular.png',
      blur: 'circular-blur.png',
    },
    sortOrder: 999,
    identifier: 'circular',
    type: NftType.PANCAKE,
    variationId: 3,
  },
  {
    name: 'Sparkle',
    description: 'This is a visible form of energy sources for all decentralized transactions. Fundamental energy materials converge, enabling the flow of decentralized finance.',
    images: {
      lg: 'sparkle-lg.png',
      md: 'sparkle-md.png',
      sm: 'sparkle-sm.png',
      ipfs: 'https://gateway.pinata.cloud/ipfs/QmQgo9mn7mBxBQhAJijddQ5tf1KWtbKBVfrVsYiefhoTDR/sparkle.png',
      blur: 'sparkle-blur.png',
    },
    sortOrder: 999,
    identifier: 'sparkle',
    type: NftType.PANCAKE,
    variationId: 4,
  },
]

export default Nfts
