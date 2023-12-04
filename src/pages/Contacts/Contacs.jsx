

import { Typography,useMediaQuery } from "@mui/material";
import FeedbackForm from "../../components/FeedbackForm/FeedbackForm";
import { useTheme } from '@emotion/react';

import { useUser } from "../../Context/userContext";
import api from '../../API/levstake.js'



const Contacts = () => {
    const theme = useTheme()
const desk = useMediaQuery(theme.breakpoints.up('lg'))
const { logOut } = useUser()

// api.getPositions().then(data=>{console.log(data)})
//  api.blockChainData().then(
//     data=>{
//         console.log(data[1].data.abi)
//         const web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:5173'));
// console.log(web3);




// const contract = new web3.eth.Contract(data[1].data.abi,'0xC8324c4bd3C3d6388F6DB7572B0Dd2cc0638f000')
// contract.methods.
// contract.methods.getMessage().call((error, result) => {
//     console.log(result);
//   });


        
//      }
// )

// console.log(ethers);
// api.getPositions().then(data=>{console.log(data)})
 
async function main() {

  
       
}


// main()

    return (
        <div style={{paddingTop:'94px',maxWidth:'600px',margin:'0 auto'}}>
           
   <Typography sx={{marginBottom:'24px',textAlign:'center',...(desk&&{fontSize:'64px',lineHeight:'70px'})}} color='primary.main' variant="h2">Need help?</Typography> 
           <Typography sx={{marginBottom:'80px',textAlign:'center'}} color='primary.main' variant="subtitle1" >Ut vestibulum, tortor faucibus eu. Lacus, neque commodo ipsum amet. Consectetur vitae faucibus facilisi nulla sollicitudin malesuada tristique. Venenatis libero, pellentesque pharetra molestie in bibendum.</Typography>
   <FeedbackForm></FeedbackForm>
        </div>
    );
}

export default Contacts;

