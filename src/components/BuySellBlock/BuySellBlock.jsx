import BuySellSwitch from "../BuySellSwitch/BuySellSwitch";
import { useState } from 'react';
import {Box,FormControl,Select,MenuItem,InputLabel,Typography,Button} from '@mui/material';
import styled from './BuySellBlock.module.css';

import images from "../../assets/images";
const BuySellBlock = () => {
    const [action, setAction] = useState('buy');
const [instrument, setInstrument] = useState('ETH/5days');
const [maturity, setMaturity] = useState('5');
const [leverage, setLeverage] = useState('2');
const [type, setType] = useState('MKT');




const handleType = (e) => {
    setType(e.target.value);
  };
const handleLeverage = (e) => {
    setLeverage(e.target.value);
  };
const handleInstrument = (e) => {
    setInstrument(e.target.value);
  };
  const handleMaturity = (e) => {
    setMaturity(e.target.value);
  };

    const  handleAction =(e, newAction)=>{
        if (newAction !== null) {
          setAction(newAction);
        }
      
      }

    return (
      <div className={styled.block}>
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
         <MenuItem value={'ETH/5days'} ><img width="16px" height='16px' src={images.ethereum}></img>5 days</MenuItem>
         <MenuItem value={'ETH/10days'} ><img width="16px" height='16px' src={images.ethereum}></img>10 days</MenuItem>
         <MenuItem value={'ETH/20days'} ><img width="16px" height='16px' src={images.ethereum}></img>20 days</MenuItem>
       </Select>
     </FormControl>



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
     </FormControl>
          </Box>

          <Box sx={{display:'flex',gap:'12px',marginTop:'12px',marginBottom:'12px'}}>
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
     </FormControl>


    {action==='buy' && <FormControl  fullWidth>
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
     </FormControl>}
          </Box>

          <Typography color='primary.main' variant="tableCellMain" sx={{display:'flex',justifyContent:'space-between',marginBottom:'12px'}}>Interest yearly <Typography sx={{fontWeight:'500'}}>5%</Typography></Typography>
          <Typography color='primary.main' variant="tableCellMain" sx={{display:'flex',justifyContent:'space-between',marginBottom:'12px'}}>Leveraged Yearly interest <Typography sx={{fontWeight:'500'}}>75%</Typography></Typography>
          <Typography color='primary.main' variant="tableCellMain" sx={{display:'flex',justifyContent:'space-between',marginBottom:'12px'}}>Volume commission <Typography sx={{fontWeight:'500'}}>1%</Typography></Typography>
          <Typography color='primary.main' variant="tableCellMain" sx={{display:'flex',justifyContent:'space-between',marginBottom:'12px'}}>Settlement <Typography sx={{fontWeight:'500'}}>3 - 5%</Typography></Typography>
     
     <Box sx={{backgroundColor:'#161C2A',borderRadius:'8px',padding:'8px 8px 8px 12px',display:'flex',justifyContent:'space-between',alignItems:'center'}}>
<div className={styled.wrapAmount}><img width='16px' height='16px' src={images.ethereum} alt="coin" /><input placeholder="1.1234" className={styled.input} type="number" /></div>
     <Button  variant="contained" sx={{backgroundColor:action==='buy' ? '#3AADA4':'#F33E29',padding:"12px 16px",borderRadius:'8px',display:'flex',alignItems:'center'}}> <img src={images.rocket} alt="rocket" /><Typography variant="subtitle1" sx={{fontSize:'14px',lineHeight:'16px',marginLeft:'16px',fontWeight:'500'}} color="primary">{action==='buy' ? 'Buy':'Sell'}</Typography></Button>
     {/* <Button sx={{padding:"12px 16px",borderRadius:'8px',
    
    ...(action==='buy' && {backgroundColor:'#3AADA4'}),
    ...(action==='buy' && {backgroundColor:'#3AADA4'})
    }} ></Button> */}
     </Box>
     
     
      </div>
    );
}

export default BuySellBlock;



