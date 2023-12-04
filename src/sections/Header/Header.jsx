import { Routes, Route, NavLink } from "react-router-dom";
import Home from "../../pages/Home/Home.jsx";
import Contacts from "../../pages/Contacts/Contacs.jsx";
import Feez from "../../pages/Feez/Feez.jsx";
import FAQ from "../../pages/FAQ/FAQ.jsx";
import Logo from "../../components/Logo/Logo.jsx";
import Auth from "../../components/Auth/Auth.jsx";
import Dashboard from "../../pages/Dashboard/Dashboard.jsx";
import BuySellBtn from "../../components/BuySellBtn/BuySellBtn.jsx";
import MobileMenu from "../../components/MobileMenu/MobileMenu.jsx";
import { Typography, useMediaQuery, useTheme } from "@mui/material";
import styled from "./Header.module.css";
import ConnectWallet from "../../pages/ConnectWallet/ConnectWallet.jsx";
import ConnectWalletDesk from "../../components/ConnectWalletDesk/ConnectWalletDesk.jsx";
import UserBlock from "../../components/UserBlock/UserBlock.jsx";
import { MetaMaskProvider } from '@metamask/sdk-react';
const Header = ({isLogin}) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  
  return (
    <>
      <header
        style={{
          padding: "16px 0",
          display: "flex",
        
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <NavLink to='/levstake/'>   <Logo isLogin={true} /></NavLink>
     

        {matches ? (
          <MobileMenu isLogin={isLogin} />
        ) : (
          <>
          <div style={{display:'flex',alignItems:'center',justifyContent:'right',gap:'50px'}}>
            <nav style={{ display: "flex", gap: 15 }}>
             
              <NavLink to="/levstake/">
                <Typography
                  variant="subtitle1"
                  className={styled.current}
                  sx={{
                    fontSize: "16px",
                    fontWeight: "500",
                    color: "primary.main",
                    lineHeight: "16px",
                    padding: "8px",
                  }}
                >
                  Home<div className={styled.line}></div>
                </Typography>
              </NavLink>
              <NavLink to="/levstake/contacts">
                <Typography
                  variant="subtitle1"
                  className={styled.current}
                  sx={{
                    fontSize: "16px",
                    fontWeight: "500",
                    color: "primary.main",
                    lineHeight: "16px",
                    padding: "8px",
                  }}
                >
                  Contacts<div className={styled.line}></div>
                </Typography>
              </NavLink>
              <NavLink to="/levstake/feez">
                <Typography
                  variant="subtitle1"
                  className={styled.current}
                  sx={{
                    fontSize: "16px",
                    fontWeight: "500",
                    color: "primary.main",
                    lineHeight: "16px",
                    padding: "8px",
                  }}
                >
                  Fee structure<div className={styled.line}></div>
                </Typography>
              </NavLink>
              <NavLink to="/levstake/faq">
                <Typography
                  variant="subtitle1"
                  className={styled.current}
                  sx={{
                    fontSize: "16px",
                    fontWeight: "500",
                    color: "primary.main",
                    lineHeight: "16px",
                    padding: "8px",
                  }}
                >
                  FAQ<div className={styled.line}></div>
                </Typography>
              </NavLink>
              {/* <NavLink to="/dashboard">Dashboard</NavLink> */}
            </nav>
           {isLogin ? <UserBlock></UserBlock>:<BuySellBtn style={{marginLeft:'64px'}} text={"Buy/Sell"}></BuySellBtn>}
            </div>
          </>
        )}
      </header>
      <Routes>
        
        <Route path="/levstake/" element={<Home />} />
        <Route path="/levstake/contacts" element={<Contacts />} />
        <Route path="/levstake/feez" element={<Feez />} />
        <Route path="/levstake/faq" element={<FAQ />} />

       
        <Route path="/levstake/connectWallet" element={ <MetaMaskProvider debug={false} sdkOptions={{
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
    }}><ConnectWallet/> </MetaMaskProvider>}></Route>
       
        
        <Route path="/levstake/connectWalletDesk" element={<ConnectWalletDesk/>}></Route>

        <Route
          path="/levstake/dashboard"
          element={
            <Auth>
              <Dashboard />{" "}
            </Auth>
          }
        />
        
      </Routes>
      
    </>
  );
};

export default Header;
