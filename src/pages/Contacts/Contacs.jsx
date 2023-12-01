import { Typography,useMediaQuery } from "@mui/material";
import FeedbackForm from "../../components/FeedbackForm/FeedbackForm";
import { useTheme } from '@emotion/react';
import localStorage from '../../helpers/localStorage.js'
import { useUser } from "../../Context/userContext";
const Contacts = () => {
    const theme = useTheme()
const desk = useMediaQuery(theme.breakpoints.up('lg'))
const { isLoggedIn, username, logIn, logOut } = useUser()


    return (
        <div style={{paddingTop:'94px',maxWidth:'600px',margin:'0 auto'}}>

   <Typography sx={{marginBottom:'24px',textAlign:'center',...(desk&&{fontSize:'64px',lineHeight:'70px'})}} color='primary.main' variant="h2">Need help?</Typography> 
           <Typography sx={{marginBottom:'80px',textAlign:'center'}} color='primary.main' variant="subtitle1" >Ut vestibulum, tortor faucibus eu. Lacus, neque commodo ipsum amet. Consectetur vitae faucibus facilisi nulla sollicitudin malesuada tristique. Venenatis libero, pellentesque pharetra molestie in bibendum.</Typography>
   <FeedbackForm></FeedbackForm>
        </div>
    );
}

export default Contacts;

