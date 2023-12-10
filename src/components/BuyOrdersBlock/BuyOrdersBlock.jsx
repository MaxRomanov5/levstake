import {ToggleButtonGroup,useMediaQuery,ToggleButton,Typography,TableContainer,Table,TableHead,TableRow,TableCell,TableBody,} from '@mui/material'
import {useState} from 'react'
import TableRowBuy from '../TableRowBuy/TableRowBuy';
// import FilterOrders from '../FilterOrders/FilterOrders';
import { useTheme } from '@emotion/react';
import ControlPools from '../ControlPools/ControlPools';
// import images from '../../assets/images';

const BuyOrdersBlock = ({activePositions,historyPositions}) => {
  const theme = useTheme()
  const mob = useMediaQuery(theme.breakpoints.up('sm'))
  const tab  = useMediaQuery(theme.breakpoints.up('md'))
const [active, setActive] = useState('active');

function handleActive(e) {
   setActive(e.target.value)
}



    return (<div style={{backgroundColor:'#161C2A',borderRadius:'8px',marginBottom:'8px',padding:'16px',maxHeight:'700px',overflow:'scroll'}}>
        <div style={{display:'flex',flexDirection:'column',gap:'10px',...(tab&&{flexDirection:'row',justifyContent:'space-between'})}}>
          <Typography variant='subtitle1' sx={{fontWeight:'600',color:'white',textAlign:'center'}}>Positions</Typography>
          <div style={{display:'flex',gap:'10px',flexDirection:mob?'row':'column',alignItems:'center',justifyContent:'center'}}>
          {/* <FilterOrders></FilterOrders> */}
             <ToggleButtonGroup
        sx={{display:'flex',justifyContent:'center',alignItems:'center',maxWidth:'159px',position:'relative',marginBottom:mob?'0px':'8px',gap:'2px',width:'100%',padding:'4px',border:'1px solid #F7F7F71A',borderRadius:'8px',borderTopRightRadius:'8px',
        '& .MuiButtonBase-root.MuiToggleButton-root.Mui-selected':{
          color:'white', backgroundColor:'purpleBG.main'
        },'& .MuiButtonBase-root.MuiToggleButton-root':{
          border:'none'
        },
        }}
              value={active}
              exclusive
              onChange={handleActive}
              aria-label="active"
            >
              
              <ToggleButton sx={{color:'primary.main',fontFamily:'Montserrat',fontWeight:'500',fontSize:'12px',lineHeight:'12px',padding:'6px 12px',width:'100%',backgroundColor:'transparent',borderRadius:'8px','&&&&':{borderTopRightRadius:'8px',borderBottomRightRadius:'8px'}}} value="active" aria-label="active">
           Active
              </ToggleButton>
              <ToggleButton sx={{color:'primary.main',fontFamily:'Montserrat',fontWeight:'500',fontSize:'12px',lineHeight:'12px',padding:'6px 12px',width:'100%',backgroundColor:'transparent',borderRadius:'8px','&&&&':{borderTopLeftRadius:'8px',borderBottomLeftRadius:'8px'}}} value="history" aria-label="active">
              History
              </ToggleButton>
            </ToggleButtonGroup>
         
          </div>
        </div>

        <TableContainer >
        <Table sx={{padding:'8px'}}  aria-label="customized table">
          <TableHead sx={{color:'#CACBCB'}}>
            <TableRow >
              <TableCell sx={{borderBottomColor:'#3A3B3C', padding:'8px', color:'#CACBCB',fontFamily: 'Montserrat',fontSize: '12px',fontWeight: '400',lineHeight: '18px',letterSpacing: '0.04em'}} align="left" >Asset</TableCell>
              <TableCell sx={{borderBottomColor:'#3A3B3C', padding:'8px', color:'#CACBCB',fontFamily: 'Montserrat',fontSize: '12px',fontWeight: '400',lineHeight: '18px',letterSpacing: '0.04em'}} align="left" >Amount</TableCell>
              <TableCell sx={{borderBottomColor:'#3A3B3C', padding:'8px', color:'#CACBCB',fontFamily: 'Montserrat',fontSize: '12px',fontWeight: '400',lineHeight: '18px',letterSpacing: '0.04em'}} align="left" >Leverage</TableCell>
              <TableCell sx={{borderBottomColor:'#3A3B3C', padding:'8px', color:'#CACBCB',fontFamily: 'Montserrat',fontSize: '12px',fontWeight: '400',lineHeight: '18px',letterSpacing: '0.04em',textWrap:'nowrap'}} align="left" >Yearly yield</TableCell>
              <TableCell sx={{borderBottomColor:'#3A3B3C', padding:'8px', color:'#CACBCB',fontFamily: 'Montserrat',fontSize: '12px',fontWeight: '400',lineHeight: '18px',letterSpacing: '0.04em'}} align="left" >TX</TableCell>
              <TableCell sx={{borderBottomColor:'#3A3B3C', padding:'8px', color:'#CACBCB',fontFamily: 'Montserrat',fontSize: '12px',fontWeight: '400',lineHeight: '18px',letterSpacing: '0.04em'}} align="left" >Interest payment</TableCell>
              <TableCell sx={{borderBottomColor:'#3A3B3C', padding:'8px', color:'#CACBCB',fontFamily: 'Montserrat',fontSize: '12px',fontWeight: '400',lineHeight: '18px',letterSpacing: '0.04em'}} align="left" >Liquidation price</TableCell>
              <TableCell sx={{borderBottomColor:'#3A3B3C', padding:'8px', color:'#CACBCB',fontFamily: 'Montserrat',fontSize: '12px',fontWeight: '400',lineHeight: '18px',letterSpacing: '0.04em'}} align="left" >Status</TableCell>
              <TableCell sx={{borderBottomColor:'#3A3B3C', padding:'8px', color:'#CACBCB',fontFamily: 'Montserrat',fontSize: '12px',fontWeight: '400',lineHeight: '18px',letterSpacing: '0.04em'}} align="left" >Period</TableCell>
             {active === 'active' && <TableCell sx={{borderBottomColor:'#3A3B3C', padding:'8px', color:'#CACBCB',fontFamily: 'Montserrat',fontSize: '12px',fontWeight: '400',lineHeight: '18px',letterSpacing: '0.04em',textWrap:'nowrap'}} align="left" ></TableCell>}
              
            </TableRow>
          </TableHead>
          <TableBody>
            
            {active ==='active' && activePositions.map((position)=>{
             return <TableRowBuy key={position.id} active={active} position={position}></TableRowBuy>

            })}
          
          {active ==='history' && historyPositions.map((position)=>{
             return <TableRowBuy key={position.id} position={position}></TableRowBuy>

            })}
              </TableBody>
</Table>
{active ==='history' && historyPositions.length === 0 && <p style={{padding:'40px',textAlign:'center',color:'grey',fontSize:'15px',fontFamily:'Montserrat'}}>No positions to display</p>}
{active ==='active' && activePositions.length === 0 && <p style={{padding:'40px',textAlign:'center',color:'grey',fontSize:'15px',fontFamily:'Montserrat'}}>No positions to display</p>}
</TableContainer>
        </div>
    );
}

export default BuyOrdersBlock;
