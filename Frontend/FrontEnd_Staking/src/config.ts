import { http, createConfig } from 'wagmi'
import {sepolia } from 'wagmi/chains'
import { metaMask,injected } from 'wagmi/connectors'

export const config = createConfig({
  connectors:[injected(),metaMask()],
  chains: [sepolia],
  transports: {
    //[mainnet.id]: http("https://eth-mainnet.g.alchemy.com/v2/66e1v5MpU3YrPMoPIT3I6vMU1XL5tW-f"),
    [sepolia.id]: http("https://eth-sepolia.g.alchemy.com/v2/66e1v5MpU3YrPMoPIT3I6vMU1XL5tW-f"),
  },
})