
import BuyOrdersBlock from "../../components/BuyOrdersBlock/BuyOrdersBlock";
import ControlPools from "../../components/ControlPools/ControlPools";
// import SellOrdersBlock from "../../components/SellOrdersBlock/SellOrdersBlock";
const Dashboard = () => {
    return (
        <div>
           <ControlPools></ControlPools>
         
                <BuyOrdersBlock></BuyOrdersBlock>
            {/* <SellOrdersBlock></SellOrdersBlock> */}
        </div>
    );
}

export default Dashboard;
