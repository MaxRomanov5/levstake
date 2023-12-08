import {Typography} from '@mui/material'
import api from '../../API/levstake.js'
import {useState,useEffect} from 'react'
import localStorage from '../../helpers/localStorage.js'

const Assetprice = ({currentPoolData,leverage,settlementCommission}) => {
const [assetPrice, setAssetPrice] = useState(0);

useEffect(() => {

api.getAssetPrice(currentPoolData.asset.ticker).then(data=>{

})
const priceInt = setInterval(() => {


    if(localStorage.load('TOKEN')){
    api.getAssetPrice(currentPoolData.asset.ticker).then(data=>{
      
        setAssetPrice(data)
       })}else{
           clearInterval(priceInt)
       }



}, 5000);

}, []);
    return (
        <>
             <Typography color='primary.main' variant="tableCellMain" sx={{display:'flex',justifyContent:'space-between',marginBottom:'12px'}}>Asset Price <Typography sx={{fontWeight:'500'}}>{assetPrice}</Typography></Typography>
    <Typography color='primary.main' variant="tableCellMain" sx={{display:'flex',justifyContent:'space-between',marginBottom:'12px'}}>Liquidation price <Typography sx={{fontWeight:'500'}}>{(assetPrice - (assetPrice/leverage*(100-settlementCommission)/100)).toFixed(3)}</Typography></Typography> 
        </>
    );
}

export default Assetprice;
