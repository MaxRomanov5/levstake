
import BuyOrdersBlock from "../../components/BuyOrdersBlock/BuyOrdersBlock";
import ControlPools from "../../components/ControlPools/ControlPools";
// import SellOrdersBlock from "../../components/SellOrdersBlock/SellOrdersBlock";
import {useState,useEffect} from 'react'
import api from '../../API/levstake.js'
const Dashboard = () => {
const [positions, setPositions] = useState('');
useEffect(() => {
api.getPositions().then(data=>{
    setPositions(data)
})
setInterval(() => {
    api.getPositions().then(data=>{
        setPositions(data)
    })
}, 7000);
}, []);



    return (
        <div>
           <ControlPools></ControlPools>
         
                {positions && <BuyOrdersBlock positions={positions}></BuyOrdersBlock>}
            {/* <SellOrdersBlock></SellOrdersBlock> */}
        </div>
    );
}

export default Dashboard;
