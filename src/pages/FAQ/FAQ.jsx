import {Stack, Typography,Box} from '@mui/material'
import FeedbackForm from '../../components/FeedbackForm/FeedbackForm';
import images from '../../assets/images';
const FAQ = () => {
    return (
      <div style={{paddingTop:'94px'}}>
      <Typography sx={{marginBottom:'24px',textAlign:'center'}} color='primary.main' variant="h2">Frequently asked questions</Typography> 
              <Typography sx={{marginBottom:'80px',textAlign:'center'}} color='primary.main' variant="subtitle1" >Find your answers here.</Typography>
              <Stack sx={{padding:'16px',marginBottom:'80px'}}>
                <Box sx={{marginBottom:'32px'}}>
                  <Typography variant='p' color='primary.main' sx={{fontSize:'32px',lineHeight:'39px',textAlign:'center',display:'flex',gap:'32px',marginBottom:'32px'}}><img src={images.question} alt='question'></img> What is CEX?</Typography>
                  <Typography sx={{fontSize:'16px',lineHeight:'24px'}} variant='tableCellMain'>What even is CEX? It is a Centralized exchange which most commonly facilitate trades between users by maintaining an order book: a collection of buy and sell orders posted by individual traders. Orders are requests to buy or sell a certain amount of a specific cryptocurrency at a certain price. CEXs aggregate orders from their users and then use special software to match and execute the corresponding buy and sell orders.
CEX users do not actually exchange crypto or fiat currencies with each other. Instead, when they deposit their funds onto an exchange, the latter takes over the custody of those assets and issues a corresponding amount of IOUs to the trader. The exchange tracks every user’s IOUs internally as they change hands in trades and only converts them into actual currency at the moment of withdrawal of funds.</Typography>
                </Box>
                <Box sx={{marginBottom:'32px'}}>
                  <Typography variant='p' color='primary.main' sx={{fontSize:'32px',lineHeight:'39px',textAlign:'center',display:'flex',gap:'32px',marginBottom:'32px'}}><img src={images.question} alt='question'></img> What is CEX?</Typography>
                  <Typography sx={{fontSize:'16px',lineHeight:'24px'}} variant='tableCellMain'>What even is CEX? It is a Centralized exchange which most commonly facilitate trades between users by maintaining an order book: a collection of buy and sell orders posted by individual traders. Orders are requests to buy or sell a certain amount of a specific cryptocurrency at a certain price. CEXs aggregate orders from their users and then use special software to match and execute the corresponding buy and sell orders.
CEX users do not actually exchange crypto or fiat currencies with each other. Instead, when they deposit their funds onto an exchange, the latter takes over the custody of those assets and issues a corresponding amount of IOUs to the trader. The exchange tracks every user’s IOUs internally as they change hands in trades and only converts them into actual currency at the moment of withdrawal of funds.</Typography>
                </Box>
                <Box sx={{marginBottom:'32px'}}>
                  <Typography variant='p' color='primary.main' sx={{fontSize:'32px',lineHeight:'39px',textAlign:'center',display:'flex',gap:'32px',marginBottom:'32px'}}><img src={images.question} alt='question'></img> What is CEX?</Typography>
                  <Typography sx={{fontSize:'16px',lineHeight:'24px'}} variant='tableCellMain'>What even is CEX? It is a Centralized exchange which most commonly facilitate trades between users by maintaining an order book: a collection of buy and sell orders posted by individual traders. Orders are requests to buy or sell a certain amount of a specific cryptocurrency at a certain price. CEXs aggregate orders from their users and then use special software to match and execute the corresponding buy and sell orders.
CEX users do not actually exchange crypto or fiat currencies with each other. Instead, when they deposit their funds onto an exchange, the latter takes over the custody of those assets and issues a corresponding amount of IOUs to the trader. The exchange tracks every user’s IOUs internally as they change hands in trades and only converts them into actual currency at the moment of withdrawal of funds.</Typography>
                </Box>
              </Stack>
              <FeedbackForm></FeedbackForm>
           </div>
    );
}

export default FAQ;
