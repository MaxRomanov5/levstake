import { Stack, Typography } from '@mui/material';
import images from '../../assets/images';
import styled from './HeroCard.module.css'
const HeroCard = ({pool}) => {
console.log(pool);
    return (
       <div className={styled.card}>
<Stack flexDirection='row' alignItems='center' sx={{marginBottom:'32px'}}>
    <img width='48px' height='48px' src={pool?.asset?.picture || images.ethereum} alt="coin" />
    <Typography variant='h2' sx={{fontSize:"24px",lineHeight:'31px',color:'primary.main',marginLeft:'17px'}}>{pool?.asset?.name || '-'}</Typography>
 
</Stack>
<Stack sx={{marginBottom:'32px'}}>
    <Typography variant='h1' color='primary' sx={{marginBottom:'7px',fontSize:'64px'}}>{Number(pool?.profit_rate).toFixed(0) + "%"||'-'}</Typography>
    <Typography variant='subtitle1' color='primary' sx={{fontWeight:'400'}}>Profit Rate</Typography>
</Stack>
<Stack flexDirection='row' sx={{marginBottom:'8px'}} justifyContent='space-between'>
<Typography variant='h2' sx={{fontSize:"24px",lineHeight:'31px',color:'primary.main'}}>Leverage</Typography>
<Typography  variant='h2' sx={{fontSize:"24px",lineHeight:'31px',color:'primary.main'}}>{pool ? `${pool.pool_conditions.min_leverage}x-${pool.pool_conditions.max_leverage}x`:'-'}</Typography>
</Stack>
<Stack flexDirection='row' sx={{marginBottom:'8px'}} justifyContent='space-between'>
<Typography variant='h2' sx={{fontSize:"24px",lineHeight:'31px',color:'primary.main'}}>Period</Typography>
<Typography  variant='h2' sx={{fontSize:"24px",lineHeight:'31px',color:'primary.main'}}>{pool?.period || '-'}</Typography>
</Stack>
<Stack flexDirection='row' justifyContent='space-between'>
<Typography variant='h2' sx={{fontSize:"24px",lineHeight:'31px',color:'primary.main'}}>Duration</Typography>
<Typography  variant='h2' sx={{fontSize:"24px",lineHeight:'31px',color:'primary.main'}}>{pool?.pool_duration || '-'}</Typography>
</Stack>
       </div>
    );
}

export default HeroCard;
