import { Button, Typography } from "@mui/material";
import HeroCard from "../../components/HeroCard/HeroCard.jsx";
import images from "../../assets/images.js";
import styled from './Hero.module.css'
const Hero = () => {
    return (
        <div className="box">
           <HeroCard></HeroCard> 
           <h1  className={styled.text} >Decentralized Leveraged Staking at Levstake</h1>
           <Typography variant="h2" color='primary' sx={{fontSize:'24px',lineHeight:'29px',marginBottom:'24px'}} >Boost your staking income up to 5x and Earn 105% Yearly</Typography>
           <Button  variant="contained" sx={{backgroundColor:'purpleBG.main',padding:"12px 16px",borderRadius:'8px',display:'flex',alignItems:'center'}}> <img src={images.rocket} alt="rocket" /><Typography variant="subtitle1" sx={{fontSize:'14px',lineHeight:'16px',marginLeft:'16px'}} color="primary">Start leveraged staking</Typography></Button>
        </div>
    );
}

export default Hero;
