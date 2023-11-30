import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from '@mui/material/styles';
import { UserProvider } from './Context/userContext.jsx';
import theme from './theme/index.js'
import { createWeb3Modal, defaultWagmiConfig } from '@web3modal/wagmi/react'

import { WagmiConfig } from 'wagmi'
import { arbitrum, mainnet } from 'viem/chains'

// 1. Get projectId at https://cloud.walletconnect.com
const projectId = '2e39f4ecdaa2c19933cac1ffee100b74'
const metadata = {
  name: 'Web3Modal',
  description: 'Web3Modal Example',
  url: 'https://maxromanov5.github.io/levstake/',
  icons: ['https://avatars.githubusercontent.com/u/37784886']
}
const chains = [mainnet, arbitrum]
const wagmiConfig = defaultWagmiConfig({ chains, projectId, metadata })

createWeb3Modal({ wagmiConfig, projectId, chains })

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

<UserProvider>
    <ThemeProvider theme={theme}>
    <BrowserRouter >
    <WagmiConfig config={wagmiConfig}>
    <App />
    </WagmiConfig>
    </BrowserRouter>
    </ThemeProvider>
    </UserProvider>
  </React.StrictMode>
)
