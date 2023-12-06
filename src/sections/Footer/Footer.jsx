import {  Typography,Stack,useMediaQuery } from "@mui/material";
import { useTheme } from '@emotion/react';

const Footer = () => {
    const theme = useTheme()
const tab = useMediaQuery(theme.breakpoints.up('md'))
    return (
       <footer style={{paddingBottom:'8px',...(tab&&{display:'flex',justifyContent:'space-between',marginTop:'auto'})}}>
          
           <Typography sx={{marginBottom:'24px',display:'block'}} variant="tableCellMain">All rights reserved @ Levstake Ltd. 2022</Typography>
           <Stack flexDirection='row' gap='32px' justifyContent='start'>
               <Typography variant="tableCellMain" color='primary.main'>License</Typography>
               <Typography variant="tableCellMain" color='primary.main'>Terms</Typography>
               <Typography variant="tableCellMain" color='primary.main'>Privacy policy</Typography>
               <Typography variant="tableCellMain" color='primary.main'>Risk warning</Typography>
           </Stack>
       </footer>
    );
}

export default Footer;
