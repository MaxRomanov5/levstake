import { Button, Typography } from "@mui/material";


const BuySellBtn = ({text}) => {


    return (
        <Button variant="contained" sx={{backgroundColor:'purpleBG.main',padding:"12px 16px",borderRadius:'8px'}}><Typography variant="subtitle1" sx={{fontSize:'14px',lineHeight:'16.24px',color:'primary.main'}}>{text}</Typography></Button>
    );
}

export default BuySellBtn;
