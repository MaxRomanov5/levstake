import { Box, Stack, Typography } from "@mui/material";
import images from "../../assets/images";

const Advantages = () => {
    
    return (
<Stack alignItems='center' sx={{marginTop:'56px', }}> 
    <Box sx={{maxWidth:'396px',width:'100%', borderRadius:'8px',position:'relative',padding:'32px',backgroundColor:'primary.main',zIndex:'4',marginBottom:'24px'}}><Typography color='secondary' variant="p" sx={{marginBottom:'8px'}}>Buy staking assets directly at Levstake</Typography><Typography color='secondary' variant="subtitle1" sx={{fontSize:'14px',fontWeight:'400',lineHeight:'24px'}}>Some description</Typography><img style={{position:'absolute',bottom:'-50px',right:'25px',zIndex:'4'}} src={images.arrow} alt="arrow" /></Box>
    <Box sx={{maxWidth:'396px',width:'100%', borderRadius:'8px',position:'relative',padding:'32px',backgroundColor:'primary.main',zIndex:'3',marginBottom:'24px'}}><Typography color='secondary' variant="p" sx={{marginBottom:'8px'}}>Choose your leverage</Typography><Typography color='secondary' variant="subtitle1" sx={{fontSize:'14px',fontWeight:'400',lineHeight:'24px'}}>Some description</Typography><img style={{position:'absolute',bottom:'-50px',right:'25px',zIndex:'4'}} src={images.arrow} alt="arrow" /></Box>
    <Box sx={{maxWidth:'396px',width:'100%', borderRadius:'8px',position:'relative',padding:'32px',backgroundColor:'primary.main',zIndex:'2'}}><Typography color='secondary' variant="p" sx={{marginBottom:'8px'}}>Join the staking contract</Typography><Typography color='secondary' variant="subtitle1" sx={{fontSize:'14px',fontWeight:'400',lineHeight:'24px'}}>Some description</Typography></Box>
</Stack>
    )
}

export default Advantages;
