import { ChainId } from '@pancakeswap/sdk'
import MULTICALL_ABI from './abi.json'

const MULTICALL_NETWORKS: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: '0xb340bfa90D673f2FC273661D88B8E8C071713057',
  [ChainId.TESTNET]: '0x301907b5835a2d723Fe3e9E8C5Bc5375d5c1236A' // TODO
}

export { MULTICALL_ABI, MULTICALL_NETWORKS }
