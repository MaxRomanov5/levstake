import Hero from "../../sections/Hero/Hero.jsx";
import Advantages from "../../sections/Advantages/Advantages.jsx";
import StackingTable from '../../sections/StackingTable/StackingTable.jsx';
import { Button, Stack, Typography,useTheme,useMediaQuery } from "@mui/material";
import img from "../../assets/images";
import images from "../../assets/images";
import StackingAssetsSection from "../../sections/StackingAssetsSection/StackingAssetsSection.jsx";
import LiquidityPoolSection from "../../sections/LiquidityPoolSection/LiquidityPoolSection.jsx";
import { useUser } from '../../Context/userContext.jsx'
import { NavLink } from "react-router-dom";
import links from '../../helpers/links.js'
import {useState,useEffect} from 'react'
import api from '../../API/levstake.js'
const Home = () => {
  const { isLoggedIn } = useUser();
  const theme = useTheme();
  const mob = useMediaQuery(theme.breakpoints.down("md"));
  const [favpools, setFavPools] = useState([]);
  const [pools, setPools] = useState([]);
async function fetchFavPools() {
    const res = await api.getPools(true)
    setFavPools(res)
}
async function fetchPools() {
    const res = await api.getPools()
    setPools(res)
}
useEffect(() => {
    fetchFavPools()
    fetchPools()
}, []);
 




    return (
        <div>
         <Hero pool={favpools}></Hero>
         <Advantages></Advantages>
         <StackingTable pools={favpools}></StackingTable>
         {pools &&<StackingAssetsSection pools={pools}></StackingAssetsSection>}
        {/* <LiquidityPoolSection ></LiquidityPoolSection> */}
         <NavLink to='/levstake/'>
         <Stack sx={{marginBottom:'24px'}} justifyContent='left' alignItems='center' flexDirection='row' height='40px' flexWrap='wrap' >
            <img style={{height:'inherit',marginRight:'14px'}} src={img.levlion} alt="levstake" />
            <img style={{height:'80%'}} src={img.levtext} alt="levstake" />
           </Stack>
           </NavLink>
           <Stack flexDirection='row' sx={{marginBottom:'24px'}}>
           <NavLink to={links(isLoggedIn,mob)}> <Button variant="contained" sx={{marginRight:'16px', backgroundColor:'purpleBG.main',padding:"12px 16px",borderRadius:'8px',display:'flex'}}><img style={{marginRight:'8px'}} src={images.buySell} alt="digitalKey"></img><Typography variant="subtitle1" sx={{fontSize:'14px',lineHeight:'16.24px',color:'primary.main',fontWeight:'500'}}>BUY/SELL</Typography></Button></NavLink>
          <NavLink to={links(isLoggedIn,mob)}> <Button variant="contained" sx={{backgroundColor:'transparent',padding:"10px 16px",borderRadius:'8px',display:'flex',border:'2px solid white'}}><img style={{marginRight:'8px'}} src={images.hdmi} alt="hdmi"></img><Typography variant="subtitle1" sx={{fontSize:'14px',lineHeight:'16.24px',color:'primary.main',fontWeight:'500'}}>Connect wallet</Typography></Button></NavLink>
           </Stack>
        
        </div>
    );
}

export default Home;
