import { Stack, Typography } from '@mui/material';
import images from '../../assets/images';
import styled from './HeroCard.module.css'
import {useState,useEffect} from 'react'
const HeroCard = ({pool}) => {
const [date, setDate] = useState('-');

if(!pool){
    pool = {}
}


useEffect(() => {
    if(pool[0]?.start_date !== undefined){
        const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
      ];
        const date = Date.parse(pool[0]?.start_date)
        const newDate = new Date(date)
        console.log(newDate.getDate());
        // const a = date.getDay()
        setDate(`${newDate.getDate()} ${monthNames[newDate.getMonth()]}`)
    }


}, [pool]);
// console.log(date);
// console.log(
//     pool[0]
// );
    return (
       <div className={styled.card}>
<Stack flexDirection='row' alignItems='center' sx={{marginBottom:'32px'}}>
    <img width='48px' height='48px' src={pool?.asset?.picture || images.ethereum} alt="coin" />
    <Typography variant='h2' sx={{fontSize:"24px",lineHeight:'31px',color:'primary.main',marginLeft:'17px'}}>{pool[0]?.asset?.blockchain?.currency_name || '-'}</Typography>
 
</Stack>
<Stack sx={{marginBottom:'32px'}}>
    <Typography variant='h1' color='primary' sx={{marginBottom:'7px',fontSize:'64px'}}>{pool[0]?.profit_rate ? Number(pool[0]?.profit_rate).toFixed(0)+'%' :'-'}</Typography>
    <Typography variant='subtitle1' color='primary' sx={{fontWeight:'400'}}>Profit Rate</Typography>
</Stack>
<Stack flexDirection='row' sx={{marginBottom:'8px'}} justifyContent='space-between'>
<Typography variant='h2' sx={{fontSize:"24px",lineHeight:'31px',color:'primary.main'}}>Leverage</Typography>
<Typography  variant='h2' sx={{fontSize:"24px",lineHeight:'31px',color:'primary.main'}}>{pool[0]?.pool_conditions ? `${pool[0]?.pool_conditions?.min_leverage}x-${pool[0]?.pool_conditions?.max_leverage}x`:'-'}</Typography>
</Stack>

<Stack flexDirection='row' justifyContent='space-between'>
<Typography variant='h2' sx={{marginBottom:'8px',fontSize:"24px",lineHeight:'31px',color:'primary.main'}}>Duration</Typography>
<Typography  variant='h2' sx={{fontSize:"24px",lineHeight:'31px',color:'primary.main'}}>{pool[0]?.pool_duration || '-'}</Typography>
</Stack>
<Stack flexDirection='row' sx={{marginBottom:'8px'}} justifyContent='space-between'>
<Typography variant='h2' sx={{fontSize:"24px",lineHeight:'31px',color:'primary.main'}}>Start date</Typography>
<Typography  variant='h2' sx={{fontSize:"24px",lineHeight:'31px',color:'primary.main'}}>{date ? date : '-'}</Typography>
</Stack>
       </div>
    );
}

export default HeroCard;
