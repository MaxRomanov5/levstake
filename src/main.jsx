import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from '@mui/material/styles';
import { UserContext } from "path/to/userContext.js";
import theme from './theme/index.js'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserContext.Provider value={{ username: "Mango" }}>

    <ThemeProvider theme={theme}>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </ThemeProvider>
    </UserContext.Provider>
  </React.StrictMode>
)
