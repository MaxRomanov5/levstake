import {Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, useMediaQuery, useTheme } from "@mui/material";
import { NavLink } from "react-router-dom";
import links from '../../helpers/links.js'
import { useUser } from '../../Context/userContext.jsx'
const LiquidityPool = ({type,pools,setSelectedPool}) => {
  const { isLoggedIn } = useUser();
    const theme= useTheme()
    const mob = useMediaQuery(theme.breakpoints.up('md'))
    const width = type === 'home'? '18%' : '25%'
    const spec = useMediaQuery(theme.breakpoints.down("md"));

    function changeInt(int) {
      if(Number.isInteger(Number(int))){
  return Number(int)
      } else{
        Number(int).toFixed(1)
      }
    }

    return (
        
            <TableContainer sx={{overflow:'scroll',borderTopLeftRadius:'8px',borderTopRightRadius:'8px',height:'508px'}}>
      <Table sx={{padding:'8px',overflow:'scroll'}}  aria-label="customized table">
        <TableHead sx={{backgroundColor:'#3A3B3C',color:'#CACBCB',}}>
          <TableRow >
         <TableCell sx={{width:'50px'}}></TableCell>
            <TableCell sx={{width,padding:'8px', color:'#CACBCB',fontFamily: 'Montserrat',fontSize: '12px',fontWeight: '400',lineHeight: '18px',letterSpacing: '0.04em'}} align="center" >Asset</TableCell>
            <TableCell sx={{width,padding:'8px', color:'#CACBCB',fontFamily: 'Montserrat',fontSize: '12px',fontWeight: '400',lineHeight: '18px',letterSpacing: '0.04em'}} align="center" >Profit Rate</TableCell>
            <TableCell sx={{width,padding:'8px', color:'#CACBCB',fontFamily: 'Montserrat',fontSize: '12px',fontWeight: '400',lineHeight: '18px',letterSpacing: '0.04em'}} align="center" >Leverage</TableCell>
            <TableCell sx={{width,padding:'8px', color:'#CACBCB',fontFamily: 'Montserrat',fontSize: '12px',fontWeight: '400',lineHeight: '18px',letterSpacing: '0.04em',margin:'0 auto'}} align="center" >Period</TableCell>
            <TableCell sx={{width,padding:'8px', color:'#CACBCB',fontFamily: 'Montserrat',fontSize: '12px',fontWeight: '400',lineHeight: '18px',letterSpacing: '0.04em',textWrap:'nowrap'}} align="center" >Start date</TableCell>
           {type === 'home' &&  <TableCell></TableCell>}  
          </TableRow>
        </TableHead>
        <TableBody >
         {pools && pools.length !== 0 && pools.map(pool=>{

const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
      ];
        const date = Date.parse(pool?.start_date)
        const newDate = new Date(date)
        // console.log(newDate.getDate());
        // const a = date.getDay()
        const finalDate =`${monthNames[newDate.getMonth()]} ${newDate.getDate()} ${newDate.getHours() }:${newDate.getMinutes() }:${newDate.getSeconds() }`



           return <TableRow onClick={()=>{setSelectedPool(pool.id)}} key={pool.id}>
             {/* <TableCell sx={{width:'40px', borderBottomColor:'#3A3B3C'}}>
            
             </TableCell> */}
<TableCell sx={{borderBottomColor:'#3A3B3C'}}><img width='16' height='16' src={pool.asset.picture} alt="" /></TableCell>
            <TableCell sx={{padding:'18px 8px', fontFamily: 'Montserrat',
  fontSize: '12px',
  fontWeight: '500',textWrap:'nowrap',
  lineHeight: '17.5px',justifyContent:'left',
  color:'white',
  letterSpacing: '0.04em',
  textAlign: 'center',borderBottomColor:'#3A3B3C'}}  align="center">
     
          <p>{pool.asset.name}</p>
            </TableCell>
            <TableCell sx={{padding:'16px 8px', fontFamily: 'Montserrat',
  fontSize: '12px',
  fontWeight: '500',
  lineHeight: '17px',
  color:'white',
  letterSpacing: '0.04em',
  textAlign: 'center',borderBottomColor:'#3A3B3C'}} align="center">{changeInt(Number(pool.profit_rate))+'%'}</TableCell>
            <TableCell sx={{padding:'16px 8px', fontFamily: 'Montserrat',
  fontSize: '12px',
  fontWeight: '500',
  lineHeight: '17px',
  color:'white',
  letterSpacing: '0.04em',
  textAlign: 'center',borderBottomColor:'#3A3B3C',textWrap:'nowrap'}} align="center">{pool.pool_duration}</TableCell>
  <TableCell sx={{padding:'16px 8px', fontFamily: 'Montserrat',
  fontSize: '12px',
  fontWeight: '500',
  lineHeight: '17px',
  color:'white',
  letterSpacing: '0.04em',
  textAlign: 'center',borderBottomColor:'#3A3B3C',textWrap:'nowrap'}} align="center">{pool.pool_conditions.min_leverage+'x'+" - "+pool.pool_conditions.max_leverage+'x'}</TableCell>
            <TableCell sx={{padding:'0px 8px', fontFamily: 'Montserrat',
  fontSize: '12px',
  fontWeight: '500',
  lineHeight: '17px',
  color:'white',
  letterSpacing: '0.04em',
  textAlign: 'center',borderBottomColor:'#3A3B3C',textWrap:'nowrap'}} align="center">{finalDate }</TableCell>
        { type === 'home' &&    <TableCell sx={{ borderBottomColor:'#3A3B3C'}} align="left" ><NavLink to={links(isLoggedIn,spec)}><Button sx={ {padding:'0px 8px',fontFamily: 'Montserrat',fontSize: '14px',fontWeight: '700',lineHeight: '16px',letterSpacing: '0.04em',color:'purple.main'}} ><span style={{marginRight:'8px'}}>$</span>BUY {
            mob && 'Stake now'
           }</Button></NavLink></TableCell>}
          </TableRow>
         })}
            
           
      
        </TableBody>
      </Table>
    </TableContainer>
        
    );
}

export default LiquidityPool;
