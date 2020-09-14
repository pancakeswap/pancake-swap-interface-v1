import { ChainId } from '@uniswap/sdk'
import MULTICALL_ABI from './abi.json'

const MULTICALL_NETWORKS: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: '0xeefBa1e63905eF1D7ACbA5a8513c70307C1cE441', // TODO
  [ChainId.BSCTESTNET]: '0x67ADCB4dF3931b0C5Da724058ADC2174a9844412'
}

export { MULTICALL_ABI, MULTICALL_NETWORKS }
