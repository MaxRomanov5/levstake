import  axios  from "axios";
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import hexer from 'browser-string-hexer';
import localStorage from "../helpers/localStorage";

 async function getAuthData(address){
     try{console.log(address);
        const res = await axios.get(`https://levstake.frwd.one/api/auth/data/?user_address=${address}`)
     

        const a = hexer(res.data.auth_data_string)
        return a
     } catch (err){
Notify.failure('Something go wrong! Please, try again!')
     }
  
}

async function getAssetPrice(ticker){
  try{
     const res = await axios.get(`https://levstake.frwd.one/api/asset_price/?ticker=${ticker}`)
  

 
     return res.data.current_price
  } catch (err){
Notify.failure('ass')
  }

}


async function getToken(address,signature){
    try{
       const res = await axios.post('https://levstake.frwd.one/api/auth/',{
           address,signature
       })
      
      Notify.success('Success authorization!')
       localStorage.save('TOKEN',res.data.token)
       return res.data.token
    } catch (err){
Notify.failure('Something go wrong! Please, try again!')
    }
 
}

async function getPositions(type){
    try{
       
       const res = await axios.get(`https://levstake.frwd.one/api/positions/?position_type=${type}`,{
        headers:{
            Authorization: `Bearer ${localStorage.load('TOKEN')}`
        }
       })
  
    return res.data
    } catch (err){
Notify.failure('Something go wrong! Please, try again!')
    }

}

function metaMaskConnecting(){
   return window.ethereum.request({ method: 'eth_requestAccounts' })
    .then(data=>{
  
        return data[0]    
}
    )
    .catch((error) => {
      if (error.code === 4001) {
        Notify.failure('Please connect to MetaMask.')
    
      } else {
        console.error(error);
      }
    });
 
}


const signSign = async (text,userWallet) => {
    try {
     


      const sign = await window.ethereum.request({
        method: 'personal_sign',
        params: [text, userWallet],
      });
return sign
    } catch (err) {
        if(err.code === 4001){
            Notify.failure('You denied message signature. Please, try again! ')
            return
        }
      
        Notify.failure('Something go wrong! Please, try again!')
    }
  };

  async function signDeposit(pool_id,amount,leverage,sender){
    try{
       const res = await axios.post('https://levstake.frwd.one/api/sign_deposit/',{
        pool_id: pool_id,
  amount: amount,
  leverage: leverage,
  sender: sender
       },{
        headers:{
            Authorization: `Bearer ${localStorage.load('TOKEN')}`
        }
       })
      


       return res.data
    } catch (err){
   
      if(err.response.status === 400){
Notify.failure('Pool is closed!')}
    }
 
}


async function blockChainData(){
  try{
     const res = await axios.get('https://levstake.frwd.one/api/blockchain_data/',{
      headers:{
          Authorization: `Bearer ${localStorage.load('TOKEN')}`
      }
     })
    


     return res.data
  } catch (err){
Notify.failure('Something go wrong! Please, try again!')
  }

}

async function getPools(){
  try{
     const res = await axios.get('https://levstake.frwd.one/api/pools/',{
      headers:{
          Authorization: `Bearer ${localStorage.load('TOKEN')}`
      }
     })
    


     return res.data
  } catch (err){
Notify.failure('Something go wrong! Please, try again!')
  }

}

async function getAssetId(id){
  try{
     const res = await axios.get(`https://levstake.frwd.one/api/asset_data/?asset_id=${id}`,{
      headers:{
          Authorization: `Bearer ${localStorage.load('TOKEN')}`
      }
     })
     console.log(res);
     const abi = await axios.get(`${res.data.abi_url}`)
console.log(abi);

     return abi.data
  } catch (err){
Notify.failure('Something go wrong! Please, try again!')
  }

}




export default {getAssetPrice,getAuthData,signSign,metaMaskConnecting,getToken,getPositions,signDeposit,blockChainData,getPools,getAssetId}