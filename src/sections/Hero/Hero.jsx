import { Button, Typography,useMediaQuery } from "@mui/material";
import HeroCard from "../../components/HeroCard/HeroCard.jsx";
import images from "../../assets/images.js";
import styled from './Hero.module.css'
import { useTheme } from '@emotion/react';
import { NavLink } from "react-router-dom";
import links from '../../helpers/links.js'
import { useUser } from '../../Context/userContext.jsx'
const Hero = () => {
    const theme = useTheme()
    const desk = useMediaQuery(theme.breakpoints.up('lt'))

    const { isLoggedIn } = useUser();

    const mob = useMediaQuery(theme.breakpoints.down("md"));
    return (
        <div className={styled.box} >
           <HeroCard></HeroCard> 
           <div className={styled.textBlock}>
           <h1  className={styled.text} >Decentralized Leveraged Staking at Levstake</h1>
           <Typography variant="h2" color='primary' sx={{fontSize:'24px',lineHeight:'29px',marginBottom:'24px',...(desk&&{fontSize:'32px'})}} >Boost your staking income up to 5x and Earn 105% Yearly</Typography>
           <NavLink to={links(isLoggedIn,mob)}> <Button  variant="contained" sx={{backgroundColor:'purpleBG.main',padding:"12px 16px",borderRadius:'8px',display:'flex',alignItems:'center','&.MuiButtonBase-root.MuiButton-root:hover':{backgroundColor:'#7A56F8'}}}> <img src={images.rocket} alt="rocket" /><Typography variant="subtitle1" sx={{fontSize:'14px',lineHeight:'16px',marginLeft:'16px'}} color="primary">Start leveraged staking</Typography></Button></NavLink>
           </div>
        </div>
    );
}

export default Hero;
