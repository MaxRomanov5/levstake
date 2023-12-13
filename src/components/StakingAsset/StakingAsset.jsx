import {Button,useTheme,useMediaQuery, FormControl, MenuItem, Select, Table, TableBody, TableCell, TableContainer, TableHead, TableRow,  } from "@mui/material";
import { styled } from '@mui/material/styles';
// import { useState } from "react"; 
import images from "../../assets/images";
import { NavLink } from "react-router-dom";
import links from '../../helpers/links.js'
import { useUser } from '../../Context/userContext.jsx'
const StakingAsset = ({pools}) => {

  const { isLoggedIn } = useUser();
  const theme = useTheme();
  const mob = useMediaQuery(theme.breakpoints.down("md"));

console.log(pools);

    const StyledTableRow = styled(TableRow)(() => ({
        '&:nth-of-type(even)': {
          backgroundColor: '#3A3B3C',
        },
        // hide last border
        '&:last-child td, &:last-child th': {
          border: 0,
        },
      }));
    return (
        <TableContainer sx={{height:'508px',overflow:'scroll'}}>
        <Table sx={{padding:'8px'}}  aria-label="customized table">
          <TableHead sx={{color:'#CACBCB'}}>
            <TableRow >
              <TableCell sx={{width:'15%',padding:'8px', color:'primary.main',fontFamily: 'Montserrat',fontSize: '12px',fontWeight: '400',lineHeight: '18px',letterSpacing: '0.04em'}} align="left" >Asset</TableCell>
              <TableCell sx={{padding:'8px', color:'primary.main',fontFamily: 'Montserrat',fontSize: '12px',fontWeight: '400',lineHeight: '18px',letterSpacing: '0.04em'}} align="center" >Term</TableCell>
              <TableCell sx={{padding:'8px', color:'primary.main',fontFamily: 'Montserrat',fontSize: '12px',fontWeight: '400',lineHeight: '18px',letterSpacing: '0.04em'}} align="center" >Leverage</TableCell>
              <TableCell sx={{padding:'8px', color:'primary.main',fontFamily: 'Montserrat',fontSize: '12px',fontWeight: '400',lineHeight: '18px',letterSpacing: '0.04em'}} align="center" >Yearly interest</TableCell>
              <TableCell sx={{padding:'8px', color:'primary.main',fontFamily: 'Montserrat',fontSize: '12px',fontWeight: '400',lineHeight: '18px',letterSpacing: '0.04em'}} align="center" >Reward payout</TableCell>
 
              <TableCell sx={{padding:'8px', color:'primary.main',fontFamily: 'Montserrat',fontSize: '12px',fontWeight: '400',lineHeight: '18px',letterSpacing: '0.04em'}} align="left" ></TableCell>
            </TableRow>
          </TableHead>
          <TableBody  >
           
              {/* <StyledTableRow >
              <TableCell sx={{borderBottom:'0', display:'flex', padding:'8px', color:'primary.main',fontFamily: 'IBM Plex Mono',fontSize: '21px',fontWeight: '600',lineHeight: '34px',letterSpacing: '0.04em'}} align="left" ><img style={{marginRight:'16px'}} src={images.ethereum} alt="coin" width={32} height={32}></img> Coin</TableCell>
                <TableCell sx={{padding:'7px 8px', fontFamily: 'Montserrat',
      fontSize: '18px',
      fontWeight: '500',
      lineHeight: '25px',
      color:'white',
      letterSpacing: '0.04em',
      textAlign: 'left',borderBottom:'0'}} align="left">
       
          <FormControl fullWidth sx={{zIndex:'11111111'}}>
       
        <Select sx={{fontFamily: 'Montserrat',
      fontSize: '18px',
      fontWeight: '500',
      lineHeight: '25px',padding:'0',color:'purple.main','&::before':{
border:'0'
        },'&::after':{
            border:'0'
                    },
                    '&:hover::after':{
                        borderBottom:'0',
                        color:'white'
                    },
                    '&:hover:not(.Mui-disabled, .Mui-error)::before':{
                        borderBottom:'0',
                        color:'white'
                    },
                    '& svg':{
                        fill:'#9578F9'
                    }
                }}
  
          id="demo-simple-select1"
          variant='standard'
          value={age}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem  value={5}>5 days</MenuItem>
          <MenuItem value={10}>10 days</MenuItem>
          <MenuItem value={20}>20 days</MenuItem>
        </Select>
      </FormControl>
      
          </TableCell>
          <TableCell sx={{padding:'7px 16px', fontFamily: 'Montserrat',
      fontSize: '18px',
      fontWeight: '500',
      lineHeight: '25px',
      color:'white',
      letterSpacing: '0.04em',
      textAlign: 'left',borderBottom:'0'}} align="left">
       
          <FormControl fullWidth>
       
        <Select sx={{fontFamily: 'Montserrat',
      fontSize: '18px',
      fontWeight: '500',
      lineHeight: '25px',padding:'0',color:'purple.main','&::before':{
border:'0'
        },'&::after':{
            border:'0'
                    },
                    '&:hover::after':{
                        borderBottom:'0',
                        color:'white'
                    },
                    '&:hover:not(.Mui-disabled, .Mui-error)::before':{
                        borderBottom:'0',
                        color:'white'
                    },
                    '& svg':{
                        fill:'#9578F9'
                    }
                }}
  



          id="demo-simple-select2"
          variant='standard'
          value={leverage}
          label="Age"
          onChange={handleChangeLev}
        >
          <MenuItem value={2}>2x</MenuItem>
          <MenuItem value={3}>3x</MenuItem>
          <MenuItem value={4}>4x</MenuItem>
        </Select>
      </FormControl>
      
          </TableCell>
                <TableCell sx={{padding:'16px 8px', fontFamily: 'Montserrat',
      fontSize: '18px',
      fontWeight: '500',
      lineHeight: '25px',
      color:'white',
      letterSpacing: '0.04em',
      textAlign: 'left',borderBottom:'0'}} align="left">16%</TableCell>
<TableCell sx={{padding:'16px 8px', fontFamily: 'Montserrat',
      fontSize: '18px',
      fontWeight: '500',
      lineHeight: '25px',
      color:'white',
      letterSpacing: '0.04em',
      textAlign: 'left',borderBottom:'0'}} align="left">Maturity</TableCell>
      <TableCell sx={{padding:'16px 8px', fontFamily: 'Montserrat',
      fontSize: '18px',
      fontWeight: '500',
      lineHeight: '25px',
      color:'white',
      letterSpacing: '0.04em',
      textAlign: 'left',borderBottom:'0'}} align="left">3,2105</TableCell>
      
                <TableCell sx={{borderBottom:'0',padding:'0px'}} align="left" ><Button sx={{display:'flex',padding:'16px 8px', color:'#9578F9',fontFamily: 'Montserrat',fontSize: '14px',fontWeight: '700',lineHeight: '16px',letterSpacing: '0.04em'}}><img src={images.rocketPrpl} style={{marginRight:'16px'}}></img>Stake</Button></TableCell>
              </StyledTableRow> */}
{pools.map((pool)=>{
  return <StyledTableRow key={pool.id}>
  <TableCell sx={{borderBottom:'0', display:'flex', padding:'8px', color:'primary.main',fontFamily: 'IBM Plex Mono',fontSize: '21px',fontWeight: '600',lineHeight: '34px',letterSpacing: '0.04em'}} align="left" ><img style={{marginRight:'16px'}} src={pool.asset.picture} alt="coin" width={32} height={32}></img>{pool.asset.name} </TableCell>
    <TableCell sx={{padding:'7px 8px', fontFamily: 'Montserrat',
fontSize: '18px',
fontWeight: '500',
lineHeight: '25px',
color:'white',
letterSpacing: '0.04em',
textAlign: 'left',borderBottom:'0',textAlign:'center',textWrap:'nowrap'}} align="center">

 {pool.pool_duration}

</TableCell>
<TableCell sx={{padding:'7px 16px', fontFamily: 'Montserrat',
fontSize: '18px',
fontWeight: '500',
lineHeight: '25px',
color:'white',
letterSpacing: '0.04em',
textAlign: 'left',borderBottom:'0',textAlign:'center',textWrap:'nowrap'}} align="center">

{pool.pool_conditions.min_leverage}x-{pool.pool_conditions.max_leverage}x

</TableCell>
    <TableCell sx={{padding:'16px 8px', fontFamily: 'Montserrat',
fontSize: '18px',
fontWeight: '500',
lineHeight: '25px',
color:'white',
letterSpacing: '0.04em',
textAlign: 'left',borderBottom:'0',textAlign:'center'}} align="center">{Number(pool.profit_rate).toFixed(0) + "%"}</TableCell>
<TableCell sx={{padding:'16px 8px', fontFamily: 'Montserrat',
fontSize: '18px',
fontWeight: '500',
lineHeight: '25px',
color:'white',
letterSpacing: '0.04em',
textAlign: 'left',borderBottom:'0',textAlign:'center'}} align="center">Maturity</TableCell>


<TableCell sx={{borderBottom:'0',padding:'0px'}} align="left" ><NavLink to={links(isLoggedIn,mob)}><Button sx={{display:'flex',padding:'16px 8px', color:'#9578F9',fontFamily: 'Montserrat',fontSize: '14px',fontWeight: '700',lineHeight: '16px',letterSpacing: '0.04em'}}><img src={images.rocketPrpl} style={{marginRight:'16px'}}></img>Stake</Button></NavLink></TableCell>
  </StyledTableRow>
})}


              
           
        
          </TableBody>
        </Table>
      </TableContainer>
    );
}

export default StakingAsset;
