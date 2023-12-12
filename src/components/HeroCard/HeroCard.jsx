import { Stack, Typography } from '@mui/material';
import images from '../../assets/images';
import styled from './HeroCard.module.css'
const HeroCard = ({pool}) => {
console.log(pool);
    return (
       <div className={styled.card}>
<Stack flexDirection='row' alignItems='center' sx={{marginBottom:'32px'}}>
    <img width='48px' height='48px' src={pool?.asset?.picture || images.ethereum} alt="coin" />
    <Typography variant='h2' sx={{fontSize:"24px",lineHeight:'31px',color:'primary.main',marginLeft:'17px'}}>{pool?.asset?.blockchain?.currency_name || '8%'}</Typography>
 
</Stack>
<Stack sx={{marginBottom:'32px'}}>
    <Typography variant='h1' color='primary' sx={{marginBottom:'7px',fontSize:'64px'}}>{Number(pool?.profit_rate).toFixed(0) + "%"||'8%'}</Typography>
    <Typography variant='subtitle1' color='primary' sx={{fontWeight:'400'}}>Profit Rate</Typography>
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
