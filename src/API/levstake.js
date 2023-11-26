import  axios  from "axios";
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import hexer from 'browser-string-hexer';
import localStorage from "../helpers/localStorage";

 async function getAuthData(){
     try{
        const res = await axios.get('https://levstake.frwd.one/api/auth/data/')
        return res.data.auth_data_string[0]
     } catch (err){
Notify.failure('Something go wrong! Please, try again!')
     }
  
}


async function getToken(address,signature){
    try{
       const res = await axios.post('https://levstake.frwd.one/api/auth/',{
           address,signature
       })
      
      Notify.success('Success authorization!')
       localStorage.save('TOKEN',res.data.token)
    } catch (err){
Notify.failure('Something go wrong! Please, try again!')
    }
 
}

async function getPositions(){
    try{
       
       const res = await axios.get('https://levstake.frwd.one/api/positions/',{},{
        headers:{
            Authorization: `Bearer ${localStorage.load('TOKEN')}`
        }
       })
console.log(res);
      Notify.success('Success authorization!')
    
    } catch (err){
Notify.failure('Something go wrong! Please, try again!')
    }
 
}

function metaMaskConnecting(){
   return window.ethereum.request({ method: 'eth_requestAccounts' })
    .then(data=>{
    console.log(data[0]);
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
     
      const msg = hexer(text);

      const sign = await window.ethereum.request({
        method: 'personal_sign',
        params: [msg, userWallet],
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

export default {getAuthData,signSign,metaMaskConnecting,getToken,getPositions}