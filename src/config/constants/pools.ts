import tokens from './tokens'
import { PoolConfig, PoolCategory } from './types'

const pools: PoolConfig[] = [
  {
    sousId: 0,
    stakingToken: tokens.cake,
    earningToken: tokens.cake,
    contractAddress: {
      256: '',
      128: '0xd7Fc4D5f46F82DC536c9Ccaf1e9B053BeEd4C4dE',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '0.05',
    sortOrder: 0,
    isFinished: false,
  },
  {
    sousId: 1,
    stakingToken: tokens.hdt,
    earningToken: tokens.hdt,
    contractAddress: {
      128: '0x7AC312Df068F451EEC3f7f5C0e6a33eB37543A2F',
      256: '',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '0.234',
    sortOrder: 1,
    isFinished: false,
  },
  {
    sousId: 2,
    stakingToken: tokens.hd,
    earningToken: tokens.hdt,
    contractAddress: {
      128: '0xa90600503BCcED50F24A5D717E50Cfa6831dd7Ab',
      256: '',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '0.156',
    sortOrder: 2,
    isFinished: false,
  },
  {
    sousId: 3,
    stakingToken: tokens.ht,
    earningToken: tokens.hdt,
    contractAddress: {
      128: '0xF0d41c322C79969ea29a21e70f5F72cc2D5b74D9',
      256: '',
    },
    poolCategory: PoolCategory.HT,
    harvest: true,
    tokenPerBlock: '0.156',
    sortOrder: 3,
    isFinished: false,
  },
  {
    sousId: 4,
    stakingToken: tokens.hpt,
    earningToken: tokens.hdt,
    contractAddress: {
      128: '0x9a3A64E8B48b87f273b91E380620FB01D51DDb70',
      256: '',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '0.156',
    sortOrder: 4,
    isFinished: false,
  },
  {
    sousId: 5,
    stakingToken: tokens.husd,
    earningToken: tokens.hdt,
    contractAddress: {
      128: '0xc4da4192cB9EB6f37a406D3f3CAb2BB183A2fe73',
      256: '',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '0.156',
    sortOrder: 5,
    isFinished: false,
  },
  {
    sousId: 6,
    stakingToken: tokens.hbtc,
    earningToken: tokens.hdt,
    contractAddress: {
      128: '0xD0E64c72bE0ebcD6685D79C48b2b5DA9D99B2D6f',
      256: '',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '0.156',
    sortOrder: 6,
    isFinished: false,
  },
  {
    sousId: 7,
    stakingToken: tokens.boo,
    earningToken: tokens.hdt,
    contractAddress: {
      128: '0x71A06c2611bBeC2dFAaed0da1b7b090D40Eba395',
      256: '',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '0.156',
    sortOrder: 7,
    isFinished: false,
  },
]

export default pools
