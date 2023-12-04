import {  Stack, Typography,useTheme,useMediaQuery } from "@mui/material";
import images from "../../assets/images";
import styled from './StakingCard.module.css'
import { NavLink } from "react-router-dom";
import links from '../../helpers/links.js'
import { useUser } from '../../Context/userContext.jsx'
const StackingCard = () => {

    const { isLoggedIn } = useUser();
    const theme = useTheme();
    const mob = useMediaQuery(theme.breakpoints.down("md"));
    return (
        <div className={styled.card}>
            <div className={styled.cardWrap}>
            <Stack sx={{marginBottom:'32px'}}>
          <img style={{marginBottom:'8px',height:'48px',width:'48px'}} src={images.ethereum} alt="coin" />  
          <Typography  color='primary.main' variant="p">BtC</Typography>
          
          </Stack>
          <Stack sx={{marginLeft:'32px'}}>
          <Typography sx={{marginBottom:'12px'}} variant="h2" color='success.main'>8%</Typography>
          <Typography color='primary.main' sx={{fontSize:'14px'}} variant='caption'>daily</Typography>
          </Stack>
          </div>
          <NavLink to={links(isLoggedIn,mob)}> <button  className={styled.btn}><img src={images.rocketPrpl} style={{marginRight:'16px'}} alt="rocket" /> Flexible Stake</button></NavLink>
        </div>
    );
}

export default StackingCard;
