import images from '../../assets/images';
import styled from './connectWalletDesk.module.css'

import {Typography,Stack,Button,} from '@mui/material'
import api from '../../API/levstake.js'
import { useNavigate } from "react-router-dom";
import { useUser } from '../../Context/userContext.jsx'

const ConnectWalletDesk = () => {

  const navigate = useNavigate();
  const {logIn} = useUser();

  const connectAndSign = async () => {
 
    try {
  console.log(1);
      const wallet = await api.metaMaskConnecting()
console.log(wallet);

          const authString =  await api.getAuthData(wallet)


  if(authString){
  
    const signature = await api.signSign(authString,wallet)
   
    if(wallet){

      const token=  await api.getToken(wallet,signature)
    
      if(token){
       
        logIn(wallet)
        navigate("/levstake/dashboard", { replace: true });
    
    }
      
    }

 }

    } catch (err) {
      console.warn(`failed to connect..`, err);
    }
  };




    return (
        <section className={styled.section}>
         
        <div className={styled.box}>
        
            <Typography color='primary.main' variant='h2' sx={{fontSize:'32px',lineHeight:'35px',marginBottom:'32px'}}>{'Connect wallet to start'}</Typography>
            <Stack sx={{backgroundColor:'white',padding:'32px 24px',borderRadius:'8px',gap:'16px'}} justifyContent='space-between' alignItems='center' >
<img style={{width:'152px',height:'28px'}}  src={images.metamask} alt="metamask" />
            <Button onClick={connectAndSign} variant="contained" sx={{backgroundColor:'purpleBG.main',padding:"12px 16px",borderRadius:'8px',display:'flex',border:'2px solid white',borderWidth:'0px','&.MuiButtonBase-root.MuiButton-root:hover':{backgroundColor:'#7A56F8'}}}><img style={{marginRight:'8px'}} src={images.hdmi} alt="hdmi"></img><Typography variant="subtitle1" sx={{fontSize:'14px',lineHeight:'16.24px',color:'primary.main',fontWeight:'500'}} > {'Connect wallet'}</Typography></Button>
            </Stack>
        </div>
       
        </section>
    );
}

export default ConnectWalletDesk;
