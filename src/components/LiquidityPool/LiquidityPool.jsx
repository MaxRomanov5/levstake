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


    return (
        
            <TableContainer sx={{overflow:'scroll',borderTopLeftRadius:'8px',borderTopRightRadius:'8px',height:'397px'}}>
      <Table sx={{padding:'8px',overflow:'scroll'}}  aria-label="customized table">
        <TableHead sx={{backgroundColor:'#3A3B3C',color:'#CACBCB',}}>
          <TableRow >
            <TableCell sx={{width,padding:'8px', color:'#CACBCB',fontFamily: 'Montserrat',fontSize: '12px',fontWeight: '400',lineHeight: '18px',letterSpacing: '0.04em'}} align="left" >Currency</TableCell>
            <TableCell sx={{width,padding:'8px', color:'#CACBCB',fontFamily: 'Montserrat',fontSize: '12px',fontWeight: '400',lineHeight: '18px',letterSpacing: '0.04em'}} align="left" >Profit Rate</TableCell>
            <TableCell sx={{width,padding:'8px', color:'#CACBCB',fontFamily: 'Montserrat',fontSize: '12px',fontWeight: '400',lineHeight: '18px',letterSpacing: '0.04em',margin:'0 auto'}} align="left" >Period</TableCell>
           <TableCell sx={{width,padding:'8px', color:'#CACBCB',fontFamily: 'Montserrat',fontSize: '12px',fontWeight: '400',lineHeight: '18px',letterSpacing: '0.04em'}} align="left" >Leverage</TableCell>
           {type === 'home' &&  <TableCell></TableCell>}  
          </TableRow>
        </TableHead>
        <TableBody >
         {pools.map(pool=>{
           return <TableRow onClick={()=>{setSelectedPool(pool.id)}} key={pool.id}>
            <TableCell sx={{padding:'18px 8px', fontFamily: 'Montserrat',
  fontSize: '12px',
  fontWeight: '500',display:'flex',gap:'15px',textWrap:'nowrap',
  lineHeight: '17px',
  color:'white',
  letterSpacing: '0.04em',
  textAlign: 'left',borderBottomColor:'#3A3B3C'}} >
          <img width='16' height='16' src={pool.asset.picture} alt="" /> {pool.asset.blockchain.currency_name}
            </TableCell>
            <TableCell sx={{padding:'16px 8px', fontFamily: 'Montserrat',
  fontSize: '12px',
  fontWeight: '500',
  lineHeight: '17px',
  color:'white',
  letterSpacing: '0.04em',
  textAlign: 'left',borderBottomColor:'#3A3B3C'}} align="left">{Number(pool.profit_rate).toFixed(1)}</TableCell>
            <TableCell sx={{padding:'16px 8px', fontFamily: 'Montserrat',
  fontSize: '12px',
  fontWeight: '500',
  lineHeight: '17px',
  color:'white',
  letterSpacing: '0.04em',
  textAlign: 'left',borderBottomColor:'#3A3B3C'}} align="left">-</TableCell>
            <TableCell sx={{padding:'0px 8px', fontFamily: 'Montserrat',
  fontSize: '12px',
  fontWeight: '500',
  lineHeight: '17px',
  color:'white',
  letterSpacing: '0.04em',
  textAlign: 'left',borderBottomColor:'#3A3B3C'}} align="left">{ pool.pool_conditions.min_leverage+'X'+" > "+pool.pool_conditions.max_leverage+'X'}</TableCell>
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
