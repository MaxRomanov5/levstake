import {TableRow,TableCell,Button} from '@mui/material'
import { useState } from 'react';
import images from '../../assets/images';
const TableRowBuy = ({position}) => {
  const [open, setOpen] = useState(false);



  function statusMaker(status){
    if(status==='waiting_for_funds'){
      return <span style={{color:'#9578F9'}} >Active</span>
    }
    if(status==='funds_are_withdrawn'){
      return <span style={{color:'#C23221'}} >Liquidated</span>
    }
  }

    return (<>
        <TableRow   sx={{'& .MuiTableCell-root.MuiTableCell-body':{
              borderBottomColor:'#3A3B3C',paddingLeft:'8px'
          }}}>
        <TableCell sx={{...(open&&{borderBottom:'0px solid white'}),position:'relative',fontWeight:'500', fontSize:'12px',color:'white',fontFamily:'Montserrat',lineHeight:'16px',}} >
        {/* <img src={open ? images.tableArrowOpen:images.tableArrowClose} alt="arrow" style={{position:'absolute',top:'50%',left:'8px',transform:'translateY(-50%)'}} /> */}
        <div style={{display:'flex',gap:'8px',alignItems:'center'}}> <img src={position.staking_pool.asset.picture} style={{width:'24px',height:'24px'}} alt='coin'></img>BTC </div>
        </TableCell>
        <TableCell sx={{...(open&&{borderBottom:'0px solid white'}),fontWeight:'500', fontSize:'12px',color:'white',fontFamily:'Montserrat',lineHeight:'16px'}}>
        {(Number(position.user_amount)).toFixed(3)}
        </TableCell>
        <TableCell sx={{...(open&&{borderBottom:'0px solid white'}),fontWeight:'500', fontSize:'12px',color:'white',fontFamily:'Montserrat',lineHeight:'16px',textWrap:'nowrap'}}>{position.leverage}</TableCell>
        <TableCell sx={{...(open&&{borderBottom:'0px solid white'}),fontWeight:'500', fontSize:'12px',color:'white',fontFamily:'Montserrat',lineHeight:'16px'}}>XS</TableCell>
        <TableCell sx={{...(open&&{borderBottom:'0px solid white'}),fontWeight:'500', fontSize:'12px',color:'white',fontFamily:'Montserrat',lineHeight:'16px'}}>5%</TableCell>
        <TableCell sx={{...(open&&{borderBottom:'0px solid white'}),fontWeight:'500', fontSize:'12px',color:'white',fontFamily:'Montserrat',lineHeight:'16px',textWrap:'nowrap'}}>On maturity</TableCell>
        <TableCell sx={{...(open&&{borderBottom:'0px solid white'}),fontWeight:'500', fontSize:'12px',color:'white',fontFamily:'Montserrat',lineHeight:'16px'}}>{(Number(position.liquidation_price)).toFixed(3)}</TableCell>
        <TableCell sx={{...(open&&{borderBottom:'0px solid white'}),fontWeight:'500', fontSize:'12px',fontFamily:'Montserrat',lineHeight:'16px',color:'#9A9B9B',textWrap:'nowrap',paddingTop:'9px',paddingBottom:'9px'}}>{statusMaker(position.status)}</TableCell>
        <TableCell sx={{...(open&&{borderBottom:'0px solid white'}),fontWeight:'500', fontSize:'12px',fontFamily:'Montserrat',lineHeight:'16px',color:'#9A9B9B',textWrap:'nowrap',paddingTop:'9px',paddingBottom:'9px'}}>{position.staking_pool.pool_duration}</TableCell>
        <TableCell  sx={{...(open&&{borderBottom:'0px solid white'}),fontWeight:'500', fontSize:'12px',fontFamily:'Montserrat',lineHeight:'16px',color:'#9A9B9B',padding:'0px 10px'}}>{status==='funds_are_withdrawn'? <Button disabled sx={{display:'flex',padding:'16px 8px', color:'#9578F9',fontFamily: 'Montserrat',fontSize: '12px',fontWeight: '700',lineHeight: '16px',letterSpacing: '0.04em',textWrap:'nowrap'}}>Claim interest</Button> :<Button  sx={{display:'flex',padding:'16px 8px', color:'#9578F9',fontFamily: 'Montserrat',fontSize: '12px',fontWeight: '700',lineHeight: '16px',letterSpacing: '0.04em',textWrap:'nowrap'}}>Claim interest</Button>} </TableCell>

      </TableRow>

      <TableRow  sx={{'& .MuiTableCell-root.MuiTableCell-body':{
              borderBottomColor:'#3A3B3C',paddingLeft:'8px'
          }}} style={{ paddingBottom: 0, paddingTop: 0, display:'none',
  maxHeight: '0px',
  overflow: 'hidden',
  transition: 'max-height 1s cubic-bezier(0, 1, 0, 1)' ,...(open&&{ maxHeight: '99em',display:'table-row',
    transition: 'max-height 1s ease-in-out'}) }}>
<TableCell></TableCell>
<TableCell></TableCell>
<TableCell></TableCell>
<TableCell></TableCell>
<TableCell></TableCell>
                   <TableCell sx={{fontWeight:'500', fontSize:'12px',color:'white',fontFamily:'Montserrat',lineHeight:'16px'}}>Weekly</TableCell>
                   <TableCell></TableCell>
                   <TableCell sx={{fontWeight:'500', fontSize:'12px',fontFamily:'Montserrat',lineHeight:'16px',color:'#9A9B9B'}}><span style={{color:'#F33E29'}} >Liquidated</span><br></br> 21/05/2023 14:53</TableCell>
                   <TableCell sx={{fontWeight:'500', fontSize:'12px',color:'#9A9B9B',fontFamily:'Montserrat',lineHeight:'16px',}}>21/05/2023 
14:53</TableCell>
<TableCell sx={{fontWeight:'500', fontSize:'12px',fontFamily:'Montserrat',lineHeight:'16px',color:'#9A9B9B'}}><div style={{display:'flex',justifyContent:'space-between'}}>0 <img src={images.linkGreen} alt="link" /></div></TableCell>
<TableCell sx={{fontWeight:'500', fontSize:'12px',fontFamily:'Montserrat',lineHeight:'16px',color:'#9A9B9B'}}><div style={{display:'flex',justifyContent:'space-between'}}>0 <img src={images.linkGreen} alt="link" /></div></TableCell>

 
      </TableRow>
      </>
    );
}

export default TableRowBuy;
