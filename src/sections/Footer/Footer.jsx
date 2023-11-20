import { Button, Stack, Typography } from "@mui/material";
import img from "../../assets/images";
import images from "../../assets/images";

const Footer = () => {
    return (
       <footer>
           <Stack sx={{marginBottom:'24px'}} justifyContent='left' alignItems='center' flexDirection='row' height='40px' flexWrap='wrap' >
            <img style={{height:'inherit',marginRight:'14px'}} src={img.levlion} alt="levstake" />
            <img style={{height:'80%'}} src={img.levtext} alt="levstake" />
           </Stack>
           <Stack flexDirection='row' sx={{marginBottom:'24px'}}>
           <Button variant="contained" sx={{marginRight:'16px', backgroundColor:'purpleBG.main',padding:"12px 16px",borderRadius:'8px',display:'flex'}}><img style={{marginRight:'8px'}} src={images.buySell} alt="digitalKey"></img><Typography variant="subtitle1" sx={{fontSize:'14px',lineHeight:'16.24px',color:'primary.main',fontWeight:'500'}}>BUY/SELL</Typography></Button>
           <Button variant="contained" sx={{backgroundColor:'transparent',padding:"12px 16px",borderRadius:'8px',display:'flex',border:'2px solid white'}}><img style={{marginRight:'8px'}} src={images.hdmi} alt="hdmi"></img><Typography variant="subtitle1" sx={{fontSize:'14px',lineHeight:'16.24px',color:'primary.main',fontWeight:'500'}}>Connect wallet</Typography></Button>
           </Stack>
           <Typography sx={{paddingBottom:'24px'}} variant="tableCellMain">All rights reserved @ Levstake Ltd. 2022</Typography>
       </footer>
    );
}

export default Footer;
