
import BuyOrdersBlock from "../../components/BuyOrdersBlock/BuyOrdersBlock";
import ControlPools from "../../components/ControlPools/ControlPools";
// import SellOrdersBlock from "../../components/SellOrdersBlock/SellOrdersBlock";
import {useState,useEffect,useRef} from 'react'
import api from '../../API/levstake.js'
// import {useUser} from '../../Context/userContext.jsx'
import localStorage from '../../helpers/localStorage.js'
const Dashboard = () => {
const [activePositions, setActivePositions] = useState('');
const [historyPositions, setHistoryPositions] = useState('');
// const {isLoggedIn} = useUser()


useEffect(() => {
    
api.getPositions('active').then(data=>{
   
    setActivePositions(data)
})
const intPos1 = setInterval(() => {

    if(localStorage.load('TOKEN')){
        api.getPositions('active').then(data=>{
    
            setActivePositions(data)
        }) 
    }else{
        clearInterval(intPos1)
    }
   
}, 4000);
}, []);

useEffect(() => {
api.getPositions('history').then(data=>{
   
    setHistoryPositions(data)
})
const intPos2 = setInterval(() => {
    if (localStorage.load('TOKEN')) {
        api.getPositions('history').then(data=>{

            setHistoryPositions(data)
        })  
    } else {
        clearInterval(intPos2)
    }
  
}, 4000);
}, []);



    return (
        <div>
           <ControlPools></ControlPools>
         
                {activePositions && <BuyOrdersBlock activePositions={activePositions} historyPositions={historyPositions}></BuyOrdersBlock>}
            {/* <SellOrdersBlock></SellOrdersBlock> */}
        </div>
    );
}

export default Dashboard;
