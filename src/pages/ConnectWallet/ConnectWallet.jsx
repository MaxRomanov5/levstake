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
import { useSDK } from '@metamask/sdk-react';

const ConnectWallet = () => {


  const theme= useTheme()
  const mob = useMediaQuery(theme.breakpoints.down('md'))
  const navigate = useNavigate();
  const {logIn,isLoggedIn} = useUser()

  

// const { address, isConnecting, isDisconnected } = useAccount()

const [account, setAccount] = useState('s');
  const { sdk, connected, connecting, provider, chainId } = useSDK();

  const connect = async () => {
    try {
      console.log(sdk);
     const a = await sdk.connect();
     setAccount(accounts[0]);
    } catch (err) {
      console.log(`failed to connect..`, err);
    }
  };


// const signMessage = useSignMessage({
//   message: 'gm wagmi frens',
//   onSuccess(data) {
//     // console.log(data)
//   },
// })


async function mainConnecting (){

  if(sdk){
    sdk.connect()
  }

//   try {

      await open()

//     const wallet = await api.metaMaskConnecting() 


//     const authString = await api.getAuthData()

//   if(authString){
  
//     // const signature = signMessage.signMessage({message:authString})
   
//     if(address){
//       const token=  await api.getToken(address,signature)
    
//       if(token){
       
//         logIn()
//         navigate("/levstake/dashboard", { replace: true });
    
//     }
      
//     }

//  }



//   } catch (error) {
//     if(error.message ==="Cannot read properties of undefined (reading 'request')" && !isLoggedIn){


//     }
//     console.log(error.message);
//   }
  

}



    return (
        <section className={styled.section}>
         
        <div className={styled.box}>
        <div>{account}</div>
            <Typography color='primary.main' variant='h2' sx={{fontSize:'32px',lineHeight:'35px',marginBottom:'32px'}}>Connect wallet to start</Typography>
            <Stack sx={{backgroundColor:'white',padding:'32px 24px',borderRadius:'8px',gap:'16px'}} justifyContent='space-between' alignItems='center' >
<img style={{width:'152px',height:'28px'}}  src={images.metamask} alt="metamask" />
            <Button onClick={connect} variant="contained" sx={{backgroundColor:'purpleBG.main',padding:"12px 16px",borderRadius:'8px',display:'flex',border:'2px solid white',borderWidth:'0px','&.MuiButtonBase-root.MuiButton-root:hover':{backgroundColor:'#7A56F8'}}}><img style={{marginRight:'8px'}} src={images.hdmi} alt="hdmi"></img><Typography variant="subtitle1" sx={{fontSize:'14px',lineHeight:'16.24px',color:'primary.main',fontWeight:'500'}} > Connect wallet</Typography></Button>
            </Stack>
        </div>
        {/* {<ModalConnect></ModalConnect>} */}
        </section>
    );
}

export default ConnectWallet;
