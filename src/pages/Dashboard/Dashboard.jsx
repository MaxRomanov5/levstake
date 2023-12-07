
import BuyOrdersBlock from "../../components/BuyOrdersBlock/BuyOrdersBlock";
import ControlPools from "../../components/ControlPools/ControlPools";
// import SellOrdersBlock from "../../components/SellOrdersBlock/SellOrdersBlock";
import {useState,useEffect} from 'react'
import api from '../../API/levstake.js'
const Dashboard = () => {
const [activePositions, setActivePositions] = useState('');
const [historyPositions, setHistoryPositions] = useState('');
useEffect(() => {
api.getPositions('active').then(data=>{
    console.log(data);
    setActivePositions(data)
})
setInterval(() => {
    api.getPositions('active').then(data=>{
    
        setActivePositions(data)
    })
}, 4000);
}, []);

useEffect(() => {
api.getPositions('history').then(data=>{
    console.log(data);
    setHistoryPositions(data)
})
setInterval(() => {
    api.getPositions('history').then(data=>{
    console.log(data);
        setHistoryPositions(data)
    })
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
