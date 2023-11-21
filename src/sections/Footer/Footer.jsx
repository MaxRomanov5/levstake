import {  Typography,Stack } from "@mui/material";


const Footer = () => {
    return (
       <footer style={{paddingBottom:'8px'}}>
          
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
