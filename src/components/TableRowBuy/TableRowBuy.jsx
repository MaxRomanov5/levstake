import {TableRow,TableCell,Button,useTheme,useMediaQuery} from '@mui/material'
import { useState } from 'react';
import images from '../../assets/images';
import api from '../../API/levstake.js'
import localStorage from '../../helpers/localStorage';
import Web3 from "web3";
const TableRowBuy = ({position,active}) => {
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const noDEsk = useMediaQuery(theme.breakpoints.down("lt"));


  function statusMaker(status){
    if(status==='waiting_for_funds'){
      return <span style={{color:'#3AADA4'}} >waiting for funds</span>
    }
    if(status==='funds_are_withdrawn'){
      return <span style={{color:'#C23221'}} >funds are withdrawn</span>
    }
  }




async function withdrawPosition(e) {
console.log(e.target.id);
const web3 = new Web3(window.ethereum);
const wallet = localStorage.load("wallet");
const normalWallet = web3.utils.toChecksumAddress(wallet);
const dataContr = await api.signWithdraw(Number(e.target.id),normalWallet)
console.log(dataContr);

const contractorAddres = position.blockchain.master_contract_address

const myContract = new web3.eth.Contract(
  position.blockchain.master_contract_abi,
  contractorAddres
);


const myFunc = myContract.methods.unstakeAssets(dataContr.signed_data.position_id,
  dataContr.signed_data.amount,
  dataContr.signed_data.currency,
  dataContr.signed_data.max_block,
  dataContr.signed_data.nonce,
  dataContr.signed_data.action,
  dataContr.signature
);

const transaction = {
  from: normalWallet,
  to: contractorAddres,
  data: myFunc.encodeABI(),
  gas: (150000).toString(),
};

const result = await window.ethereum.request({
  method: "eth_sendTransaction",
  params: [transaction],
});
}



console.log(!!position.transaction_url);




    return (<>
        <TableRow   sx={{'& .MuiTableCell-root.MuiTableCell-body':{
              borderBottomColor:'#3A3B3C',paddingLeft:'8px'
          }}}>
        <TableCell sx={{...(open&&{borderBottom:'0px solid white'}),position:'relative',fontWeight:'500', fontSize:'12px',color:'white',fontFamily:'Montserrat',lineHeight:'16px',}} >
        {/* <img src={open ? images.tableArrowOpen:images.tableArrowClose} alt="arrow" style={{position:'absolute',top:'50%',left:'8px',transform:'translateY(-50%)'}} /> */}
        <div style={{display:'flex',gap:'8px',alignItems:'center'}}> <img src={position.staking_pool.asset.picture} style={{width:'24px',height:'24px'}} alt='coin'></img>{position.staking_pool.asset.name}</div>
        </TableCell>
        <TableCell sx={{...(open&&{borderBottom:'0px solid white'}),fontWeight:'500', fontSize:'12px',color:'white',fontFamily:'Montserrat',lineHeight:'16px'}}>
        {(Number(position.user_amount)).toFixed(3)}
        </TableCell>
        <TableCell sx={{...(open&&{borderBottom:'0px solid white'}),fontWeight:'500', fontSize:'12px',color:'white',fontFamily:'Montserrat',lineHeight:'16px',textWrap:'nowrap'}}>{position.leverage}</TableCell>
        <TableCell sx={{...(open&&{borderBottom:'0px solid white'}),fontWeight:'500', fontSize:'12px',color:'white',fontFamily:'Montserrat',lineHeight:'16px'}}>{Number(position.staking_pool.profit_rate).toFixed(1)+'%'}</TableCell>
        <TableCell sx={{...(open&&{borderBottom:'0px solid white'}),fontWeight:'500', fontSize:'12px',color:'white',fontFamily:'Montserrat',lineHeight:'16px'}}><a style={{display:'block',position:'relative'}} href={position.transaction_url} >{position.transaction_url ? <img src={images.linkGreen}></img> :<span style={{position:'absolute',top:'0px',right:'0px'}} className="loader"></span>}</a></TableCell>
        <TableCell sx={{...(open&&{borderBottom:'0px solid white'}),fontWeight:'500', fontSize:'12px',color:'white',fontFamily:'Montserrat',lineHeight:'16px',textWrap:'nowrap'}}>On maturity</TableCell>
        <TableCell sx={{...(open&&{borderBottom:'0px solid white'}),fontWeight:'500', fontSize:'12px',color:'white',fontFamily:'Montserrat',lineHeight:'16px'}}>{(Number(position.liquidation_price)).toFixed(3)}</TableCell>
        <TableCell sx={{...(open&&{borderBottom:'0px solid white'}),fontWeight:'500', fontSize:'12px',fontFamily:'Montserrat',lineHeight:'16px',color:'#9A9B9B',textWrap:'nowrap',paddingTop:'9px',paddingBottom:'9px'}}>{position.status.split('_').join(' ')}</TableCell>
        <TableCell sx={{...(open&&{borderBottom:'0px solid white'}),fontWeight:'500', fontSize:'12px',fontFamily:'Montserrat',lineHeight:'16px',color:'#9A9B9B',textWrap:'nowrap',paddingTop:'9px',paddingBottom:'9px'}}>{position.staking_pool.pool_duration}</TableCell>
        {active === 'active' && <TableCell  sx={{...(open&&{borderBottom:'0px solid white'}),fontWeight:'500', fontSize:'12px',fontFamily:'Montserrat',lineHeight:'16px',color:'#9A9B9B',padding:'0px 10px'}}>{position.status!=='closed'? <Button disabled sx={{display:'flex',padding:'16px 8px',"&&&&&": {color:'grey'},fontFamily: 'Montserrat',fontSize: '12px',fontWeight: '700',lineHeight: '16px',letterSpacing: '0.04em',textWrap:'nowrap'}}>Claim interest</Button> :<Button id={position.id} onClick={withdrawPosition}  sx={{display:'flex',padding:'16px 8px', color:'#9578F9',fontFamily: 'Montserrat',fontSize: '12px',fontWeight: '700',lineHeight: '16px',letterSpacing: '0.04em',textWrap:'nowrap'}}>Claim interest</Button>} </TableCell>}

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
