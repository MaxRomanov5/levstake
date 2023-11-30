import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from '@mui/material/styles';
import { UserProvider } from './Context/userContext.jsx';
import theme from './theme/index.js'


import { MetaMaskProvider } from '@metamask/sdk-react';



ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
 <MetaMaskProvider debug={false} sdkOptions={{
      logging:{
          developerMode: false,
        },
       
        checkInstallationImmediately: false, // This will automatically connect to MetaMask on page load
        i18nOptions: {
          enabled: true,
        },
        dappMetadata: {
          name: "Demo React App",
          url: window.location.protocol + '//' + window.location.host,
        }
    }}>
<UserProvider>
    <ThemeProvider theme={theme}>
    <BrowserRouter >
   
    <App />

    </BrowserRouter>
    </ThemeProvider>
    </UserProvider>
    </MetaMaskProvider>
  </React.StrictMode>
)