import BuySellSwitch from "../BuySellSwitch/BuySellSwitch";
import { useState,useEffect } from 'react';
import {Box,FormControl,Select,MenuItem,InputLabel,Typography,Button,TextField} from '@mui/material';
import styled from './BuySellBlock.module.css';
import Web3 from 'web3';
import images from "../../assets/images";
import api from '../../API/levstake.js'
import localStorage from "../../helpers/localStorage";
const BuySellBlock = ({pools,selectedPool}) => {
    const [action, setAction] = useState('buy');
    
const [instrument, setInstrument] = useState(pools[0]?.id);

const [leverage, setLeverage] = useState('');
const [userAmount, setUserAmount] = useState('');
function handleUserAmount(e) {
  setUserAmount(e.target.value)
}
useEffect(() => {
 if( typeof selectedPool === "number"){
  setInstrument(selectedPool)
 }

}, [selectedPool]);

const currentPoolData = pools.find(pool=>pool.id == instrument)


function maxProfit(amount,lever){
  if(!amount || !lever){
return '-'
  }
  return amount*lever
}

async function submitF(e) {
  e.preventDefault()
const lev =document.querySelector('#lev').value
const amounT =document.querySelector('#amounT').value



const wallet = localStorage.load('wallet')
console.log(wallet);

  const dataContr = await api.signDeposit(currentPoolData.id,100,10,'0xEa73Fe36682E1Db92239EB93D34fC12E3b397a6E')

  console.log(dataContr);

   const abi = await  api.blockChainData().then(
    data=>{
        console.log(data);
       return data[1].data.abi_old})

    console.log(abi);

const contractorAddres = '0xC8324c4bd3C3d6388F6DB7572B0Dd2cc0638f000'


const web3 = new Web3(window.ethereum)
  

const myContract = new web3.eth.Contract(abi,contractorAddres)
const myApprove = new web3.eth.Contract(abi,'0x9a0dcDcD2e92b588909DCCe1351F78549d3cAE92')
const approve = myApprove.methods.approve('0xC8324c4bd3C3d6388F6DB7572B0Dd2cc0638f000',100)

const result = await window.ethereum.request({
  method: 'eth_sendTransaction',
  params:[approve]
  })

const myFunc = myContract.methods.stakeAssets(dataContr.signed_data.position_id,dataContr.signed_data.amount,dataContr.signed_data.address,dataContr.signed_data.max_blocks,dataContr.signed_data.nonce,'deposit',dataContr.signature)

const currentAccount ='0x36f2D62E805E45382A1A4dF329A9b4031af1A6c8'

const transaction = {
    from: '0xEa73Fe36682E1Db92239EB93D34fC12E3b397a6E',
    to: contractorAddres,
    data:myFunc.encodeABI(),
    gas:(150000).toString()
}
// (5000).toString()
// const result = await window.ethereum.request({
// method: 'eth_sendTransaction',
// params:[transaction]
// })


}


const handleLeverage = (e) => {
    setLeverage(e.target.value);
  };
const handleInstrument = (e) => {
    setInstrument(e.target.value);
  };


    const  handleAction =(e, newAction)=>{
        if (newAction !== null) {
          setAction(newAction);
        }
      
      }


    return (
      <form onSubmit={submitF}  className={styled.block}>
          <BuySellSwitch action={action} handleAction={handleAction}></BuySellSwitch>
          <Box sx={{display:'flex',gap:'12px'}}>
          <FormControl  fullWidth>
          <InputLabel  sx={{fontSize:'12px',color:'primary.main',top:'6px',left:'-12px',fontFamily:'Montserrat',fontWeight:'500'}}  htmlFor="Instrument">
    Instrument
  </InputLabel>
 
       <Select sx={{fontFamily: 'Montserrat',
     fontSize: '16px',backgroundColor:'#161C2A',
     fontWeight: '400',borderRadius:'8px',
     lineHeight: '25px',padding:'8px 12px',color:'primary.main','&::before':{
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
                       fill:'white'
                   },'& .MuiInput-input.MuiInputBase-input.MuiSelect-select.MuiSelect-standard':{display:'flex',alignItems:'center',gap:'8px'},
               }}
         id="Instrument"
         variant='standard'
         value={instrument}
         label="Instrument"
         onChange={handleInstrument}>
          {pools.map(pool=>{
            return   <MenuItem key={pool.id} value={`${pool.id}`} ><img width="16px" height='16px' src={pool.asset.picture}></img>{pool.id} {pool.asset.blockchain.currency_name}  { pool.pool_conditions.min_leverage+'X'+" > "+pool.pool_conditions.max_leverage+'X'} {Number(pool.profit_rate).toFixed(1)}</MenuItem>
          })}
       
         
       </Select>
     </FormControl>


{/* 
    <FormControl  fullWidth>
        <InputLabel sx={{fontSize:'12px',color:'primary.main',top:'6px',left:'-12px',fontFamily:'Montserrat',fontWeight:'500'}}  htmlFor="Maturity">
  Maturity
</InputLabel>
      <Select sx={{fontFamily: 'Montserrat',
    fontSize: '16px',backgroundColor:'#161C2A',
    fontWeight: '400',borderRadius:'8px',
    lineHeight: '25px',padding:'8px 12px',color:'primary.main','&::before':{
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
                      fill:'white'
                  },'& .MuiInput-input.MuiInputBase-input.MuiSelect-select.MuiSelect-standard':{display:'flex',alignItems:'center',gap:'8px'},
              }}
        id="Maturity"
        variant='standard'
        value={maturity}
        label="Maturity"
        onChange={handleMaturity}>
        <MenuItem value={'5'} >5 days</MenuItem>
        <MenuItem value={'10'} >10 days</MenuItem>
        <MenuItem value={'20'} >20 days</MenuItem>
      </Select>
    </FormControl> */}
          </Box>

          {/* <Box sx={{display:'flex',gap:'12px',marginTop:'12px',marginBottom:'12px'}}>
          <FormControl  fullWidth>
          <InputLabel sx={{fontSize:'12px',color:'primary.main',top:'6px',left:'-12px',fontFamily:'Montserrat',fontWeight:'500'}}  htmlFor="Leverage X">
          Leverage X
  </InputLabel>
       <Select sx={{fontFamily: 'Montserrat',
     fontSize: '16px',backgroundColor:'#161C2A',
     fontWeight: '400',borderRadius:'8px',
     lineHeight: '25px',padding:'8px 12px',color:'primary.main','&::before':{
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
                       fill:'white'
                   },'& .MuiInput-input.MuiInputBase-input.MuiSelect-select.MuiSelect-standard':{display:'flex',alignItems:'center',gap:'8px'},
               }}
         id="Leverage X"
         variant='standard'
         value={leverage}
         label="Maturity"
         onChange={handleLeverage}>
         <MenuItem value={'2'} >2</MenuItem>
         <MenuItem value={'3'} >3</MenuItem>
         <MenuItem value={'5'} >5</MenuItem>
       </Select>
     </FormControl> */}


    {/* {action==='buy' && <FormControl  fullWidth>
          <InputLabel sx={{fontSize:'12px',color:'primary.main',top:'6px',left:'-12px',fontFamily:'Montserrat',fontWeight:'500'}}  htmlFor="Type">
    Type
  </InputLabel>
       <Select sx={{fontFamily: 'Montserrat',
     fontSize: '16px',backgroundColor:'#161C2A',
     fontWeight: '400',borderRadius:'8px',
     lineHeight: '25px',padding:'8px 12px',color:'primary.main','&::before':{
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
                       fill:'white'
                   },'& .MuiInput-input.MuiInputBase-input.MuiSelect-select.MuiSelect-standard':{display:'flex',alignItems:'center',gap:'8px'},
               }}
         id="Type"
         variant='standard'
         value={type}
         label="Maturity"
         onChange={handleType}>
         <MenuItem value={'MKT'} >MKT</MenuItem>
         <MenuItem value={'MKT2'} >MKT2</MenuItem>
         <MenuItem value={'MKT3'} >MKT3</MenuItem>
       </Select>
     </FormControl>} */}
          {/* </Box> */}
<Box sx={{display:'flex',flexDirection:'column',gap:'12px',marginTop:'12px',marginBottom:'12px'}}>
<p style={{fontSize:'12px',color:'white',top:'6px',left:'-12px',fontFamily:'Montserrat',fontWeight:'500'}}  htmlFor="Leverage X">
          Leverage X
  </p>
  <input value={leverage} onInput={handleLeverage} required id='lev' style={{fontFamily: 'Montserrat',
     fontSize: '16px',backgroundColor:'#161C2A',
     fontWeight: '400',borderRadius:'8px',
     lineHeight: '25px',padding:'12px 12px',color:'white'}} min={currentPoolData.pool_conditions.min_leverage} max={currentPoolData.pool_conditions.max_leverage} placeholder="1" className={styled.input} type="number"  />
</Box>
          <Typography color='primary.main' variant="tableCellMain" sx={{display:'flex',justifyContent:'space-between',marginBottom:'12px'}}>Interest yearly <Typography sx={{fontWeight:'500'}}>5%</Typography></Typography>
          <Typography color='primary.main' variant="tableCellMain" sx={{display:'flex',justifyContent:'space-between',marginBottom:'12px'}}>Leveraged Yearly interest <Typography sx={{fontWeight:'500'}}>75%</Typography></Typography>
          <Typography color='primary.main' variant="tableCellMain" sx={{display:'flex',justifyContent:'space-between',marginBottom:'12px'}}>Volume commission <Typography sx={{fontWeight:'500'}}>1%</Typography></Typography>
    <Typography color='primary.main' variant="tableCellMain" sx={{display:'flex',justifyContent:'space-between',marginBottom:'12px'}}>Max Interest <Typography sx={{fontWeight:'500'}}>{maxProfit(userAmount,leverage)}</Typography></Typography>
     
     <Box sx={{backgroundColor:'#161C2A',borderRadius:'8px',padding:'8px 8px 8px 12px',display:'flex',justifyContent:'space-between',alignItems:'center'}}>
<div className={styled.wrapAmount}><img width='16px' height='16px' src={currentPoolData.asset.picture} alt="coin" /><input value={userAmount} onInput={handleUserAmount} required id="amounT" placeholder="1.1234" className={styled.input} type="number" /></div>
     <button type="submit"  style={{backgroundColor:action==='buy' ? '#3AADA4':'#F33E29',padding:"12px 16px",borderRadius:'8px',display:'flex',alignItems:'center'}}> <img src={images.rocket} alt="rocket" /><Typography variant="subtitle1" sx={{fontSize:'14px',lineHeight:'16px',marginLeft:'16px',fontWeight:'500'}} color="primary">{action==='buy' ? 'Buy':'Sell'}</Typography></button>
     {/* <Button sx={{padding:"12px 16px",borderRadius:'8px',
    
    ...(action==='buy' && {backgroundColor:'#3AADA4'}),
    ...(action==='buy' && {backgroundColor:'#3AADA4'})
    }} ></Button> */}
     </Box>
     
     
      </form>
    );
}

export default BuySellBlock;



