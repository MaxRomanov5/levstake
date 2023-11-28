import { Box, Stack, Typography,useMediaQuery } from "@mui/material";
import images from "../../assets/images";
import { useTheme } from '@emotion/react';
const Advantages = () => {
    const theme = useTheme()
const tab = useMediaQuery(theme.breakpoints.up('mt'))
const desk = useMediaQuery(theme.breakpoints.up('lt'))
    return (
<Stack alignItems='center' sx={{marginTop:'56px',...(tab&&{flexDirection:'row',gap:'24px',alignItems:'stretch',justifyContent:'center'}) }}> 
    <Box sx={{width:'100%', borderRadius:'8px',position:'relative',padding:'32px',backgroundColor:'primary.main',zIndex:'4',marginBottom:'24px',...(tab&&{maxWidth:'280px',marginBottom:'0'}),...(desk&&{maxWidth:'420px'})}}><Typography color='secondary' variant="p" sx={{marginBottom:'8px'}}>Buy staking assets directly at Levstake</Typography><Typography color='secondary' variant="subtitle1" sx={{fontSize:'14px',fontWeight:'400',lineHeight:'24px',}}>Some description</Typography><img style={{position:'absolute',bottom:'-50px',right:'25px',zIndex:'4',...(tab&&{right:'-31px',transform:'rotate(270deg)',top:'60px'}),...(desk&&{top:"30px"})}} src={images.arrow} alt="arrow" /></Box>
    <Box sx={{width:'100%', borderRadius:'8px',position:'relative',padding:'32px',backgroundColor:'primary.main',zIndex:'3',marginBottom:'24px',...(tab&&{maxWidth:'280px',marginBottom:'0'}),...(desk&&{maxWidth:'420px'})}}><Typography color='secondary' variant="p" sx={{marginBottom:'8px'}}>Choose your leverage</Typography><Typography color='secondary' variant="subtitle1" sx={{fontSize:'14px',fontWeight:'400',lineHeight:'24px',}}>Some description</Typography><img style={{position:'absolute',bottom:'-50px',right:'25px',zIndex:'4',...(tab&&{right:'-31px',transform:'rotate(270deg)',top:'60px',...(desk&&{top:"30px"})})}} src={images.arrow} alt="arrow" /></Box>
    <Box sx={{width:'100%', borderRadius:'8px',position:'relative',padding:'32px',backgroundColor:'primary.main',zIndex:'2',...(tab&&{maxWidth:'280px'}),...(desk&&{maxWidth:'420px'})}}><Typography color='secondary' variant="p" sx={{marginBottom:'8px'}}>Join the staking contract</Typography><Typography color='secondary' variant="subtitle1" sx={{fontSize:'14px',fontWeight:'400',lineHeight:'24px',}}>Some description</Typography></Box>
</Stack>
    )
}

export default Advantages;
