import images from '../../assets/images';
import styled from './ConnectWallet.module.css'
import { useNavigate } from "react-router-dom";
import {Typography,Stack,Button} from '@mui/material'
import api from '../../API/levstake.js'
import { useUser } from '../../Context/userContext.jsx'
const ConnectWallet = () => {
  const navigate = useNavigate();
  const { logIn } = useUser();
// api.getPositions()
 
  
async function mainConnecting (){
  try {
    const wallet = await api.metaMaskConnecting()
 
    const authString = await api.getAuthData()
   
  
   const signature = await api.signSign(authString,wallet)

    await api.getToken(wallet,signature)
   
    logIn()
   navigate("/levstake/dashboard", { replace: true });
  } catch (error) {
    
    console.log(error);
  }
  

}






    return (
        <section className={styled.section}>
        <div className={styled.box}>
            <Typography color='primary.main' variant='h2' sx={{fontSize:'32px',lineHeight:'35px',marginBottom:'32px'}}>Connect wallet to start</Typography>
            <Stack sx={{backgroundColor:'white',padding:'32px 24px',borderRadius:'8px',gap:'16px'}} justifyContent='space-between' alignItems='center' >
<img style={{width:'152px',height:'28px'}}  src={images.metamask} alt="metamask" />
            <Button variant="contained" sx={{backgroundColor:'purpleBG.main',padding:"12px 16px",borderRadius:'8px',display:'flex',border:'2px solid white',borderWidth:'0px'}}><img style={{marginRight:'8px'}} src={images.hdmi} alt="hdmi"></img><Typography variant="subtitle1" sx={{fontSize:'14px',lineHeight:'16.24px',color:'primary.main',fontWeight:'500'}} onClick={()=>mainConnecting()}> Connect wallet</Typography></Button>
            </Stack>
        </div>
        </section>
    );
}

export default ConnectWallet;
