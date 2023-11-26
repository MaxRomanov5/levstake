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

const Header = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      <header
        style={{
          padding: "16px 0",
          display: "flex",
          marginBottom:'48px',
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <NavLink to='/levstake/'>   <Logo isLogin={true} /></NavLink>
     

        {matches ? (
          <MobileMenu />
        ) : (
          <>
          <div style={{display:'flex',alignItems:'center',justifyContent:'right'}}>
            <nav style={{ display: "flex", gap: 15 }}>
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
           <BuySellBtn style={{marginLeft:'64px'}} text={"Buy/Sell"}></BuySellBtn>
            </div>
          </>
        )}
      </header>
      <Routes>
        <Route path="/levstake">
        <Route path="/levstake/" element={<Home />} />
        <Route path="/levstake/contacts" element={<Contacts />} />
        <Route path="/levstake/feez" element={<Feez />} />
        <Route path="/levstake/faq" element={<FAQ />} />
        <Route path="/levstake/connectWallet" element={<ConnectWallet/>}></Route>
        <Route
          path="/levstake/dashboard"
          element={
            <Auth>
              <Dashboard />{" "}
            </Auth>
          }
        />
        </Route>
      </Routes>
      
    </>
  );
};

export default Header;
