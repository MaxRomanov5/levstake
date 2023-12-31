import { Button, Typography,useTheme,useMediaQuery } from "@mui/material";
import { NavLink } from "react-router-dom";
import links from '../../helpers/links.js'
import { useUser } from '../../Context/userContext.jsx'
const BuySellBtn = ({text}) => {

    const theme = useTheme();
    const mob = useMediaQuery(theme.breakpoints.down("md"));
    const {logIn,isLoggedIn} = useUser()
    return (
        <NavLink to={links(isLoggedIn,mob)}>  <Button variant="contained" sx={{backgroundColor:'purpleBG.main',padding:"12px 16px",borderRadius:'8px','&.MuiButtonBase-root.MuiButton-root:hover':{backgroundColor:'#7A56F8'}}}><Typography variant="subtitle1" sx={{fontSize:'14px',lineHeight:'16.24px',color:'primary.main'}}>{text}</Typography></Button></NavLink>
    );
}

export default BuySellBtn;
