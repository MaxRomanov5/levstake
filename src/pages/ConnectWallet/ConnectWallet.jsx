import images from '../../assets/images';
import styled from './ConnectWallet.module.css'
import {useState} from 'react'
import {Typography,Stack,Button} from '@mui/material'
import api from '../../API/levstake.js'
import { useNavigate } from "react-router-dom";
import { useUser } from '../../Context/userContext.jsx'
import { WalletConnectModal } from 'https://unpkg.com/@walletconnect/modal'
import { useSDK } from '@metamask/sdk-react';

const ConnectWallet = () => {



  const navigate = useNavigate();
  const {logIn,} = useUser()

const [click, setclick] = useState(0);

// const { address, isConnecting, isDisconnected } = useAccount()


  const { sdk } = useSDK();


// console.log(sdk);
  const connectAndSign = async () => {
    try {
      

  console.log(sdk);
     const mobWallet =  await sdk.connect()
      // setclick(1)
      const authString = await api.getAuthData(mobWallet)
      // console.log(authString);
      // const signResult = await sdk.connectAndSign({
      //   msg: authString,
      // });

if(signResult){

  const token=  await api.getToken(mobWallet[0],signResult)
        if(token){
         
          logIn(mobWallet[0])
          navigate("/levstake/dashboard", { replace: true });
          return
      }

    


 }


     }
    
     catch (err) {
      console.warn(`failed to connect..`, err);
    }
  };


//   // const handleConnectAndSign = async () => {
//   //   try {
//   //     const message = "Your message here";
//   //     const signature = await sdk.connectAndSign({ msg: message });
//   //    setAccount(signature)
//   //   } catch (error) {
//   //     console.error("Error in signing:", error);
//   //   }
//   // }

// // const signMessage = useSignMessage({
// //   message: 'gm wagmi frens',
// //   onSuccess(data) {
// //     // console.log(data)
// //   },
// // })


// async function mainConnecting (){



// //   try {

//       await open()

// //     const wallet = await api.metaMaskConnecting() 


// //     const authString = await api.getAuthData()

// //   if(authString){
  
// //     // const signature = signMessage.signMessage({message:authString})
   
// //     if(address){
// //       const token=  await api.getToken(address,signature)
    
// //       if(token){
       
// //         logIn()
// //         navigate("/levstake/dashboard", { replace: true });
    
// //     }
      
// //     }

// //  }



// //   } catch (error) {
// //     if(error.message ==="Cannot read properties of undefined (reading 'request')" && !isLoggedIn){


// //     }
// //     console.log(error.message);
// //   }
  

// }



    return (
        <section className={styled.section}>
         <div></div>
        <div className={styled.box}>
        
            <Typography color='primary.main' variant='h2' sx={{fontSize:'32px',lineHeight:'35px',marginBottom:'32px'}}>{click ===0 ?'Connect wallet to start mob' : 'Please Sign'}</Typography>
            <Stack sx={{backgroundColor:'white',padding:'32px 24px',borderRadius:'8px',gap:'16px'}} justifyContent='space-between' alignItems='center' >
<img style={{width:'152px',height:'28px'}}  src={images.metamask} alt="metamask" />
            <Button onClick={connectAndSign} variant="contained" sx={{backgroundColor:'purpleBG.main',padding:"12px 16px",borderRadius:'8px',display:'flex',border:'2px solid white',borderWidth:'0px','&.MuiButtonBase-root.MuiButton-root:hover':{backgroundColor:'#7A56F8'}}}><img style={{marginRight:'8px'}} src={images.hdmi} alt="hdmi"></img><Typography variant="subtitle1" sx={{fontSize:'14px',lineHeight:'16.24px',color:'primary.main',fontWeight:'500'}} > {click ===0 ?'Connect wallet':'Sign'}</Typography></Button>
            </Stack>
        </div>
        {/* {<ModalConnect></ModalConnect>} */}
        </section>
    );
}

export default ConnectWallet;
