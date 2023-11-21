import { Typography } from "@mui/material";
import FeedbackForm from "../../components/FeedbackForm/FeedbackForm";
const Contacts = () => {
    return (
        <div style={{paddingTop:'94px'}}>
   <Typography sx={{marginBottom:'24px',textAlign:'center'}} color='primary.main' variant="h2">Need help?</Typography> 
           <Typography sx={{marginBottom:'80px',textAlign:'center'}} color='primary.main' variant="subtitle1" >Ut vestibulum, tortor faucibus eu. Lacus, neque commodo ipsum amet. Consectetur vitae faucibus facilisi nulla sollicitudin malesuada tristique. Venenatis libero, pellentesque pharetra molestie in bibendum.</Typography>
   <FeedbackForm></FeedbackForm>
        </div>
    );
}

export default Contacts;

