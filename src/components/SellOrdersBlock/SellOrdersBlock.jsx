import {useMediaQuery,ToggleButtonGroup,ToggleButton,Typography,TableContainer,Table,TableHead,TableRow,TableCell,TableBody,} from '@mui/material'
import {useState} from 'react';

import { useTheme } from '@emotion/react';
import images from '../../assets/images';
import FilterOrders from '../FilterOrders/FilterOrders';
// import images from '../../assets/images';

const SellOrdersBlock = () => {
const [active, setActive] = useState('active');
const theme = useTheme()
const mob = useMediaQuery(theme.breakpoints.up('sm'))
console.log(mob);
function handleActive(e) {
   setActive(e.target.value)
}

    return (<div style={{backgroundColor:'#FFFFFF0F',borderRadius:'8px',padding:'16px',marginBottom:'44px'}}>
        <div style={{display:'flex',flexDirection:'column',gap:'10px'}}>
          <Typography variant='subtitle1' sx={{fontWeight:'600',color:'white',textAlign:'center'}}>Buy Orders</Typography>
          <div style={{display:'flex',gap:'10px',flexDirection:mob?'row':'column',alignItems:'center',justifyContent:'center'}}>
          <FilterOrders></FilterOrders>
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
              <TableCell sx={{borderBottomColor:'#3A3B3C', padding:'8px', color:'#CACBCB',fontFamily: 'Montserrat',fontSize: '12px',fontWeight: '400',lineHeight: '18px',letterSpacing: '0.04em'}} align="left" >Start</TableCell>
              <TableCell sx={{borderBottomColor:'#3A3B3C', padding:'8px', color:'#CACBCB',fontFamily: 'Montserrat',fontSize: '12px',fontWeight: '400',lineHeight: '18px',letterSpacing: '0.04em'}} align="left" >Leverage</TableCell>
              <TableCell sx={{borderBottomColor:'#3A3B3C', padding:'8px', color:'#CACBCB',fontFamily: 'Montserrat',fontSize: '12px',fontWeight: '400',lineHeight: '18px',letterSpacing: '0.04em'}} align="left" >Yearly yield</TableCell>
              <TableCell sx={{borderBottomColor:'#3A3B3C', padding:'8px', color:'#CACBCB',fontFamily: 'Montserrat',fontSize: '12px',fontWeight: '400',lineHeight: '18px',letterSpacing: '0.04em'}} align="left" >Interest payment</TableCell>
              <TableCell sx={{borderBottomColor:'#3A3B3C', padding:'8px', color:'#CACBCB',fontFamily: 'Montserrat',fontSize: '12px',fontWeight: '400',lineHeight: '18px',letterSpacing: '0.04em'}} align="left" >Liquidation price</TableCell>
              <TableCell sx={{borderBottomColor:'#3A3B3C', padding:'8px', color:'#CACBCB',fontFamily: 'Montserrat',fontSize: '12px',fontWeight: '400',lineHeight: '18px',letterSpacing: '0.04em'}} align="left" >Status</TableCell>
              <TableCell sx={{borderBottomColor:'#3A3B3C', padding:'8px', color:'#CACBCB',fontFamily: 'Montserrat',fontSize: '12px',fontWeight: '400',lineHeight: '18px',letterSpacing: '0.04em'}} align="left" >Liquidation amount</TableCell>
              <TableCell sx={{borderBottomColor:'#3A3B3C', padding:'8px', color:'#CACBCB',fontFamily: 'Montserrat',fontSize: '12px',fontWeight: '400',lineHeight: '18px',letterSpacing: '0.04em',textWrap:'nowrap'}} align="left" >Interest paid</TableCell>
              <TableCell sx={{borderBottomColor:'#3A3B3C', padding:'8px', color:'#CACBCB',fontFamily: 'Montserrat',fontSize: '12px',fontWeight: '400',lineHeight: '18px',letterSpacing: '0.04em'}} align="left" >Commision</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
          <TableRow   sx={{'& .MuiTableCell-root.MuiTableCell-body':{
              borderBottomColor:'#3A3B3C',paddingLeft:'8px'
          }}}>
        <TableCell sx={{fontWeight:'500', fontSize:'12px',color:'white',fontFamily:'Montserrat',lineHeight:'16px'}} >
       
        <div style={{display:'flex',gap:'8px',alignItems:'center'}}> <img src={images.ethereum} style={{width:'24px',height:'24px'}} alt='coin'></img>BTC </div>
       
        </TableCell>
        <TableCell sx={{paddingRight:'30px',fontWeight:'500', fontSize:'12px',color:'white',fontFamily:'Montserrat',lineHeight:'16px'}}>
        $1.000,00
        </TableCell>
        <TableCell sx={{position:'relative',fontWeight:'500', fontSize:'12px',color:'white',fontFamily:'Montserrat',lineHeight:'16px',textWrap:'nowrap'}}><div style={{display:'flex',justifyContent:'space-between'}}><img style={{position:'absolute',top:'50%',left:'-18px',transform:'translateY(-50%)'}} src={images.linkGreen} alt="link" />21/05/2023 
14:53</div></TableCell>
        <TableCell sx={{fontWeight:'500', fontSize:'12px',color:'white',fontFamily:'Montserrat',lineHeight:'16px'}}>5</TableCell>
        <TableCell sx={{fontWeight:'500', fontSize:'12px',color:'white',fontFamily:'Montserrat',lineHeight:'16px'}}>5%</TableCell>
        <TableCell sx={{fontWeight:'500', fontSize:'12px',color:'white',fontFamily:'Montserrat',lineHeight:'16px',textWrap:'nowrap'}}>On liquidation</TableCell>
        <TableCell sx={{fontWeight:'500', fontSize:'12px',color:'white',fontFamily:'Montserrat',lineHeight:'16px'}}>0,546</TableCell>
        <TableCell sx={{fontWeight:'500', fontSize:'12px',fontFamily:'Montserrat',lineHeight:'16px',color:'#9A9B9B',textWrap:'nowrap',paddingTop:'9px',paddingBottom:'9px'}}><span style={{color:'#9578F9'}} >Active</span><br></br> 21/05/2023 14:53</TableCell>
        <TableCell sx={{fontWeight:'500', fontSize:'12px',fontFamily:'Montserrat',lineHeight:'16px',color:'#9A9B9B'}}>1K</TableCell>
        <TableCell sx={{fontWeight:'500', fontSize:'12px',fontFamily:'Montserrat',lineHeight:'16px',color:'white'}}><div style={{display:'flex',justifyContent:'space-between',gap:'30px'}}>0.45K <img src={images.linkGreen} alt="link" /></div></TableCell>
        <TableCell sx={{fontWeight:'500', fontSize:'12px',fontFamily:'Montserrat',lineHeight:'16px',color:'white'}}><div style={{display:'flex',justifyContent:'space-between'}}>5% <img src={images.linkGreen} alt="link" /></div></TableCell>
      </TableRow>

      <TableRow   sx={{'& .MuiTableCell-root.MuiTableCell-body':{
              borderBottomColor:'#3A3B3C',paddingLeft:'8px'
          }}}>
        <TableCell sx={{fontWeight:'500', fontSize:'12px',color:'white',fontFamily:'Montserrat',lineHeight:'16px'}} >
       
        <div style={{display:'flex',gap:'8px',alignItems:'center'}}> <img src={images.ethereum} style={{width:'24px',height:'24px'}} alt='coin'></img>BTC </div>
       
        </TableCell>
        <TableCell sx={{paddingRight:'30px',fontWeight:'500', fontSize:'12px',color:'white',fontFamily:'Montserrat',lineHeight:'16px'}}>
        $1.000,00
        </TableCell>
        <TableCell sx={{position:'relative',fontWeight:'500', fontSize:'12px',color:'white',fontFamily:'Montserrat',lineHeight:'16px',textWrap:'nowrap'}}><div style={{display:'flex',justifyContent:'space-between'}}><img style={{position:'absolute',top:'50%',left:'-18px',transform:'translateY(-50%)'}} src={images.linkGreen} alt="link" />21/05/2023 
14:53</div></TableCell>
        <TableCell sx={{fontWeight:'500', fontSize:'12px',color:'white',fontFamily:'Montserrat',lineHeight:'16px'}}>5</TableCell>
        <TableCell sx={{fontWeight:'500', fontSize:'12px',color:'white',fontFamily:'Montserrat',lineHeight:'16px'}}>5%</TableCell>
        <TableCell sx={{fontWeight:'500', fontSize:'12px',color:'white',fontFamily:'Montserrat',lineHeight:'16px',textWrap:'nowrap'}}>On liquidation</TableCell>
        <TableCell sx={{fontWeight:'500', fontSize:'12px',color:'white',fontFamily:'Montserrat',lineHeight:'16px'}}>0,546</TableCell>
        <TableCell sx={{fontWeight:'500', fontSize:'12px',fontFamily:'Montserrat',lineHeight:'16px',color:'#9A9B9B',textWrap:'nowrap',paddingTop:'9px',paddingBottom:'9px'}}><span style={{color:'#9578F9'}} >Active</span><br></br> 21/05/2023 14:53</TableCell>
        <TableCell sx={{fontWeight:'500', fontSize:'12px',fontFamily:'Montserrat',lineHeight:'16px',color:'#9A9B9B'}}>1K</TableCell>
        <TableCell sx={{fontWeight:'500', fontSize:'12px',fontFamily:'Montserrat',lineHeight:'16px',color:'white'}}><div style={{display:'flex',justifyContent:'space-between',gap:'30px'}}>0.45K <img src={images.linkGreen} alt="link" /></div></TableCell>
        <TableCell sx={{fontWeight:'500', fontSize:'12px',fontFamily:'Montserrat',lineHeight:'16px',color:'white'}}><div style={{display:'flex',justifyContent:'space-between'}}>5% <img src={images.linkGreen} alt="link" /></div></TableCell>
      </TableRow>


      <TableRow   sx={{'& .MuiTableCell-root.MuiTableCell-body':{
              borderBottomColor:'#3A3B3C',paddingLeft:'8px'
          }}}>
        <TableCell sx={{fontWeight:'500', fontSize:'12px',color:'white',fontFamily:'Montserrat',lineHeight:'16px'}} >
       
        <div style={{display:'flex',gap:'8px',alignItems:'center'}}> <img src={images.ethereum} style={{width:'24px',height:'24px'}} alt='coin'></img>BTC </div>
       
        </TableCell>
        <TableCell sx={{paddingRight:'30px',fontWeight:'500', fontSize:'12px',color:'white',fontFamily:'Montserrat',lineHeight:'16px'}}>
        $1.000,00
        </TableCell>
        <TableCell sx={{position:'relative',fontWeight:'500', fontSize:'12px',color:'white',fontFamily:'Montserrat',lineHeight:'16px',textWrap:'nowrap'}}><div style={{display:'flex',justifyContent:'space-between'}}><img style={{position:'absolute',top:'50%',left:'-18px',transform:'translateY(-50%)'}} src={images.linkGreen} alt="link" />21/05/2023 
14:53</div></TableCell>
        <TableCell sx={{fontWeight:'500', fontSize:'12px',color:'white',fontFamily:'Montserrat',lineHeight:'16px'}}>5</TableCell>
        <TableCell sx={{fontWeight:'500', fontSize:'12px',color:'white',fontFamily:'Montserrat',lineHeight:'16px'}}>5%</TableCell>
        <TableCell sx={{fontWeight:'500', fontSize:'12px',color:'white',fontFamily:'Montserrat',lineHeight:'16px',textWrap:'nowrap'}}>On liquidation</TableCell>
        <TableCell sx={{fontWeight:'500', fontSize:'12px',color:'white',fontFamily:'Montserrat',lineHeight:'16px'}}>0,546</TableCell>
        <TableCell sx={{fontWeight:'500', fontSize:'12px',fontFamily:'Montserrat',lineHeight:'16px',color:'#9A9B9B',textWrap:'nowrap',paddingTop:'9px',paddingBottom:'9px'}}><span style={{color:'#9578F9'}} >Active</span><br></br> 21/05/2023 14:53</TableCell>
        <TableCell sx={{fontWeight:'500', fontSize:'12px',fontFamily:'Montserrat',lineHeight:'16px',color:'#9A9B9B'}}>1K</TableCell>
        <TableCell sx={{fontWeight:'500', fontSize:'12px',fontFamily:'Montserrat',lineHeight:'16px',color:'white'}}><div style={{display:'flex',justifyContent:'space-between',gap:'30px'}}>0.45K <img src={images.linkGreen} alt="link" /></div></TableCell>
        <TableCell sx={{fontWeight:'500', fontSize:'12px',fontFamily:'Montserrat',lineHeight:'16px',color:'white'}}><div style={{display:'flex',justifyContent:'space-between'}}>5% <img src={images.linkGreen} alt="link" /></div></TableCell>
      </TableRow>
      
              </TableBody>
</Table>
</TableContainer>
        </div>
    );
}

export default SellOrdersBlock;