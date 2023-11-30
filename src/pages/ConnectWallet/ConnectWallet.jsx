import images from '../../assets/images';
import styled from './ConnectWallet.module.css'
import {useState,useEffect} from 'react'
import {Typography,Stack,Button,useMediaQuery,useTheme} from '@mui/material'
import api from '../../API/levstake.js'
import { useNavigate } from "react-router-dom";
import { useUser } from '../../Context/userContext.jsx'
import ModalConnect from '../../components/ModalConnect/ModalConnect.jsx'
import { useWeb3Modal,useWeb3ModalState } from '@web3modal/wagmi/react'
import SignClient from '@walletconnect/sign-client'
import { useAccount } from 'wagmi'
import { useSignMessage } from 'wagmi'
const ConnectWallet = () => {


  const theme= useTheme()
  const mob = useMediaQuery(theme.breakpoints.down('md'))
  const navigate = useNavigate();
  const {logIn,isLoggedIn} = useUser()



// const [isOpen, setIsOpen] = useState(false);
const { open, close } = useWeb3Modal()

const { address, isConnecting, isDisconnected } = useAccount()


const signMessage = useSignMessage({
  message: 'gm wagmi frens',
  onSuccess(data) {
    console.log('Success', data)
  },
})

useEffect(() => {
  console.log(!isConnecting);
if(!isConnecting){

  secConnecting(address)

}
}, [isConnecting]);

async function secConnecting (address){
  if(address){

    const authString = await api.getAuthData()
  
    if(authString){
    if(mob){
      window.location.href = 'https://metamask.app.link/dapp/maxromanov5.github.io/levstake/'
    }
      const signature = await api.signSign(authString,address)
   
      if(signature){
     
    const token=  await api.getToken(address,signature)
     if(token){
     
      logIn()
      navigate("/levstake/dashboard", { replace: true });
     }
      
      }
    }
   }
}
async function mainConnecting (){

  try {

      await open()

    // const wallet = await api.metaMaskConnecting() 
 if(address){

  const authString = await api.getAuthData()

  if(authString){
  
    const signature = signMessage.signMessage()
 
    if(signature){
   
  const token=  await api.getToken(address,signature)
   if(token){
   
    logIn()
    navigate("/levstake/dashboard", { replace: true });
   }
    
    }
  }
 }

  } catch (error) {
    if(error.message ==="Cannot read properties of undefined (reading 'request')" && !isLoggedIn){


    }
    console.log(error.message);
  }
  

}


    return (
        <section className={styled.section}>
        <div className={styled.box}>
            <Typography color='primary.main' variant='h2' sx={{fontSize:'32px',lineHeight:'35px',marginBottom:'32px'}}>Connect wallet to start</Typography>
            <Stack sx={{backgroundColor:'white',padding:'32px 24px',borderRadius:'8px',gap:'16px'}} justifyContent='space-between' alignItems='center' >
<img style={{width:'152px',height:'28px'}}  src={images.metamask} alt="metamask" />
            <Button onClick={()=>mainConnecting()} variant="contained" sx={{backgroundColor:'purpleBG.main',padding:"12px 16px",borderRadius:'8px',display:'flex',border:'2px solid white',borderWidth:'0px','&.MuiButtonBase-root.MuiButton-root:hover':{backgroundColor:'#7A56F8'}}}><img style={{marginRight:'8px'}} src={images.hdmi} alt="hdmi"></img><Typography variant="subtitle1" sx={{fontSize:'14px',lineHeight:'16.24px',color:'primary.main',fontWeight:'500'}} > Connect wallet</Typography></Button>
            </Stack>
        </div>
        {<ModalConnect></ModalConnect>}
        </section>
    );
}

export default ConnectWallet;
