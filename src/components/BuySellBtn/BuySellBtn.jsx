import { Button, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";

const BuySellBtn = ({text}) => {


    return (
        <NavLink to='/dashboard'>  <Button variant="contained" sx={{backgroundColor:'purpleBG.main',padding:"12px 16px",borderRadius:'8px','&.MuiButtonBase-root.MuiButton-root:hover':{backgroundColor:'#7A56F8'}}}><Typography variant="subtitle1" sx={{fontSize:'14px',lineHeight:'16.24px',color:'primary.main'}}>{text}</Typography></Button></NavLink>
    );
}

export default BuySellBtn;
