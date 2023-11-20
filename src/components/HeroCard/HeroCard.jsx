import { Stack, Typography } from '@mui/material';
import images from '../../assets/images';
import styled from './HeroCard.module.css'
const HeroCard = () => {

    return (
       <div className={styled.card}>
<Stack flexDirection='row' alignItems='center' sx={{marginBottom:'32px'}}>
    <img src={images.ethereum} alt="coin" />
    <Typography variant='h2' sx={{fontSize:"24px",lineHeight:'31px',color:'primary.main',marginLeft:'17px'}}>ETH</Typography>
    <Typography variant='h2' sx={{fontSize:"24px",lineHeight:'31px',color:'primary.main',marginLeft:'17px'}}>Yearly</Typography>
</Stack>
<Stack sx={{marginBottom:'32px'}}>
    <Typography variant='h1' color='primary' sx={{marginBottom:'7px',fontSize:'64px'}}>6%</Typography>
    <Typography variant='subtitle1' color='primary' sx={{fontWeight:'400'}}>Flexible reward</Typography>
</Stack>
<Stack flexDirection='row' sx={{marginBottom:'8px'}} justifyContent='space-between'>
<Typography variant='h2' sx={{fontSize:"24px",lineHeight:'31px',color:'primary.main'}}>Leverage x3</Typography>
<Typography  variant='h2' sx={{fontSize:"24px",lineHeight:'31px',color:'primary.main',fontWeight:'700'}}>18%</Typography>
</Stack>
<Stack flexDirection='row' sx={{marginBottom:'8px'}} justifyContent='space-between'>
<Typography variant='h2' sx={{fontSize:"24px",lineHeight:'31px',color:'primary.main'}}>Leverage x3</Typography>
<Typography  variant='h2' sx={{fontSize:"24px",lineHeight:'31px',color:'primary.main',fontWeight:'700'}}>18%</Typography>
</Stack>
<Stack flexDirection='row' justifyContent='space-between'>
<Typography variant='h2' sx={{fontSize:"24px",lineHeight:'31px',color:'primary.main'}}>Leverage x3</Typography>
<Typography  variant='h2' sx={{fontSize:"24px",lineHeight:'31px',color:'primary.main',fontWeight:'700'}}>18%</Typography>
</Stack>
       </div>
    );
}

export default HeroCard;
