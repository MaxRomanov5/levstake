import {TableRow,TableCell} from '@mui/material'
import { useState } from 'react';
import images from '../../assets/images';
const TableRowBuy = (data) => {
  const [open, setOpen] = useState(false);


    return (<>
        <TableRow   sx={{'& .MuiTableCell-root.MuiTableCell-body':{
              borderBottomColor:'#3A3B3C',paddingLeft:'8px'
          }}}>
        <TableCell sx={{...(open&&{borderBottom:'0px solid white'}),position:'relative',fontWeight:'500', fontSize:'12px',color:'white',fontFamily:'Montserrat',lineHeight:'16px','&&&&':{paddingLeft:'24px'}}} >
        {/* <img src={open ? images.tableArrowOpen:images.tableArrowClose} alt="arrow" style={{position:'absolute',top:'50%',left:'8px',transform:'translateY(-50%)'}} /> */}
        <div style={{display:'flex',gap:'8px',alignItems:'center'}}> <img src={images.ethereum} style={{width:'24px',height:'24px'}} alt='coin'></img>BTC </div>
        </TableCell>
        <TableCell sx={{...(open&&{borderBottom:'0px solid white'}),fontWeight:'500', fontSize:'12px',color:'white',fontFamily:'Montserrat',lineHeight:'16px'}}>
        $1.000,00
        </TableCell>
        <TableCell sx={{...(open&&{borderBottom:'0px solid white'}),fontWeight:'500', fontSize:'12px',color:'white',fontFamily:'Montserrat',lineHeight:'16px',textWrap:'nowrap'}}>21/05/2023 
14:53</TableCell>
        <TableCell sx={{...(open&&{borderBottom:'0px solid white'}),fontWeight:'500', fontSize:'12px',color:'white',fontFamily:'Montserrat',lineHeight:'16px'}}>XS</TableCell>
        <TableCell sx={{...(open&&{borderBottom:'0px solid white'}),fontWeight:'500', fontSize:'12px',color:'white',fontFamily:'Montserrat',lineHeight:'16px'}}>5%</TableCell>
        <TableCell sx={{...(open&&{borderBottom:'0px solid white'}),fontWeight:'500', fontSize:'12px',color:'white',fontFamily:'Montserrat',lineHeight:'16px',textWrap:'nowrap'}}>On maturity</TableCell>
        <TableCell sx={{...(open&&{borderBottom:'0px solid white'}),fontWeight:'500', fontSize:'12px',color:'white',fontFamily:'Montserrat',lineHeight:'16px'}}>0,546</TableCell>
        <TableCell sx={{...(open&&{borderBottom:'0px solid white'}),fontWeight:'500', fontSize:'12px',fontFamily:'Montserrat',lineHeight:'16px',color:'#9A9B9B',textWrap:'nowrap',paddingTop:'9px',paddingBottom:'9px'}}><span style={{color:'#9578F9'}} >Active</span><br></br> 21/05/2023 14:53</TableCell>
        <TableCell sx={{...(open&&{borderBottom:'0px solid white'}),fontWeight:'500', fontSize:'12px',fontFamily:'Montserrat',lineHeight:'16px',color:'#9A9B9B',textWrap:'nowrap',paddingTop:'9px',paddingBottom:'9px'}}>90 days <br></br> 21/05/2023 14:53</TableCell>
        <TableCell sx={{...(open&&{borderBottom:'0px solid white'}),fontWeight:'500', fontSize:'12px',fontFamily:'Montserrat',lineHeight:'16px',color:'#9A9B9B'}}><div style={{display:'flex',justifyContent:'space-between'}}>0 <img src={images.linkGreen} alt="link" /></div></TableCell>
        <TableCell sx={{...(open&&{borderBottom:'0px solid white'}),fontWeight:'500', fontSize:'12px',fontFamily:'Montserrat',lineHeight:'16px',color:'#9A9B9B'}}><div style={{display:'flex',justifyContent:'space-between'}}>0 <img src={images.linkGreen} alt="link" /></div></TableCell>
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
